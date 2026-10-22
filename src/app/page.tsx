import SiteHeader from "@/components/SiteHeader";
import EnquiryForm from "@/components/EnquiryForm";
import Image from "next/image";
import {
  IconBale,
  IconChips,
  IconCollect,
  IconCrush,
  IconProducts,
  IconSort,
  IconWash,
} from "@/components/ProcessIcons";
import { COMPANY } from "@/lib/company";

const FLOW = [
  { t: "Scrap PET trading", d: "We buy used PET bottles from collectors and suppliers." },
  { t: "Sorting & baling", d: "Caps, labels and bottles separated, then pressed into bales." },
  { t: "Crushing & washing", d: "Bales crushed into pieces and washed clean." },
  { t: "PET chips & rolls", d: "Clean chips and PET rolls supplied to buyers." },
];

const PROCESS: { Icon: () => React.JSX.Element; t: string; d: string; tags?: string[] }[] = [
  {
    Icon: IconCollect,
    t: "Collection & trading",
    d: "We buy post-consumer PET bottles in bulk from scrap dealers, collectors and suppliers, and trade sorted scrap.",
  },
  {
    Icon: IconSort,
    t: "Manual sorting",
    d: "Each lot is sorted by hand. Caps, rings and labels come off, and bottles are graded by colour.",
    tags: ["Caps", "Labels & stickers", "Clear", "Blue", "Green"],
  },
  {
    Icon: IconBale,
    t: "Baling",
    d: "Sorted bottles are pressed into dense, strapped cubes that are easy to store, weigh and transport.",
  },
  {
    Icon: IconCrush,
    t: "Crushing",
    d: "Bales are opened and the bottles crushed into small, even pieces.",
  },
  {
    Icon: IconWash,
    t: "Washing",
    d: "The pieces are washed to remove dirt, glue and leftover label and cap material.",
  },
  {
    Icon: IconChips,
    t: "PET chips",
    d: "Clean, dried chips (also called flakes) are packed by colour and grade.",
  },
  {
    Icon: IconProducts,
    t: "End products",
    d: "Chips go to manufacturers as raw material, and into the PET plastic rolls we make and trade.",
  },
];

const WORK = [
  {
    t: "Scrap PET bottle trading",
    d: "We buy used PET bottles in bulk and supply sorted, baled scrap to recyclers.",
  },
  {
    t: "PET chips from plastic waste",
    d: "Sorted bottles are crushed and washed into clean PET chips, ready to be used again.",
  },
  {
    t: "PET plastic rolls",
    d: "We manufacture PET plastic rolls from scrap bottles, giving discarded bottles a second use.",
  },
  {
    t: "Trading of plastic bottle rolls",
    d: "We buy and sell plastic bottle rolls, supplying them to businesses that need them.",
  },
];

const PRINCIPLES = [
  { t: "Fair weight, fair price", d: "Every lot weighed and graded in the open, with clear rates." },
  { t: "Clean separation", d: "Caps, labels and colours kept apart, so the output stays consistent." },
  { t: "Reliable coordination", d: "Dependable pickups, dispatches and follow-through on every deal." },
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
            <p className="kicker">Scrap PET bottles · PET chips · PET rolls</p>
            <h1>
              Scrap PET bottles, <em>put back to work.</em>
            </h1>

            <div className="hero__grid">
              <p className="hero__lead">
                Matoshree Polymers buys and trades scrap PET bottles, sorts and bales them, and
                turns them into clean PET chips and plastic rolls. We work with scrap suppliers,
                recyclers and manufacturers who want a dependable partner for recycled PET.
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
              <figure className="photo">
                <Image
                  src="/flakes.jpg"
                  alt="Bulk bags and bins filled with washed PET chips"
                  width={1200}
                  height={896}
                  sizes="(max-width: 860px) 100vw, 600px"
                />
                <figcaption>Washed PET chips, the output of the process. Representative image.</figcaption>
              </figure>
              <div className="prose">
                <p className="prose__lead">
                  Matoshree Polymers Pvt. Ltd. trades in scrap PET bottles and turns them into
                  clean PET chips and plastic rolls.
                </p>
                <p>
                  Used bottles come in from scrap dealers and collectors. We sort them by hand,
                  bale them, crush and wash them, and send the clean material back into
                  manufacturing. Our aim is simple: recover plastic that would otherwise be discarded, and put it
                  back into productive use. Along the way we want to be a business that customers,
                  suppliers and partners can rely on, deal after deal.
                </p>
                <p className="tagline">Recycle today. Build tomorrow.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="section section--tint" id="process">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">02 — Process</p>
              <h2>
                From scrap bottle <em>to clean PET chips.</em>
              </h2>
              <p className="section-intro">
                Every lot goes through the same seven steps, so buyers get material that is sorted,
                clean and consistent.
              </p>
            </div>
            <ol className="process">
              {PROCESS.map(({ Icon, t, d, tags }, i) => (
                <li key={t} className="step">
                  <div className="step__icon">
                    <Icon />
                  </div>
                  <div className="step__body">
                    <p className="step__n">Step {String(i + 1).padStart(2, "0")}</p>
                    <h3>{t}</h3>
                    <p>{d}</p>
                    {tags && (
                      <ul className="step__tags" aria-label="Sorted into">
                        {tags.map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              ))}
              <li className="step step--cta">
                <p className="step__n">Have scrap to sell?</p>
                <h3>We buy PET bottles in bulk.</h3>
                <p>Tell us the type, condition and approximate quantity, and we will quote a rate.</p>
                <a className="btn btn--light" href="#contact">
                  Get a rate
                </a>
              </li>
            </ol>
          </div>
        </section>

        {/* What we do */}
        <section className="section" id="work">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">03 — What we do</p>
              <h2>
                Four lines of work, <em>one material.</em>
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
              Have scrap PET bottles to sell, or need PET chips or rolls?{" "}
              <a className="link-arrow" href="#contact">
                Tell us the type and quantity
              </a>
            </p>
          </div>
        </section>

        {/* How we work */}
        <section className="section" id="approach">
          <div className="wrap">
            <div className="section-head">
              <p className="section-label">04 — How we work</p>
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
              <p className="section-label">05 — Contact</p>
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
