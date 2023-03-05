const foo ={
    // alert: function () {},　　短縮記法じゃない方
    alert() {}  //短縮記法
}

function cut (food) {
    // 切る処理...
    const cutFood = food.slice(); //sliceは切る処理を表すために今回は使用しているため、深い意味はない。
    return cutFood; //returnをつけないと、切っただけで結果が返ってこないため、returnをつける必要がある。
}

const cutCarrot = cut(carrot); //人参
const cutPotato = cut(potato); //じゃがいも