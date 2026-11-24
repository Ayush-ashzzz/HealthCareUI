import React from 'react';
import Head from '../head/head';
import logo from "../../asset/img/logo.png";
import styles from './header.module.scss';
import Button from '../button/button';
import arrow from "../../asset/img/caret-down.svg";

function Header() {
  return (
    <header className={styles.header}>
      <Head />

      <div className={styles.navbar}>
        <a href="#top" className={styles.brand} aria-label="Doctorate home">
          <img src={logo} alt="Doctorate" className={styles.logo} />
        </a>

        <nav className={styles.anchorbar} aria-label="Main navigation">
          <a href="#top" className={styles.anchor}>Home</a>
          <a href="#about" className={styles.anchor}>About</a>
          <a href="#services" className={styles.anchor}>Service</a>

          <div className={styles.dropdown}>
            <span className={styles.pageText}>Page</span>
            <img src={arrow} alt="" className={styles.arrow} />
            <div className={styles.dropdownMenu}>
              <a href="#about">About us</a>
              <a href="#doctors">Our doctors</a>
              <a href="#services">Departments</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <a href="#contact" className={styles.anchor}>Contact</a>

          <Button
            text="APPOINTMENT"
            id="appointment"
            appointment
          />
        </nav>
      </div>
    </header>
  );
}

export default Header;