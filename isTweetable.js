// function isTweetable(text) {
//     return text.length <= 140;
// }
// console.log(isTweetable("foo"));

const isTweetable = function(text) {
    return text.length <= 140;
};


function alertTweetable(text) {
    if (text.length <= 140 ) { //isTweetableに置き換えることができる
        alert("you can tweet!");
    }
}
alertTweetable("foo");