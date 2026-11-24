import React from "react";
import styles from "./footer.module.scss";

const columns = [
  {
    title: "Departments",
    links: [
      { label: "Cardiology", href: "#cardiology" },
      { label: "Pulmonology", href: "#pulmonology" },
      { label: "Neurology", href: "#neurology" },
      { label: "Urology", href: "#urology" },
      { label: "Oncology", href: "#oncology" },
      { label: "Physiotherapy", href: "#physiotherapy" },
      { label: "View all departments", href: "#services" },
    ],
  },
  {
    title: "Patients & visitors",
    links: [
      { label: "Book an appointment", href: "#appointment" },
      { label: "Find a doctor", href: "#doctors" },
      { label: "Visiting hours", href: "mailto:care@yourhospital.com?subject=Visiting%20hours" },
      { label: "Health packages", href: "mailto:care@yourhospital.com?subject=Health%20packages" },
      { label: "Insurance & billing", href: "mailto:care@yourhospital.com?subject=Insurance%20and%20billing" },
      { label: "Medical records", href: "mailto:care@yourhospital.com?subject=Medical%20records" },
      { label: "Patient feedback", href: "mailto:care@yourhospital.com?subject=Patient%20feedback" },
    ],
  },
  {
    title: "About the hospital",
    links: [
      { label: "Our story", href: "#about" },
      { label: "Our doctors", href: "#doctors" },
      { label: "Careers", href: "mailto:care@yourhospital.com?subject=Careers" },
      { label: "News & events", href: "mailto:care@yourhospital.com?subject=News%20and%20events" },
      { label: "Health blog", href: "mailto:care@yourhospital.com?subject=Health%20blog" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help center", href: "mailto:care@yourhospital.com?subject=Help" },
      { label: "FAQs", href: "mailto:care@yourhospital.com?subject=FAQs" },
      { label: "Contact us", href: "#contact" },
      { label: "Locations", href: "https://www.google.com/maps/search/?api=1&query=123+Health+Avenue+Chennai+Tamil+Nadu" },
      { label: "Privacy policy", href: "mailto:care@yourhospital.com?subject=Privacy%20policy" },
    ],
  },
];

const legal = [
  { label: "Privacy policy", href: "mailto:care@yourhospital.com?subject=Privacy%20policy" },
  { label: "Terms of use", href: "mailto:care@yourhospital.com?subject=Terms%20of%20use" },
  { label: "Accessibility", href: "mailto:care@yourhospital.com?subject=Accessibility" },
];

function Footer() {
  return (
    <footer className={styles.footer} id="contact">
      {/* Emergency strip */}
      <div className={styles.emergency}>
        <p>
          Medical emergency? Our team is available 24 hours a day, 7 days a week.
        </p>
        <a href="tel:108" className={styles.emergencyBtn}>
          Call emergency: 108
        </a>
      </div>

      <div className={styles.inner}>
        {/* Brand + contact */}
        <div className={styles.brand}>
          <a href="#top" className={styles.logo} aria-label="Hospital home">
            <span className={styles.logoMark} aria-hidden="true">+</span>
            Your Hospital
          </a>
          <p className={styles.tagline}>
            Compassionate, expert care for you and your family.
          </p>

          <address className={styles.contact}>
            <p>123 Health Avenue, Chennai, Tamil Nadu</p>
            <p>
              <a href="tel:+918939115475">+91 89391 15475</a>
            </p>
            <p>
              <a href="mailto:care@yourhospital.com">care@yourhospital.com</a>
            </p>
          </address>
        </div>

        {/* Link columns */}
        {columns.map((col) => (
          <nav
            key={col.title}
            className={styles.column}
            aria-label={col.title}
          >
            <h4>{col.title}</h4>
            <ul>
              {col.links.map(({ label, href }) => (
                <li key={label}>
                  <a href={href}>{label}</a>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} Your Hospital. All rights reserved.</p>
        <ul>
          {legal.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
