import Link from "next/link";
import Image from "next/image";

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
              Hi, I’m <strong>Michiah Lee</strong>. I support online entrepreneurs
              and social media influencers with admin, content, and client
              support so you can focus on creating, coaching, and growing your
              business.
            </p>

            <Link href="/contact" className="book-button">
              Book a Discovery Call
            </Link>
          </div>

          <div className="hero-photo-wrap">
            <Image
              src="/michiah-headshot.jpg"
              alt="Michiah Lee, virtual assistant"
              width={320}
              height={320}
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
          <li>Inbox + calendar management so nothing falls through the cracks.</li>
          <li>Uploading and scheduling your content on the right platforms.</li>
          <li>Client onboarding, reminders, and simple launch support.</li>
        </ul>
      </section>
    </>
  );
}
