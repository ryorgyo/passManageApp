//リストの動き
//チェックボックスの挙動とリストの変更次にDBを書き換える

//Allボタンを押すと、チェックボックスにチェックが入る
//Allボタンのイベントを追加
const allCheck = (): void => {
  const checks: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(
    "fa-check"
  ) as HTMLCollectionOf<HTMLElement>;

  for (var i = 0; i < checks.length; i++) {
    var checkStyle = checks[i];
    checkStyle.style.fontSize = "0.75em";
  }
};

//CLEARボタンのイベントを追加
const allClear = (): void => {
  const checks: HTMLCollectionOf<HTMLElement> = document.getElementsByClassName(
    "fa-check"
  ) as HTMLCollectionOf<HTMLElement>;

  for (var i = 0; i < checks.length; i++) {
    var checkStyle = checks[i];
    checkStyle.style.fontSize = "0";
  }
};

//クリックでチェックボックスのフォントを0.75emに戻す
const clickCheck = (num: number) => {
  num++;
  const target = document.querySelector(
    ".ditails ul:nth-child(" + num + ")"
  ) as unknown as HTMLElement;
  const checkmark = target.childNodes[1] as HTMLElement;
  if (checkmark.style.fontSize == "0.75em") {
    checkmark.style.fontSize = "0";
  } else {
    checkmark.style.fontSize = "0.75em";
  }
};

export {};
