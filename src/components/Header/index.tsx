import Link from "next/link";
import React from "react";
import styles from "src/styles/css/header.module.css";
import { AiFillLeftCircle } from "react-icons/ai";
import { IconContext } from "react-icons";

export function Header() {
  return (
    <header className={styles.header}>
      <div>
        <Link href="/">
          <IconContext.Provider value={{ color: "#707070", size: "2.2rem" }}>
            <AiFillLeftCircle />
          </IconContext.Provider>
        </Link>
        <h1>PassKeeper</h1>
      </div>
    </header>
  );
}
