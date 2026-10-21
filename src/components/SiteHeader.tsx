"use client";

import Image from "next/image";
import { useState } from "react";
import { COMPANY } from "@/lib/company";

const LINKS = [
  { href: "#company", label: "Company" },
  { href: "#work", label: "What we do" },
  { href: "#approach", label: "How we work" },
  { href: "#contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap site-header__inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <Image src="/logo-mark.png" alt="" width={64} height={43} priority />
          <span>
            <span className="brand__name">Matoshree Polymers</span>
            <span className="brand__sub">Private Limited</span>
          </span>
        </a>

        <nav className="nav" aria-label="Main">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>

        <a className="btn btn--solid btn--sm header-cta" href="#contact">
          Send an enquiry
        </a>

        <button
          type="button"
          className={`menu-toggle${open ? " is-open" : ""}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="mobile-nav" aria-label="Main">
          <div className="wrap">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a href={COMPANY.phoneHref} className="mobile-nav__phone">
              Call {COMPANY.contactName} · {COMPANY.phone}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
