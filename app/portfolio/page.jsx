export default function Portfolio() {
  return (
    <section className="page">
      <h1 className="page-title">Portfolio & Results</h1>

      <p className="page-intro">
        Here are examples of how I support entrepreneurs and creators behind
        the scenes. These are typical outcomes you can expect when we work
        together.
      </p>

      <div className="page-section">
        <p className="section-subtitle">Case studies</p>
        <h2 className="section-title">Recent client work</h2>

        <div className="card-grid card-grid--wide">
          <div className="card">
            <div className="card-pill">Content Creator</div>
            <h3 className="card-title">Instagram & TikTok consistency</h3>
            <ul>
              <li>Organized a 4-week content calendar using existing ideas.</li>
              <li>Scheduled 5–6 posts per week across Instagram and TikTok.</li>
              <li>Filtered DMs daily and flagged brand collabs for the creator.</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-pill">Business Coach</div>
            <h3 className="card-title">Group program operations</h3>
            <ul>
              <li>Set up onboarding emails and reminder sequences.</li>
              <li>Tracked client progress and payments in a shared dashboard.</li>
              <li>Coordinated weekly group call times across time zones.</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-pill">Solo Entrepreneur</div>
            <h3 className="card-title">Inbox clean-up & systems</h3>
            <ul>
              <li>Cleaned and labeled a 3,000+ email inbox.</li>
              <li>Created templates for FAQs and common responses.</li>
              <li>Built a weekly checklist to keep admin work on track.</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-pill">Launch Support</div>
            <h3 className="card-title">Digital product launch</h3>
            <ul>
              <li>Tracked sign-ups and revenue in a simple spreadsheet.</li>
              <li>Sent reminder emails to cart abandoners and waitlist leads.</li>
              <li>Kept everything organized so the creator focused on content.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
