import React from "react";
import styles from "./containermenu.module.scss";
import CardioIcon from "../../asset/img/CardiologyIcon";
import PulmoIcon from "../../asset/img/PulmonologyIcon";
import NeuroIcon from "../../asset/img/NeurologyIcon";
import UroIcon from "../../asset/img/UrologyIcon";
import OncoIcon from "../../asset/img/OncologyIcon";
import PhysioIcon from "../../asset/img/PhysiotherapyIcon";

const services = [
  { Icon: CardioIcon, title: "Cardiology", text: "Diagnosis, imaging, and treatment of heart and blood vessel disorders.", id: "cardiology" },
  { Icon: PulmoIcon, title: "Pulmonology", text: "Comprehensive care for respiratory conditions and lung diseases.", id: "pulmonology" },
  { Icon: NeuroIcon, title: "Neurology", text: "Expert care for brain, spine, and nervous system disorders.", id: "neurology" },
  { Icon: UroIcon, title: "Urology", text: "Diagnosis and treatment of urinary tract and male reproductive system disorders.", id: "urology" },
  { Icon: OncoIcon, title: "Oncology", text: "Advanced cancer care, treatment, and support for patients.", id: "oncology" },
  { Icon: PhysioIcon, title: "Physiotherapy", text: "Rehabilitation and therapy to improve mobility and quality of life.", id: "physiotherapy" },
];

function Containermenu() {
  return (
    <div className={styles.services} id="service-list">
      {services.map(({ Icon, title, text, id }) => (
        <article className={styles.serviceCard} key={title} id={id}>
          <Icon className={styles.icon} />
          <h3>{title}</h3>
          <p>{text}</p>
          <a href={`mailto:care@yourhospital.com?subject=${encodeURIComponent(`${title} appointment`)}`}>+ BOOK THIS SERVICE</a>
        </article>
      ))}
    </div>
  );
}

export default Containermenu;