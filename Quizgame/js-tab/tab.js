//Jsは即時関数を使う
(()=>{

    //ここに命令を書く
    //変数名に「＄」をつけると変数はDOM要素と明示的に表すことになる。コーディングルール
    const $doc = document; 　　//document=WebページのDOM全体を取得、的な意味合い
    const $tab = $doc.getElementById('js-tab');
    const $nav = $tab.querySelectorAll('[data-nav]');
    const $content = $tab.querySelectorAll('[data-content]');
    const ACTIVE_CLASS = 'is-active';
    const  navLen = $nav.length;

    // 初期化　最初に実行させたいという命令の時にinitを使う
    const init = () => {
        $content[0].style.display= 'block';
    };
    init();

    // クリックしたら起こるイベント
    const handleClick = (e) => {
        e.preventDefault(); 　　//リンク要素を無効化させることができる。preventDefaultがないと勝手に画面遷移されちゃう的な意味合い

        // クリックされたnavとそのdataを取得
        const $this = e.target; 　　//targetはどの要素がクリックされたかというDOM要素を取得してくるプロパティ
        const targetVal = $this.dataset.nav　　//「dataset」=そのDOM要素のデータ属性を取得　dataset.(属性名)でデータ属性の値を取得できる

        // 対象外のnav,content全てを一旦リセットする
        let index = 0;
        while(index <navLen){
            $content[index].style.display = 'none';
            $nav[index].classList.remove(ACTIVE_CLASS);
            index++;
        }

        // 対象のコンテンツをアクティブ化する
        $tab.querySelectorAll('[data-content="' + targetVal + '"]')[0].style.display = 'block'
        $nav[targetVal].classList.add(ACTIVE_CLASS);
    };

    // navの要素分ループさせる処理
    let index = 0;
    while(index <navLen){
        $nav[index].addEventListener('click', (e) => handleClick(e));
        index++;
    }

})();