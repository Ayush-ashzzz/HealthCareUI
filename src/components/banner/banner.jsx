import React from 'react'
import Header from '../header/header'
import doc from "../../asset/img/doctor.svg"
import styles from "./banner.module.scss"
import Button from '../button/button'
import aboutus from "../../asset/img/banner1.svg"
import doctor from "../../asset/img/doclogo.svg"
import hospital from "../../asset/img/hospital logo.svg"
import clock from "../../asset/img/clock logo.svg"
function Banner() {
    return (
            <div>
            <div>
                <Header />
            </div>
            <div className={styles.hero}>
                <img src={doc} alt="" className={styles.banner} />
                <div className={styles.button}>
                    <Button
                        text={"Make Appointment"}
                        appointment
                    />
                </div>
            </div>
            <section className={styles.infoSection}>
                <div className={styles.infoContainer}>
                    <div className={styles.infoItem} id="doctors">
                        <img className={styles.icon} src={doctor} alt="" />
                        <div className={styles.infoContent}>
                            <h2>Our Doctors</h2>
                            <p>
                                Our highly skilled doctors ensure you receive
                                the best care possible.
                            </p>
                            <a href="mailto:care@yourhospital.com?subject=Find%20a%20doctor">+ MEET DOCTORS</a>
                        </div>
                    </div>
                    <div className={styles.infoItem} id="about">
                        <img className={styles.icon} src={hospital} alt="" />
                        <div className={styles.infoContent}>
                            <h2>Health Foundation</h2>
                            <p>
                                We are a non-profit lorem ipsum organization
                                lorem ipsum sit amet.
                            </p>
                            <a href="mailto:care@yourhospital.com?subject=Health%20Foundation">+ OUR FOUNDATION</a>
                        </div>
                    </div>
                    <div className={styles.infoItem}>
                        <img className={styles.icon} src={clock} alt="" />
                        <div className={styles.infoContent}>
                            <h2>24/7 Services</h2>
                            <p>
                                Day or night, we are always here for you
                                in any situation.
                            </p>
                            <a href="tel:108">+ EMERGENCY</a>
                        </div>
                    </div>
                </div>
            </section>
            <div className={styles.aboutus}>
                <img src={aboutus} alt="" className={styles.bannerpic} />
                <div className={styles.more}>
                    <Button text={"More about us"} href="#about" />
                </div>
            </div>
            
        </div>

    )
}

export default Banner
