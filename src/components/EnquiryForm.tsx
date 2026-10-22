"use client";

import { COMPANY } from "@/lib/company";

const INTENTS = [
  "Sell scrap PET bottles",
  "Buy PET chips",
  "Buy PET plastic rolls",
  "Something else",
];

function field(data: FormData, key: string) {
  return String(data.get(key) ?? "").trim();
}

export default function EnquiryForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const intent = field(data, "intent");

    const text = [
      "Enquiry from matoshreepolymers.com",
      `Name: ${field(data, "name")}`,
      field(data, "company") && `Company: ${field(data, "company")}`,
      `Phone: ${field(data, "phone")}`,
      field(data, "email") && `Email: ${field(data, "email")}`,
      `Looking to: ${intent}`,
      field(data, "material") && `Material / quantity: ${field(data, "material")}`,
      field(data, "message") && `Message: ${field(data, "message")}`,
    ]
      .filter(Boolean)
      .join("\n");

    const submitter = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;

    if (submitter?.value === "email") {
      window.location.href = `mailto:${COMPANY.email}?subject=${encodeURIComponent(
        `Enquiry: ${intent}`
      )}&body=${encodeURIComponent(text)}`;
    } else {
      window.open(
        `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  }

  return (
    <form className="enquiry" onSubmit={handleSubmit}>
      <div className="enquiry__row">
        <label className="field">
          <span>Your name *</span>
          <input name="name" required autoComplete="name" />
        </label>
        <label className="field">
          <span>Company</span>
          <input name="company" autoComplete="organization" />
        </label>
      </div>

      <div className="enquiry__row">
        <label className="field">
          <span>Phone / WhatsApp *</span>
          <input
            name="phone"
            type="tel"
            inputMode="tel"
            required
            pattern="[0-9+\s()\-]{7,}"
            title="Enter a valid phone number"
            autoComplete="tel"
          />
        </label>
        <label className="field">
          <span>Email</span>
          <input name="email" type="email" autoComplete="email" />
        </label>
      </div>

      <fieldset className="field field--choices">
        <legend>I am looking to *</legend>
        <div className="choices">
          {INTENTS.map((intent, i) => (
            <label key={intent} className="choice">
              <input type="radio" name="intent" value={intent} defaultChecked={i === 0} required />
              <span>{intent}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="field">
        <span>Material and approximate quantity</span>
        <input name="material" placeholder="e.g. baled clear PET bottles, about 5 tonnes a month" />
      </label>

      <label className="field">
        <span>Anything else</span>
        <textarea name="message" rows={3} />
      </label>

      <div className="enquiry__actions">
        <button type="submit" value="whatsapp" className="btn btn--solid">
          Send on WhatsApp
        </button>
        <button type="submit" value="email" className="btn btn--line">
          Send by email
        </button>
      </div>
      <p className="enquiry__note">
        Both buttons open your own WhatsApp or email app with these details filled in. Nothing is
        sent until you press send there.
      </p>
    </form>
  );
}
