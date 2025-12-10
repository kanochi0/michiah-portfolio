export default function Contact() {
  return (
    <section className="page">
      <h1 className="page-title">Book a Consultation</h1>

      <p className="page-intro">
        Ready to get support? Use the link below to book a free discovery call
        to talk about your business, your content, and where you need the most help.
      </p>

      <a
        href="https://calendly.com/your-michiah-link-here"
        target="_blank"
        rel="noreferrer"
        className="book-button"
      >
        Book a Discovery Call
      </a>

      <p style={{ marginTop: "24px" }}>
        Prefer email? You can also reach me at{" "}
        <strong>michiah.lee@gmail.com</strong>.
      </p>
    </section>
  );
}
