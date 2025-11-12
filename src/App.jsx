import './App.css'
import turnpikeLogo from './assets/turnpikelogo.png'

const stats = [
  {
    label: 'Average clearance',
    value: '37 min',
    detail: 'from dispatch to lane reopen on Level 2 incidents',
  },
  { label: 'Coverage', value: '9 turnpikes', detail: 'PA • OH • NJ • NY • MA • FL • IL • MI • OK' },
  { label: 'Fleet assets', value: '18 units', detail: 'rotators, hazmat rigs, heavy-duty wreckers' },
]

const services = [
  {
    title: 'Heavy-Duty Recovery',
    description: '70-ton rotators, uprighting systems, and air cushion lifts for jackknifed or overturned tractors.',
    badge: 'Primary',
  },
  {
    title: 'Hazmat Containment',
    description: 'Certified hazmat crews with on-board booms, absorbents, and EPA reporting templates.',
    badge: 'Specialized',
  },
  {
    title: 'Incident Command Support',
    description: 'Unified command playbooks, drone assessment, and live progress dashboards for DOT partners.',
    badge: 'Ops',
  },
  {
    title: 'Fleet Transfer & Storage',
    description: 'Secure yards, refrigerated storage, and cargo cross-docking to keep shippers online.',
    badge: 'Logistics',
  },
]

const responseSteps = [
  {
    time: '0—5 min',
    title: 'Field intel + dispatch',
    detail: 'Multi-channel alerts, CAD notes translated into a single playbook, liaison assigned.',
  },
  {
    time: '5—15 min',
    title: 'Rolling response',
    detail: 'Nearest crew mobilized with preloaded hazmat kit; partner updates every 4 minutes.',
  },
  {
    time: '15—30 min',
    title: 'On-scene stabilization',
    detail: 'Traffic taper deployed, fuel offload begun, injured motorists relocated behind safe perimeter.',
  },
  {
    time: '30+ min',
    title: 'Recovery + reopen',
    detail: 'Rig uprighting, debris sweep, compliance photos, and DOT-ready incident log delivered.',
  },
]

const guarantees = [
  'Direct line to an operations lead—no call center maze.',
  'Photo + telemetry proof for every milestone.',
  'Redundant partner network to scale during severe weather.',
]

function App() {
  return (
    <div className="page">
      <header className="hero panel">
        <div className="hero__content">
          <p className="eyebrow">24/7 TURNPIKE RESPONSE • DOT + FLEET PARTNERS</p>
          <h1>
            When the highway stops,
            <span className="text-outline"> we get it moving again.</span>
          </h1>
          <p className="lead">
            Turnpike Recovery mobilizes hazmat-certified crews, 70-ton rotators, and real-time reporting to clear the most
            disruptive incidents in minutes—not hours.
          </p>
          <div className="actions">
            <a className="btn btn--primary" href="tel:+14845551234">
              Request dispatch
            </a>
            <a className="btn btn--ghost" href="/Turnpike_Recovery_Brand_Style_Guide.pdf" target="_blank" rel="noreferrer">
              Capability brief
            </a>
          </div>
          <div className="stat-grid">
            {stats.map((stat) => (
              <div key={stat.label} className="stat">
                <span className="stat__value">{stat.value}</span>
                <span className="stat__label">{stat.label}</span>
                <p className="stat__detail">{stat.detail}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="hero__card panel panel--light">
          <img src={turnpikeLogo} alt="Turnpike Recovery logo" className="hero__logo" />
          <p className="hero__tagline">National rapid-response unit dedicated to America&apos;s busiest toll roads.</p>
          <div className="hero__hotline">
            <span>Emergency hotline</span>
            <a href="tel:+14845551234">484 • 555 • 1234</a>
            <small>Live dispatch, 365 days a year</small>
          </div>
          <ul className="hero__list">
            <li>Command-certified liaisons for DOT, State Police, and fleet partners</li>
            <li>Live drone overview + telemetry delivered to your inbox</li>
            <li>Chain-of-custody documentation ready before tow departure</li>
          </ul>
        </div>
      </header>

      <section className="section">
        <div className="section__header">
          <p className="eyebrow">Capabilities</p>
          <h2>Built for the messiest scenes on the turnpike.</h2>
          <p className="section__lead">
            Every deployment ships with the exact equipment, compliance packets, and communications flow you need to keep
            freight moving and agencies briefed.
          </p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article key={service.title} className="card panel">
              <span className="badge">{service.badge}</span>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section panel panel--timeline">
        <div className="section__header section__header--compact">
          <p className="eyebrow">Incident timeline</p>
          <h2>Command-level visibility from the first call.</h2>
        </div>
        <ol className="timeline">
          {responseSteps.map((step) => (
            <li key={step.title} className="timeline__item">
              <span className="timeline__time">{step.time}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="section section--guarantee">
        <div className="panel panel--contrast">
          <p className="eyebrow eyebrow--light">Partner guarantee</p>
          <h2>Reliable, accountable, and always wheel-side.</h2>
          <ul className="guarantee-list">
            {guarantees.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="assurance">
            <p>Need turnkey coverage for your corridor?</p>
            <a href="mailto:ops@turnpikerecovery.com" className="btn btn--inverse">
              Book a readiness drill
            </a>
          </div>
        </div>
      </section>

      <section className="section cta panel">
        <div>
          <p className="eyebrow">Next steps</p>
          <h2>Schedule a 15-minute readiness review.</h2>
          <p>
            Walk through recent incidents, share your playbooks, and we&apos;ll align a standby plan that keeps every lane
            moving.
          </p>
        </div>
        <div className="cta__actions">
          <a className="btn btn--primary" href="https://calendly.com">
            Lock in a slot
          </a>
          <span className="cta__note">Or call 484 • 555 • 1234 for immediate coverage.</span>
        </div>
      </section>
    </div>
  )
}

export default App
