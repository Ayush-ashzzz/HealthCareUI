import React from 'react'
import styles from "./page.module.scss"
import Banner from '../banner/banner'
import Card from '../card/card'
function Page() {
  return (
    <section id="top" className={styles.page}>
      <Banner />
      
    </section>
  )
}

export default Page
