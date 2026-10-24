import React from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowDownRight,
  ArrowUpRight,
  MapPin,
  Phone,
  Paintbrush,
  Palette,
  Sparkles,
  Menu,
  X,
  Clock3,
} from 'lucide-react';
import './styles.css';

const MAPS_URL = 'https://maps.app.goo.gl/crA6VJNGuXAJSzke6';
const PHONE = '+9779851027661';

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [activeColor, setActiveColor] = React.useState(0);

  const colors = [
    { name: 'Warm Linen', hex: '#E7DCCB', note: 'Soft, calm, timeless' },
    { name: 'Forest Walk', hex: '#3E5747', note: 'Grounded and natural' },
    { name: 'Terracotta', hex: '#B96D50', note: 'Warmth with character' },
    { name: 'Deep Ink', hex: '#252923', note: 'Quiet, confident depth' },
    { name: 'Warm White', hex: '#F8F7F3', note: 'Light, open, effortless' },
  ];

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="announcement">
        <span className="announcement-dot" />
        Your local destination for paint & colour
        <a href={MAPS_URL} target="_blank" rel="noreferrer">
          Visit our store <ArrowUpRight size={13} />
        </a>
      </div>

      <header className="nav-wrap">
        <a className="brand" href="#home" aria-label="D.P.R. Subha Traders home">
          <span className="brand-mark">
            <span />
            <span />
            <span />
          </span>
          <span className="brand-name">
            D.P.R. <b>SUBHA TRADERS</b>
            <small>PAINT • COLOUR • HOME</small>
          </span>
        </a>

        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
        >
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <a href="#about" onClick={closeMenu}>Our approach</a>
          <a href="#colours" onClick={closeMenu}>Colour inspiration</a>
          <a href="#visit" onClick={closeMenu}>Find us</a>
          <a className="nav-cta" href={`tel:${PHONE}`} onClick={closeMenu}>
            Call the store <ArrowUpRight size={15} />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="eyebrow-line" />
              LALITPUR, NEPAL
              <span className="eyebrow-muted">/ YOUR LOCAL PAINT STORE</span>
            </div>

            <h1>
              Make room
              <br />
              for <em>colour.</em>
            </h1>

            <p className="hero-intro">
              Every space has a feeling. Start with the right colour, the right
              finish, and a place that helps you bring your vision home.
            </p>

            <div className="hero-actions">
              <a className="button button-dark" href={MAPS_URL} target="_blank" rel="noreferrer">
                Find our store <ArrowUpRight size={17} />
              </a>
              <a className="text-link" href="#colours">
                Explore colour ideas <ArrowDownRight size={16} />
              </a>
            </div>

            <div className="hero-footnote">
              <span className="footnote-icon"><MapPin size={15} /></span>
              <span>
                Satdobato–Tikabhairab Road
                <br />
                <b>Lalitpur 44700, Nepal</b>
              </span>
            </div>
          </div>

          <div className="hero-visual">
            <div
              className="hero-image"
              role="img"
              aria-label="Interior inspiration with warm, natural colours"
            />

            <div className="image-label">
              <span>01 / SPACE & FEELING</span>
              <span>Thoughtful colour starts here.</span>
            </div>

            <div className="floating-card">
              <div className="floating-card-top">
                <span>THE COLOUR EDIT</span>
                <Palette size={17} />
              </div>
              <div className="swatch-row">
                <i style={{ background: '#D8C5AA' }} />
                <i style={{ background: '#A7A48B' }} />
                <i style={{ background: '#B96D50' }} />
                <i style={{ background: '#E8E1D5' }} />
                <i style={{ background: '#3E5747' }} />
              </div>
              <p>Find a shade that feels like you.</p>
            </div>

            <div className="hero-number">D.P.R. <span>—</span> 01</div>
          </div>
        </section>

        <section className="trust-strip" aria-label="Store highlights">
          <div>
            <span className="trust-icon"><Paintbrush size={19} /></span>
            <span>
              <b>Paint & colour</b>
              <small>For your next project</small>
            </span>
          </div>

          <div>
            <span className="trust-icon"><Sparkles size={19} /></span>
            <span>
              <b>Fresh possibilities</b>
              <small>Make your space your own</small>
            </span>
          </div>

          <div>
            <span className="trust-icon"><MapPin size={19} /></span>
            <span>
              <b>Local to Lalitpur</b>
              <small>Easy to find, easy to visit</small>
            </span>
          </div>

          <a href={`tel:${PHONE}`} className="strip-call">
            <Phone size={16} /> Speak with the store <ArrowUpRight size={15} />
          </a>
        </section>

        <section className="intro-section section-pad" id="about">
          <div className="section-kicker">
            A GOOD PLACE TO BEGIN <span>— 02</span>
          </div>

          <div className="intro-grid">
            <h2>
              Good spaces
              <br />
              start with <em>good choices.</em>
            </h2>

            <div className="intro-body">
              <p>
                Whether you’re refreshing a room or planning a bigger
                transformation, colour is one of the simplest ways to change
                how a space feels.
              </p>
              <p>
                D.P.R. Subha Traders is a local paint store in Lalitpur. Visit
                us to discuss what you’re working on and explore the options
                available for your project.
              </p>
              <a className="underlined-link" href={`tel:${PHONE}`}>
                Talk to our team <ArrowUpRight size={15} />
              </a>
            </div>
          </div>

          <div className="principles">
            <article>
              <span className="principle-no">01</span>
              <div>
                <h3>Start with the space</h3>
                <p>Think about the light, the mood, and how you want the room to feel.</p>
              </div>
              <ArrowUpRight size={17} />
            </article>

            <article>
              <span className="principle-no">02</span>
              <div>
                <h3>Explore your palette</h3>
                <p>Use colour inspiration to find a direction that feels right for you.</p>
              </div>
              <ArrowUpRight size={17} />
            </article>

            <article>
              <span className="principle-no">03</span>
              <div>
                <h3>Make it happen</h3>
                <p>Visit the store to ask about available products for your project.</p>
              </div>
              <ArrowUpRight size={17} />
            </article>
          </div>
        </section>

        <section className="colour-section" id="colours">
          <div className="colour-heading section-pad">
            <div>
              <div className="section-kicker">
                A LITTLE INSPIRATION <span>— 03</span>
              </div>
              <h2>Find your <em>colour story.</em></h2>
            </div>
            <p>Five starting points. A thousand ways to make them yours.</p>
          </div>

          <div className="colour-layout section-pad">
            <div
              className="colour-display"
              style={{ background: colors[activeColor].hex }}
            >
              <div className="colour-display-top">
                <span>PALETTE STUDY / 0{activeColor + 1}</span>
                <span>COLOUR IS PERSONAL</span>
              </div>
              <div className="colour-display-bottom">
                <span className="colour-big-name">{colors[activeColor].name}</span>
                <span className="colour-hex">{colors[activeColor].hex}</span>
              </div>
            </div>

            <div className="palette-picker">
              <span className="picker-label">SELECT A SHADE</span>

              {colors.map((color, i) => (
                <button
                  key={color.name}
                  className={
                    activeColor === i
                      ? 'palette-option selected'
                      : 'palette-option'
                  }
                  onClick={() => setActiveColor(i)}
                >
                  <span
                    className="palette-dot"
                    style={{ background: color.hex }}
                  />
                  <span className="palette-text">
                    <b>{color.name}</b>
                    <small>{color.note}</small>
                  </span>
                  <span className="palette-code">{color.hex}</span>
                  <ArrowUpRight size={15} />
                </button>
              ))}

              <p className="palette-disclaimer">
                Colour inspiration only. These shades are illustrative and are
                not a confirmed store inventory or paint-code catalogue.
              </p>
            </div>
          </div>
        </section>

        <section className="feature-section section-pad">
          <div
            className="feature-photo"
            role="img"
            aria-label="Interior inspiration with warm neutral paint colours"
          >
            <div className="photo-caption">
              A SPACE THAT FEELS LIKE HOME <span>↗</span>
            </div>
          </div>

          <div className="feature-copy">
            <div className="section-kicker">
              THE DETAILS MATTER <span>— 04</span>
            </div>
            <h2>
              Not just a new shade.
              <br />
              <em>A new feeling.</em>
            </h2>
            <p>
              The right colour can bring calm to a bedroom, energy to a
              workspace, or a sense of welcome to the place everyone gathers.
            </p>
            <p>
              Bring your ideas, ask your questions, and take the first step
              towards a space that feels more like you.
            </p>
            <a className="button button-dark" href={MAPS_URL} target="_blank" rel="noreferrer">
              Plan your visit <ArrowUpRight size={17} />
            </a>
          </div>
        </section>

        <section className="visit-section section-pad" id="visit">
          <div className="visit-copy">
            <div className="section-kicker">
              COME SAY HELLO <span>— 05</span>
            </div>

            <h2>
              Your next project
              <br />
              starts <em>right here.</em>
            </h2>

            <p>
              Drop by D.P.R. Subha Traders on Satdobato–Tikabhairab Road,
              Lalitpur. Call ahead to check availability and opening hours
              before visiting.
            </p>

            <div className="visit-details">
              <div>
                <MapPin size={18} />
                <span>
                  <b>Find the store</b>
                  <small>Satdobato–Tikabhairab Road, Lalitpur 44700</small>
                </span>
              </div>
              <div>
                <Phone size={18} />
                <span>
                  <b>Give us a call</b>
                  <small>+977 985-1027661</small>
                </span>
              </div>
              <div>
                <Clock3 size={18} />
                <span>
                  <b>Planning a visit?</b>
                  <small>Call ahead to confirm today's hours</small>
                </span>
              </div>
            </div>

            <div className="visit-actions">
              <a className="button button-dark" href={MAPS_URL} target="_blank" rel="noreferrer">
                Get directions <ArrowUpRight size={17} />
              </a>
              <a className="button button-outline" href={`tel:${PHONE}`}>
                Call now <Phone size={16} />
              </a>
            </div>
          </div>

          <div className="map-card">
            <div className="map-art">
              <iframe
                title="D.P.R. Subha Traders location"
                src="https://www.google.com/maps?q=D.P.R.%20SUBHA%20TRADERS%2C%20Satdobato%2C%20Lalitpur%2C%20Nepal&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <a className="map-card-link" href={MAPS_URL} target="_blank" rel="noreferrer">
              <span>
                <b>Open in Google Maps</b>
                <small>Get directions to the store</small>
              </span>
              <ArrowUpRight size={20} />
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-top">
          <a className="brand brand-footer" href="#home">
            <span className="brand-mark">
              <span />
              <span />
              <span />
            </span>
            <span className="brand-name">
              D.P.R. <b>SUBHA TRADERS</b>
              <small>PAINT • COLOUR • HOME</small>
            </span>
          </a>

          <p>A little colour can change everything.</p>
          <a className="back-top" href="#home">Back to top ↑</a>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} D.P.R. Subha Traders</span>
          <span>Satdobato–Tikabhairab Road, Lalitpur, Nepal</span>
          <a href={`tel:${PHONE}`}>+977 985-1027661</a>
        </div>

        <p className="footer-note">
          Website concept. Product brands, stock, prices, warranties and
          opening hours should be confirmed with the business before publication.
        </p>
      </footer>
    </div>
  );
}

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);