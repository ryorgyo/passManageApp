import Head from "next/head";
import Link from "next/link";
import React from "react";
import styles from "src/styles/css/popup.module.css";

const CARDs = [
  {
    title: "PassList",
    href: "/passlist",
    discriptions: ["Add new Password", "PassChange", "PassDelete"],
  },
  {
    title: "config",
    href: "/config",
    discriptions: [
      "Change word count",
      "Change List path or directory",
      "Contains word",
    ],
  },
];

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.container}>
        <header className={styles.header}>
          <div>
            <h1>PassKeeper</h1>
          </div>
        </header>
        <main className={styles.content}>
          {CARDs.map((card) => {
            return (
              <Link href={card.href}>
                <div className={styles.card}>
                  <h2>{card.title}</h2>
                  {card.discriptions.map((disc) => {
                    return <p>{disc}</p>;
                  })}
                </div>
              </Link>
            );
          })}
        </main>
      </div>
    </div>
  );
}
