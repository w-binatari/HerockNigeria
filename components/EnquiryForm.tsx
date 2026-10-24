"use client";

import { useState } from "react";

const notSent =
  "Nothing was sent. This form does not deliver email. Call or email the office using the details on this page.";

export function EnquiryForm() {
  const [status, setStatus] = useState("");

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus(notSent);
  }

  return (
    <form className="enquiry" onSubmit={onSubmit} aria-describedby="enquiry-note" noValidate>
      <h2>Enquiry</h2>
      <p id="enquiry-note" className="form-notice">
        This form is a visual layout. It does not send email or save an enquiry.
      </p>
      <div className="field">
        <label htmlFor="enquiry-name">Name</label>
        <input id="enquiry-name" name="name" type="text" autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="enquiry-organization">Organization</label>
        <input id="enquiry-organization" name="organization" type="text" autoComplete="organization" />
      </div>
      <div className="field">
        <label htmlFor="enquiry-phone">Phone</label>
        <input id="enquiry-phone" name="phone" type="tel" autoComplete="tel" />
      </div>
      <div className="field">
        <label htmlFor="enquiry-email">Email</label>
        <input id="enquiry-email" name="email" type="email" autoComplete="email" />
      </div>
      <div className="field">
        <label htmlFor="enquiry-message">Message</label>
        <textarea id="enquiry-message" name="message" rows={5} />
      </div>
      <button type="submit" className="button">
        Send enquiry
      </button>
      {status ? (
        <p className="form-status" role="status">
          {status}
        </p>
      ) : null}
    </form>
  );
}
