import React from 'react'
import styles from "./gridmenu.module.scss"
import Button from '../button/button'
function GridMenu() {
  return (
    <section id="services">
        <div className={styles.txtcontainer}>
            <div className={styles.txt}>
               <h3 style={{ color: '#337DFC', fontFamily: 'poppins' }}> <b>____Our Services____</b></h3>
               <h1><b>Explore Our Services</b></h1>
            </div>
            <div className={styles.txtbutton}>
              <Button text={"View All Services"} href="#service-list" />
            </div>
        </div>
        
    </section>
  )
}

export default GridMenu
