// btnというidを持つHTML要素を取得し定数に代入する
const btn = document.getElementById('btn');
const text = document.getElementById('text');
// HTML要素がクリックされたときにイベント処理を実行する
  // click	クリックしたとき（マウスボタンを押して離したとき）
btn.addEventListener('click', () => {
  // textContent	HTML要素内のテキスト
  text.textContent='ボタンをクリックしました';
});




// 合格基準
// ボタンのクリック後の表示が「ボタンをクリックしました」になるようにする
// 画面から取得したHTML要素が定数に代入されている
// ボタンをクリックした際に正しく文字変更がされている

// // btnというidを持つHTML要素を取得し定数に代入する
// const btn = document.getElementById('btn');
// // HTML要素がクリックされたときにイベント処理を実行する
// btn.addEventListener('click', () => {
//   // textContent	HTML要素内のテキスト
//   // click	クリックしたとき（マウスボタンを押して離したとき）
//   h2.textContent='ボタンをクリックしました';
// });
