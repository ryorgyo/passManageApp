"use strict";
// exports.__esModule = true;
var dbData = {
  email: "",
  url: "",
  href: "",
  username: "",
  password: "",
  boo: false,
};
function createPassword() {
  //含める文字の定義
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var alphabetUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numbers = "0123456789";
  var passBase = alphabet + alphabetUpper + numbers;
  var len = 8; // 桁数
  var password = "";
  for (var i = 0; i < len; i++) {
    password += passBase.charAt(Math.floor(Math.random() * passBase.length));
  }
  return password;
}
window.onload = function () {
  var tags = document.querySelectorAll("input");
  tags.forEach(function (tag) {
    //HTMLelementにtype=passwordがあった際に
    //パスワード生成とパス自動入力のクリックイベント作成
    if (tag.type == "password") {
      tag.addEventListener(
        "click",
        function () {
          //教師データ作成のためのポップアップ
          //はいならtrueでパスの自動入力とDBへの[pass,url,href,boolean]が格納される
          var boo = window.confirm("この画面は新規登録画面ですか？");
          if (boo == true) {
            dbData["boo"] = boo;
            //passの生成と自動入力
            var pass = createPassword();
            tag.value = pass;
            dbData["password"] = pass;
            alert(dbData["password"]);
            //DBに[username,mail,url,pass,boo]を格納
            //URL(全体と次回ログインのためのホストネーム)
            var href = location.href; //全体（新規登録画面）
            dbData["href"] = href;
            var hosturl = location.hostname; //ホストネーム（トップページ）
            dbData["url"] = hosturl;
          }
        },
        { once: true }
      );
    }
    //type="email"を格納する
    if (tag.type == "email") {
      //input type="email"からフォーカスが外れた際にObjに格納
      tag.addEventListener("blur", function () {
        var email = tag.value;
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
      tag.addEventListener("blur", function () {
        var username = tag.value;
        dbData["username"] = username;
      });
    }
    //submitを押した際にDBにPOST値を格納するイベント設定
    //残りの[usernema,mailを探して格納する]
    if (tag.type == "submit") {
      tag.addEventListener(
        "click",
        function () {
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
