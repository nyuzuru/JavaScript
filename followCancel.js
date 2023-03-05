const unfollow = function() {
    console.log("フォローを外す")
  }
  
  const cancelTweet = function() {
    console.log("ツイートキャンセル")
  }
  
  
  function confirmed(fn) {
    if(window.confirm("実行する？")) {
      fn();
    }
  }
  confirmed(unfollow);