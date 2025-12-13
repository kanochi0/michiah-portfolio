export default function Services() {
  return (
    <section className="page">
      <h1 className="page-title">Services</h1>

      <p className="page-intro">
        I provide done-for-you virtual assistant support so you can stay in
        your zone of genius while the backend of your business runs smoothly.
      </p>

      <div className="page-section">
        <p className="section-subtitle">Core support</p>
        <h2 className="section-title">How I can support your business</h2>

        <div className="card-grid">
          <div className="card">
            <div className="card-pill">Admin & Operations</div>
            <h3 className="card-title">Inbox & Calendar Management</h3>
            <ul>
              <li>Sort and prioritize emails so you only see what matters.</li>
              <li>Block time for deep work, calls, and content creation.</li>
              <li>Set reminders so nothing falls through the cracks.</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-pill">Client Experience</div>
            <h3 className="card-title">Client Onboarding & Follow-up</h3>
            <ul>
              <li>Send welcome emails and intake forms.</li>
              <li>Share call links, reminders, and follow-up notes.</li>
              <li>Keep a simple tracker of client status and next steps.</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-pill">Systems & Organization</div>
            <h3 className="card-title">Behind-the-Scenes Setup</h3>
            <ul>
              <li>Organize Google Drive / Notion so files are easy to find.</li>
              <li>Create simple checklists for your recurring tasks.</li>
              <li>Document workflows for how your business runs.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="page-section">
        <p className="section-subtitle">Creators & influencers</p>
        <h2 className="section-title">Social media & content support</h2>

        <div className="card-grid card-grid--wide">
          <div className="card">
            <div className="card-pill">Content Scheduling</div>
            <h3 className="card-title">Keep your content consistent</h3>
            <ul>
              <li>Upload and schedule posts using the content you provide.</li>
              <li>Maintain a simple content calendar so you see what’s coming.</li>
              <li>Format captions, tags, and links so everything looks polished.</li>
            </ul>
          </div>

          <div className="card">
            <div className="card-pill">Community & Launches</div>
            <h3 className="card-title">DMs & Launch Support</h3>
            <ul>
              <li>Filter DMs for leads, collabs, and important messages.</li>
              <li>Track sign-ups and payments during launches.</li>
              <li>Send reminders and basic follow-up messages.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
