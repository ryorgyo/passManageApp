import Head from "next/head";
import React from "react";
import styles from "src/styles/css/config.module.css";
import { Header } from "../components/Header";

const BUTTON = ["Upper case", "Lower case", "Number", "Simbol"];

const CARDs = [
  {
    title: "Change word count",
    discription: (
      <>
        This app created<span></span>character password.
      </>
    ),
    other: "",
  },
  {
    title: "Change List path or directory",
    discription: "If you choose,”PassList.csv”will be created there.",
    other: <input id="file" type="file" name="upfile[]" />,
  },
  {
    title: "Contains word",
    discription: "Select at least one.",
    other: (
      <div>
        {BUTTON.map((button) => {
          return <button key={button}>{button}</button>;
        })}
      </div>
    ),
  },
];

export default function Config() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>
          <h2>Config</h2>
          <div className={styles.box}>
            {CARDs.map((card) => {
              return (
                <div className={styles.section} key={card.title}>
                  <h3>{card.title}</h3>
                  <p>{card.discription}</p>
                  {card.other}
                </div>
              );
            })}
            <div className={styles.btn}>
              <button>Change</button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
