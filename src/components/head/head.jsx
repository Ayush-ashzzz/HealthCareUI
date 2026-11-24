import React from 'react'
import call from "../../asset/img/telephone.svg"
import facebook from "../../asset/img/facebook.svg"
import twitter from "../../asset/img/twitter.svg"
import linkedIN from "../../asset/img/linkedin.svg"
import styles from "./head.module.scss"
function Head() {
  return (
    <header className={styles.info}>
      <div className={styles.contact}>
      <img src={call} alt="" className={styles.phone}/>
      <p><b><a href="tel:+918939115475">call us: 8939115475</a></b></p>
       </div>
       <div className={styles.social}>
      <a href="https://www.facebook.com/" aria-label="Facebook"><img src={facebook} alt="" className={styles.facebook} /></a>
      <a href="https://x.com/" aria-label="X"><img src={twitter} alt="" className={styles.twitter}/></a>
      <a href="https://www.linkedin.com/" aria-label="LinkedIn"><img src={linkedIN} alt="" className={styles.linkedin}/></a>
       </div>
    </header>
  )
}

export default Head
 