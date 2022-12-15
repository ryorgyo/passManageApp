//DBに送る連想配列の型宣言とテンプレート作成
interface dbtype {
  email: string;
  url: string;
  href: string;
  username: string;
  password: string;
  boo: boolean;
}

let dbData: dbtype = {
  email: "",
  url: "",
  href: "",
  username: "",
  password: "",
  boo: false,
};

function createPassword(): string {
  //含める文字の定義
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const simbols = "-_";

  const passBase = alphabet + alphabetUpper + numbers;

  const len = 10; // 桁数
  let password = "";

  for (var i = 0; i < len; i++) {
    password += passBase.charAt(Math.floor(Math.random() * passBase.length));
  }

  return password;
}

window.onload = () => {
  const tags = document.querySelectorAll<HTMLInputElement>("input");
  tags.forEach((tag) => {
    //HTMLelementにtype=passwordがあった際に
    //パスワード生成とパス自動入力のクリックイベント作成
    if (tag.type == "password") {
      tag.addEventListener(
        "click",
        () => {
          //教師データ作成のためのポップアップ
          //はいならtrueでパスの自動入力とDBへの[pass,url,href,boolean]が格納される
          const boo: boolean = window.confirm("この画面は新規登録画面ですか？");
          if (boo == true) {
            dbData["boo"] = boo;

            //passの生成と自動入力
            const pass: string = createPassword();
            tag.value = pass;
            dbData["password"] = pass;
            alert(dbData["password"]);

            //DBに[username,mail,url,pass,boo]を格納
            //URL(全体と次回ログインのためのホストネーム)
            const href: string = location.href; //全体（新規登録画面）
            dbData["href"] = href;

            const hosturl: string = location.hostname; //ホストネーム（トップページ）
            dbData["url"] = hosturl;
          }
        },
        { once: true }
      );
    }

    //type="email"を格納する
    if (tag.type == "email") {
      //input type="email"からフォーカスが外れた際にObjに格納
      tag.addEventListener("blur", () => {
        const email: string = tag.value;
        dbData["email"] = email;
      });
    }

    //type="username"を格納する
    if (
      tag.autocomplete == "username" ||
      tag.id == "username" ||
      tag.getAttribute("class") == "username"
    ) {
      //input autocomplete="username"
      //id = "username" class="username"があった際に発生
      //フォーカスが外れた際にObjに格納
      tag.addEventListener("blur", () => {
        const username: string = tag.value;
        dbData["username"] = username;
      });
    }

    //submitを押した際にDBにPOST値を格納するイベント設定
    //残りの[usernema,mailを探して格納する]
    if (tag.type == "submit") {
      tag.addEventListener(
        "click",
        () => {
          if (dbData["boo"] == true) {
            alert(dbData["username"]);
          }
        },
        { once: true }
      );
    }
  });
};

//dbDataが埋まっている時にbuttonを押す、もしくはsubmitを押す時に発生させるイベント

export {};
