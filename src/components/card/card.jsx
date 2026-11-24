import React from 'react'
import styles from "./card.module.scss"
import doctor from "./card.module.scss"
function Card() {
    return (
        <div>
            
            <div className={styles.Card}>
                <div>
                    <section className={styles.flexset}>
                      <div className={styles.doctors}>
                        <img className={styles.doctor} src={doctor} alt="" />
                      </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default Card
