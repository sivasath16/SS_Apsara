import React from 'react'
import styles from "./styles.module.css";
import { getImageUrl } from "../../utils.js";
import { useState } from "react";
function MyNavBar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
      <img src={getImageUrl("logo/1.png")} alt="logo" />      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={
            menuOpen
              ? "S:\SS_Apsara\assets\nav\closeIcon.png"
              : "assets\nav\menuIcon.png"
          }
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#stores">Stores</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default MyNavBar