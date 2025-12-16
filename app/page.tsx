import Link from "next/link";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Michiah helped me get my calendar and inbox under control. I stopped missing messages, and my week finally felt organized.",
    name: "Taylor.E",
    role: "Business Coach",
    stars: 5,
  },
  {
    quote:
      "Posting consistently was my biggest struggle. With Michiah managing my schedule, I stayed visible without feeling overwhelmed.",
    name: "JBL",
    role: "Content Creator",
    stars: 5,
  },
  {
    quote:
      "She’s proactive, reliable, and easy to work with. The systems she set up saved me hours every week.",
    name: "K.B",
    role: "Online Entrepreneur",
    stars: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero with photo */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-text">
            <p className="hero-subtitle">Virtual Assistant</p>
            <h1 className="page-title">
              Helping entrepreneurs & creators stay organized and consistent.
            </h1>

            <p className="page-intro">
              Hi, I’m <strong>Michiah Lee</strong>. I support online
              entrepreneurs and social media influencers with admin, content,
              and client support so you can focus on creating, coaching, and
              growing your business.
            </p>

            <Link href="/contact" className="book-button">
              Book a Discovery Call
            </Link>
          </div>

          <div className="hero-photo-wrap">
            <Image
              src="/michiah-headshot.jpg"
              alt="Michiah Lee, virtual assistant"
              width={420}
              height={420}
              className="hero-photo"
              priority
            />
          </div>
        </div>
      </section>

      {/* Main content below hero */}
      <section className="page">
        <h2 className="section-title">Who I Work With</h2>
        <ul className="page-list">
          <li>Coaches and consultants</li>
          <li>Social media influencers / content creators</li>
          <li>Online business owners and personal brands</li>
        </ul>

        <h2 className="section-title">How I Help</h2>
        <ul className="page-list">
          <li>Inbox & calendar management so nothing falls through the cracks.</li>
          <li>Uploading and scheduling your content on the right platforms.</li>
          <li>Client onboarding, reminders, and simple launch support.</li>
        </ul>

        {/* Testimonials */}
        <section className="page-section">
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title">What clients say</h2>

          <div className="testimonial-grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i}>
                <div className="testimonial-stars">
                  {"★".repeat(t.stars)}
                  {"☆".repeat(5 - t.stars)}
                </div>

                <p className="testimonial-quote">“{t.quote}”</p>

                <div className="testimonial-meta">
                  <span className="testimonial-name">{t.name}</span>
                  <span className="testimonial-role">{t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}
