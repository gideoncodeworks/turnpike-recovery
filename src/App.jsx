import './App.css'
import turnpikeLogo from './assets/turnpikelogo.png'

const stats = [
  {
    label: 'Average response',
    value: '20 min',
    detail: 'or less to reach you in the Metro Detroit area',
  },
  { label: 'Availability', value: '24/7/365', detail: 'Always ready when you need us most' },
  { label: 'Service rating', value: '5-star', detail: 'Fast, friendly, and professional service' },
]

const services = [
  {
    title: 'Jumpstarts',
    description: 'Dead battery? We will get you started and back on the road in minutes.',
    badge: 'Popular',
  },
  {
    title: 'Tire Repair & Change',
    description: 'Flat tire or blowout? We handle tire changes and emergency repairs on-site.',
    badge: 'Essential',
  },
  {
    title: 'Lockout Service',
    description: 'Locked out of your vehicle? We will get you back in quickly and safely—no damage.',
    badge: 'Fast',
  },
  {
    title: 'Battery Installation',
    description: 'Need a new battery installed? We carry quality batteries and install them on the spot.',
    badge: 'Convenient',
  },
  {
    title: 'Fuel Delivery',
    description: 'Ran out of gas? We will bring fuel directly to you so you can keep moving.',
    badge: 'Lifesaver',
  },
]

const responseSteps = [
  {
    time: '0—2 min',
    title: 'Call us',
    detail: 'Speak directly to Anthony—no automated menus, no call centers. Just real help, fast.',
  },
  {
    time: '2—5 min',
    title: 'We are on the way',
    detail: 'Your location confirmed, service truck dispatched. We will keep you updated every step.',
  },
  {
    time: '5—20 min',
    title: 'We arrive',
    detail: 'Professional service tech arrives with tools, parts, and everything needed to get you moving.',
  },
  {
    time: '20—30 min',
    title: 'Back on the road',
    detail: 'Problem solved, payment handled, and you are safely back on your way.',
  },
]

const guarantees = [
  'Direct line to Anthony—real person, real help, every time.',
  'Upfront pricing with no hidden fees or surprise charges.',
  'Professional service that treats you like family, not a ticket number.',
]

function App() {
  return (
    <div className="page">
      <header className="hero panel">
        <div className="hero__content">
          <p className="eyebrow">24/7 ROADSIDE ASSISTANCE • METRO DETROIT</p>
          <h1>
            Your roadside assistance lifeline,
            <span className="text-outline"> anytime, anywhere.</span>
          </h1>
          <p className="lead">
            Turnpike Recovery delivers fast, friendly roadside assistance when you need it most. Jumpstarts, tire changes,
            lockouts, battery installs, and fuel delivery—all with a personal touch.
          </p>
          <div className="actions">
            <a className="btn btn--primary" href="tel:+13132148805">
              Call for help now
            </a>
            <a className="btn btn--ghost" href="mailto:turnpikerecovery@gmail.com">
              Email us
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
          <p className="hero__tagline">Your trusted roadside assistance partner in Metro Detroit.</p>
          <div className="hero__hotline">
            <span>Emergency hotline</span>
            <a href="tel:+13132148805">(313) 214-8805</a>
            <small>Available 24/7, 365 days a year</small>
          </div>
          <ul className="hero__list">
            <li>Fast response times—usually 20 minutes or less</li>
            <li>Speak directly to Anthony, no call center runaround</li>
            <li>Upfront pricing with no hidden fees</li>
          </ul>
        </div>
      </header>

      <section className="section">
        <div className="section__header">
          <p className="eyebrow">Our Services</p>
          <h2>Everything you need to get back on the road.</h2>
          <p className="section__lead">
            From dead batteries to flat tires, lockouts to fuel delivery—we have got you covered with fast,
            professional service you can count on.
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
          <p className="eyebrow">How it works</p>
          <h2>From your call to back on the road.</h2>
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
          <p className="eyebrow eyebrow--light">Our Promise</p>
          <h2>Reliable, honest, and always there when you need us.</h2>
          <ul className="guarantee-list">
            {guarantees.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className="assurance">
            <p>Need roadside assistance right now?</p>
            <a href="tel:+13132148805" className="btn btn--inverse">
              Call (313) 214-8805
            </a>
          </div>
        </div>
      </section>

      <section className="section cta panel">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h2>Save our number—you will be glad you did.</h2>
          <p>
            Whether you need help right now or just want to save our contact for when you do,
            we are here 24/7 to get you back on the road safely.
          </p>
        </div>
        <div className="cta__actions">
          <a className="btn btn--primary" href="tel:+13132148805">
            Call (313) 214-8805
          </a>
          <span className="cta__note">Or email us at turnpikerecovery@gmail.com</span>
        </div>
      </section>
    </div>
  )
}

export default App
