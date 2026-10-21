import SiteHeader from "@/components/SiteHeader";
import EnquiryForm from "@/components/EnquiryForm";
import RecyclingIllustration from "@/components/RecyclingIllustration";
import { COMPANY } from "@/lib/company";

const FLOW = [
  { t: "Scrap bottles & plastic waste", d: "Collected from suppliers and business partners." },
  { t: "Plastic chips", d: "Plastic waste broken down into small particles." },
  { t: "PET plastic rolls", d: "Manufactured from scrap PET bottles." },
  { t: "Trading", d: "Plastic bottle rolls supplied to buyers." },
];

const WORK = [
  {
    t: "Trading of plastic bottle rolls",
    d: "We buy and sell plastic bottle rolls, supplying them to businesses that need them.",
  },
  {
    t: "Manufacturing PET plastic rolls from scrap bottles",
    d: "We turn scrap PET bottles into plastic rolls, giving discarded bottles a second use.",
  },
  {
    t: "Converting plastic waste into plastic chips",
    d: "We break plastic waste down into small particles, known as plastic chips, ready to be used again.",
  },
];

const PRINCIPLES = [
  { t: "Responsible handling", d: "Plastic waste handled with care and put to productive reuse." },
  { t: "Clear communication", d: "Professional, transparent communication on every deal." },
  { t: "Reliable coordination", d: "Dependable follow-through with customers, suppliers and partners." },
  { t: "Long-term relationships", d: "Built on reliability and growth on both sides." },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />

      <main id="main">
        {/* Hero */}
        <section className="hero" id="top">
          <div className="wrap">
            <p className="kicker">PET plastic rolls · Plastic chips · Trading</p>
            <h1>
              Plastic waste, <em>put back to work.</em>
            </h1>

            <div className="hero__grid">
              <p className="hero__lead">
                Matoshree Polymers turns scrap PET bottles into plastic rolls, converts plastic
                waste into plastic chips, and trades in plastic bottle rolls. We work with
                suppliers, buyers and partners who want a dependable counterpart for recycled
                plastic.
              </p>

              <div className="hero__actions">
                <a className="btn btn--solid" href="#contact">
                  Send an enquiry
                </a>
                <a className="link-arrow" href={COMPANY.phoneHref}>
                  Call {COMPANY.phone}
                </a>
              </div>
            </div>

            <ol className="flow" aria-label="How material moves through our business">
              {FLOW.map((s, i) => (
                <li key={s.t} className="flow__step">
                  <span className="flow__n">{String(i + 1).padStart(2, "0")}</span>
                  <span className="flow__t">{s.t}</span>
                  <span className="flow__d">{s.d}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Company */}
        <section className="section" id="company">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">01 — Company</p>
              <h2 className="h2--two-line">
                A plastic recycling business
                <br />
                from <em>Purba Medinipur.</em>
              </h2>
            </div>
            <div className="company-body">
              <RecyclingIllustration />
              <div className="prose">
                <p className="prose__lead">
                  Matoshree Polymers Pvt. Ltd. manufactures PET plastic rolls from scrap bottles,
                  converts plastic waste into plastic chips, and trades in plastic bottle rolls.
                </p>
                <p>
                  Our aim is simple: recover plastic that would otherwise be discarded, and put it
                  back into productive use. Along the way we want to be a business that customers,
                  suppliers and partners can rely on, deal after deal.
                </p>
                <p className="tagline">Recycle today. Build tomorrow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* What we do */}
        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">02 — What we do</p>
              <h2>
                Three lines of work, <em>one material.</em>
              </h2>
            </div>
            <ol className="work-list">
              {WORK.map((w, i) => (
                <li key={w.t} className="work-item">
                  <span className="work-item__n">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{w.t}</h3>
                  <p>{w.d}</p>
                </li>
              ))}
            </ol>
            <p className="work-cta">
              Have scrap bottles to sell, or need PET rolls or plastic chips?{" "}
              <a className="link-arrow" href="#contact">
                Tell us the type and quantity
              </a>
            </p>
          </div>
        </section>

        {/* How we work */}
        <section className="section section--tint" id="approach">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">03 — How we work</p>
              <h2>
                What partners can <em>expect from us.</em>
              </h2>
            </div>
            <ul className="principles">
              {PRINCIPLES.map((p) => (
                <li key={p.t} className="principle">
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact */}
        <section className="section" id="contact">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">04 — Contact</p>
              <h2>
                Tell us what you have, <em>or what you need.</em>
              </h2>
            </div>

            <div className="contact">
              <div className="contact__lines">
                <div className="contact-line">
                  <span className="contact-line__label">Phone · {COMPANY.contactName}</span>
                  <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
                </div>
                <div className="contact-line">
                  <span className="contact-line__label">WhatsApp</span>
                  <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
                    Message on WhatsApp
                  </a>
                </div>
                <div className="contact-line">
                  <span className="contact-line__label">Email</span>
                  <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
                </div>
                <div className="contact-line">
                  <span className="contact-line__label">Registered office</span>
                  <address>{COMPANY.address}</address>
                  <a className="link-arrow" href={COMPANY.mapsUrl} target="_blank" rel="noopener noreferrer">
                    Open in Google Maps
                  </a>
                </div>
              </div>

              <div className="contact__form">
                <EnquiryForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap">
          <p className="footer__mark">Matoshree Polymers</p>
          <div className="footer__grid">
            <p>
              {COMPANY.name}
              <br />
              Recycle today · Build tomorrow
            </p>
            <p>
              CIN {COMPANY.cin}
              <br />
              GSTIN {COMPANY.gstin}
            </p>
            <p>
              <a href={COMPANY.phoneHref}>{COMPANY.phone}</a>
              <br />
              <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            </p>
          </div>
          <p className="footer__legal">© 2026 {COMPANY.name} All rights reserved.</p>
        </div>
      </footer>

      <div className="mobile-bar">
        <a href={COMPANY.phoneHref}>Call</a>
        <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </div>
    </>
  );
}
