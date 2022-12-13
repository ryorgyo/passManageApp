//リストの動き
//チェックボックスの挙動とリストの変更次にDBを書き換える
//Allボタンを押すと、チェックボックスにチェックが入る
//Allボタンのイベントを追加
var allCheck = function () {
    var checks = document.getElementsByClassName("fa-check");
    for (var i = 0; i < checks.length; i++) {
        var checkStyle = checks[i];
        checkStyle.style.fontSize = "0.75em";
    }
};
//CLEARボタンのイベントを追加
var allClear = function () {
    var checks = document.getElementsByClassName("fa-check");
    for (var i = 0; i < checks.length; i++) {
        var checkStyle = checks[i];
        checkStyle.style.fontSize = "0";
    }
};
//クリックでチェックボックスのフォントを0.75emに戻す
var clickCheck = function (num) {
    num++;
    var target = document.querySelector(".ditails ul:nth-child(" + num + ")");
    var checkmark = target.childNodes[1];
    if (checkmark.style.fontSize == "0.75em") {
        checkmark.style.fontSize = "0";
    }
    else {
        checkmark.style.fontSize = "0.75em";
    }
};
