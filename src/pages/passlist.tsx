import Head from "next/head";
import React from "react";
import styles from "src/styles/css/passlist.module.css";
import { Header } from "../components/Header";
import { BsCheckLg } from "react-icons/bs";
import { IconContext } from "react-icons";

const HEADLINE = ["UserName", "Password", "SiteURL"];

const PASSLIST = [
  { user: "ryorgyo", pass: "hogehoge", url: "https://docomo.ne.jp" },
  { user: "ryorgyo", pass: "hogehoge", url: "https://doco.ne.jp" },
  { user: "ryorgyo", pass: "hogehoge", url: "https://doc.ne.jp" },
  { user: "ryorgyo", pass: "hogehoge", url: "https://do.ne.jp" },
  { user: "ryorgyo", pass: "hogehoge", url: "https://.ne.jp" },
  { user: "ryorgyo", pass: "hogehoge", url: "https://docomo.jp" },
  { user: "ryorgyo", pass: "hogehoge", url: "https://docomo.ne" },
  { user: "ryorgyo", pass: "hogehoge", url: "https://docomo.ne.j" },
  { user: "ryorgyo", pass: "hogehoge", url: "https://docomo.np" },
];

const BUTTON = [
  { name: "CLEAR", action: "allClear" },
  { name: "Bulk Change", action: "allClear" },
  { name: "Bulk Delete", action: "allClear" },
];

export default function Passlist() {
  let counter: number = 0;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
      </Head>
      <div className={styles.container}>
        <Header />
        <main className={styles.content}>
          <h2>PassList</h2>
          <div className={styles.box}>
            <div className={styles.headline}>
              <ul>
                <button onClick={allCheck}>ALL</button>
                {HEADLINE.map((headline) => {
                  return (
                    <>
                      <li>{headline}</li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className={styles.ditails}>
              {PASSLIST.map((passlist, index) => {
                return (
                  <ul>
                    <IconContext.Provider
                      value={{
                        color: "#707070",
                        size: "0.8rem",
                      }}
                    >
                      <BsCheckLg />
                    </IconContext.Provider>
                    <button
                      className={styles.checkBtn}
                      onClick={(e) => {
                        clickCheck(e, index);
                      }}
                      key={passlist.url}
                    ></button>
                    <li>{passlist.user}</li>
                    <li>{passlist.pass}</li>
                    <li>{passlist.url}</li>
                    <button className={styles.change}>Change</button>
                  </ul>
                );
              })}
            </div>
            <div className={styles.btn}>
              {BUTTON.map((button) => {
                return (
                  <button onClick={allClear} key={button.name}>
                    {button.name}
                  </button>
                );
              })}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

const allCheck = (): void => {
  const checks: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName(
    "svg"
  ) as unknown as HTMLCollectionOf<HTMLElement>;

  for (var i = 0; i < checks.length; i++) {
    var checkStyle = checks[i];
    checkStyle.style.display = "block";
  }
};

//CLEARボタンのイベントを追加
const allClear = (): void => {
  const checks: HTMLCollectionOf<HTMLElement> = document.getElementsByTagName(
    "svg"
  ) as unknown as HTMLCollectionOf<HTMLElement>;

  for (var i = 0; i < checks.length; i++) {
    var checkStyle = checks[i];
    checkStyle.style.display = "none";
  }
};

//クリックでチェックボックスのフォントを0.75emに戻す
const clickCheck = (
  e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  num: number
): void => {
  num += 1;
  const target = document.querySelector(
    "ul:nth-child(" + num + ")"
  ) as unknown as HTMLElement;
  const checkmark = target.childNodes[0] as HTMLElement;
  console.log(checkmark);
  if (checkmark.style.display == "block") {
    checkmark.style.display = "none";
  } else {
    checkmark.style.display = "block";
  }
};
