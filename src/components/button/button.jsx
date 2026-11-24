import { useState } from "react";
import styles from "./button.module.scss";
import { registerPatient } from "../../services/healthcareApi";

function Button({
  text,
  href,
  onClick,
  appointment = false,
  id,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [emailHref, setEmailHref] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [apiError, setApiError] = useState("");

  const handleClick = (event) => {
    onClick?.(event);
    if (appointment) setIsOpen(true);
  };

  const prepareEmailRequest = (formData) => {
    const details = [
      `Name: ${formData.get("name")}`,
      `Email: ${formData.get("email")}`,
      `Phone: ${formData.get("phone")}`,
      `Department: ${formData.get("department")}`,
      `Preferred date: ${formData.get("date")}`,
    ].join("\n");
    return `mailto:care@yourhospital.com?subject=${encodeURIComponent("Appointment request")}&body=${encodeURIComponent(details)}`;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const payload = {
      fullName: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      password: "Temp@12345",
      dateOfBirth: "1990-01-01",
      phone: String(formData.get("phone") || "").trim(),
      gender: "Other",
      address: "Online appointment request",
    };

    setIsSubmitting(true);
    setApiError("");

    try {
      await registerPatient(payload);
      setEmailHref(
        prepareEmailRequest(formData)
      );
    } catch (error) {
      console.error("Appointment registration failed:", error);
      setApiError("Unable to connect to the medical portal right now. You can still send your request by email.");
      setEmailHref(prepareEmailRequest(formData));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {href ? (
        <a className={styles.button} href={href} onClick={onClick} id={id}>
          {text}
        </a>
      ) : (
        <button
          type="button"
          className={styles.button}
          onClick={handleClick}
          id={id}
        >
          {text}
        </button>
      )}

      {appointment && isOpen && (
        <div
          className={styles.modalOverlay}
          onClick={() => {
            setIsOpen(false);
            setEmailHref("");
          }}
        >
          <section
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => {
                setIsOpen(false);
                setEmailHref("");
              }}
              aria-label="Close appointment form"
            >
              &times;
            </button>
            <h2 id="appointment-title">Book an appointment</h2>
            {emailHref ? (
              <div className={styles.confirmation}>
                <p>Your request is ready. Open your email app to send it to our team.</p>
                {apiError ? <p>{apiError}</p> : null}
                <a className={styles.modalButton} href={emailHref}>
                  Open email app
                </a>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <label>
                  Full name
                  <input name="name" autoComplete="name" required />
                </label>
                <label>
                  Email
                  <input name="email" type="email" autoComplete="email" required />
                </label>
                <label>
                  Phone
                  <input name="phone" type="tel" autoComplete="tel" required />
                </label>
                <label>
                  Department
                  <select name="department" defaultValue="" required>
                    <option value="" disabled>Select a department</option>
                    <option>Cardiology</option>
                    <option>Pulmonology</option>
                    <option>Neurology</option>
                    <option>Urology</option>
                    <option>Oncology</option>
                    <option>Physiotherapy</option>
                  </select>
                </label>
                <label>
                  Preferred date
                  <input name="date" type="date" min={new Date().toISOString().slice(0, 10)} required />
                </label>
                <button className={styles.modalButton} type="submit" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Prepare request"}
                </button>
              </form>
            )}
          </section>
        </div>
      )}
    </>
  );
}

export default Button;