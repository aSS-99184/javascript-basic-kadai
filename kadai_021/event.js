const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
    setTimeout(() => {
    text.textContent='ボタンをクリックしました';
  },2000);
});




// 画面から取得したHTML要素が定数に代入されている
// ボタンをクリックした2秒後に正しく文字変更がされている
// setTimeout(() => {
//   処理
// }, 待ち時間);


// //btn.addEventListener('click', () => {
//   text.textContent='ボタンをクリックしました';
// });
// setTimeout(text,2000);


// // setTimeout(() => {関数
// // },2000);
// 入れる位置いろいろためす


// var btn = document.getElementById('btn');
// const text = document.getElementById('text');

// btn.addEventListener('click', function() {
//   text.textContent='ボタンをクリックしました';
// },false);
// setTimeout(btn,2000);
