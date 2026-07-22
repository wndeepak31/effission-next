'use server';
import { Resend } from 'resend';
import { Pool } from '@neondatabase/serverless';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

// Utility to escape HTML to prevent XSS
function escapeHTML(str) {
  if (!str) return '';
  return str.toString()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function submitContactForm(formData) {
  // 1. Honeypot check for bots
  const botField = formData.get('bot_field');
  if (botField) {
    // If bot_field is filled, silently reject but return success to fool the bot
    return { success: true, message: 'Thanks for reaching out! We will get back to you soon.' };
  }

  // Extract data and trim whitespace
  const rawName = formData.get('name')?.toString().trim() || '';
  const rawEmail = formData.get('email')?.toString().trim() || '';
  const rawCompany = formData.get('company')?.toString().trim() || '';
  const rawMobile = formData.get('mobile')?.toString().trim() || '';
  const rawProducts = formData.getAll('product');
  const rawProduct = rawProducts.length > 0 ? rawProducts.join(', ').trim() : '';
  const rawMessage = formData.get('message')?.toString().trim() || '';

  // 2. Length Validations (prevent payload overflow)
  if (rawName.length > 100 || rawEmail.length > 150 || rawCompany.length > 150 || rawMobile.length > 50 || rawMessage.length > 2000) {
    return { success: false, error: 'Input exceeds maximum allowed length.' };
  }

  // 3. Basic validation
  if (!rawName || !rawEmail || !rawMessage) {
    return { success: false, error: 'Name, email, and message are required.' };
  }

  // 4. Sanitize inputs to prevent XSS in emails or admin panels
  const name = escapeHTML(rawName);
  const email = escapeHTML(rawEmail);
  const company = escapeHTML(rawCompany);
  const mobile = escapeHTML(rawMobile);
  const product = escapeHTML(rawProduct);
  const message = escapeHTML(rawMessage);

  try {
    // Database connection using connection pool
    const pool = new Pool({ connectionString: process.env.DATABASE_URL });

    // Ensure table exists
    await pool.query(`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        company VARCHAR(255),
        mobile VARCHAR(50),
        product VARCHAR(255),
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);

    // Insert into database
    await pool.query(
      `INSERT INTO contacts (name, email, company, mobile, product, message) VALUES ($1, $2, $3, $4, $5, $6)`,
      [name, email, company, mobile, product, message]
    );

    // Close the pool (optional if serverless environment reuses, but good practice for neon)
    await pool.end();

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Resend default for unverified domains
      to: 'noreply@effission.com', // Sending to the registered Resend email address
      reply_to: email, // This allows you to just hit "Reply" to reply to the sender!
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Mobile:</strong> ${mobile || 'N/A'}</p>
        <p><strong>Product:</strong> ${product || 'N/A'}</p>
        <br/>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (data.error) {
      console.error('Resend error:', data.error);
      return { success: false, error: 'Failed to send the email. Please try again later.' };
    }

    return { success: true, message: 'Thanks for reaching out! We will get back to you soon.' };
  } catch (error) {
    console.error('Server action error:', error);
    return { success: false, error: 'An unexpected error occurred. Please try again.' };
  }
}
