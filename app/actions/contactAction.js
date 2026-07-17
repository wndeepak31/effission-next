'use server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitContactForm(formData) {
  // Extract data
  const name = formData.get('name');
  const email = formData.get('email');
  const company = formData.get('company');
  const mobile = formData.get('mobile');
  const product = formData.get('product');
  const message = formData.get('message');

  // Basic validation
  if (!name || !email || !message) {
    return { success: false, error: 'Name, email, and message are required.' };
  }

  try {
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
