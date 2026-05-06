import SectionIndicator from './SectionIndicator';

const Contact = () => {
  return (
    <section className="contact">
      <SectionIndicator 
        number="" 
        label="" 
        isEnd={true}
      />

      <div className="contact-content">
        <h2 className="contact-title">
          A question. An enquiry. A partnership.<br />
          Whatever brings you here, we are ready.
        </h2>

        <button className="contact-btn">
          Get in Touch
        </button>
      </div>
    </section>
  );
};

export default Contact;
