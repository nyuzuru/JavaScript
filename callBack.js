// 引数に関数を渡すことをコールバック関数と呼ぶ
// 引数に関数を受け取った関数を高階関数と呼ぶ    
// function 高階関数（コールバック関数） {
//     コールバック関数（）；
// }

function bring(food) {
  if (/*手洗いが終えたら*/){
//   食材を持ってきてもらう処理
  }
}

function bring(food) {
  if (/*手洗いが終えたら*/){
//   食材の皮を剥く処理
  }
}

function bring(food) {
  if (/*手洗いが終えたら*/){
//   食材を切ってもらう処理
  }
}



// 高階関数を使った場合の処理
function washed (fn) {
  if (/*手洗いが終えたら*/) {
    fn(); //コール爆関数の処理
  }
}

function bring(food) {
//   食材を持ってきてもらう処理
}

function peer(food) {
//   食材の皮を剥く処理
}

function cut(food) {
//   食材を切ってもらう処理
}