const quiz = [
    {
        question: 'ゲーム市場、最も売れたゲーム機は次のうちどれ？',
        answers: [
            'スーパーファミコン',
            'プレイステーション２',
            'Nintendo Switch',
            'ニンテンドーDS'
        ],
        correct:'ニンテンドーDS'
    },{
        question: '糸井重里が企画に関わった任天堂の看板ゲームといえば？',
        answers: [
            'MOTHER2',
            'スーパーマリオブラザーズ３',
            'スーパードンキーコング',
            '星のカービィ'
        ],
        correct:'MOTHER2'
    },{
        question: 'ファイナルファンタジーIVの主人公の名前は？',
        answers: [
            'フリオニール',
            'クラウド',
            'ティータ',
            'セシル'
        ],
        correct:'セシル'
    }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

document.getElementById('js-question').textContent = quiz[quizIndex].question; //１行目のconstの文字列に置き換えてる

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;
// HTMLのオブジェクトをとってくる場合は変数名の前に「＄」を入れる

const setupQuiz = () =>{
// クイズの問題文、選択肢を定義
    // $button[0].textContent = answers[0];
    // $button[1].textContent = answers[1];
    // $button[2].textContent = answers[2];
    // $button[3].textContent = answers[3];
    // 上４行をリファクタリングする
    let buttonIndex = 0;
    while(buttonIndex < buttonLength) {
        // ここに命令
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setupQuiz();


const clickHandler = (e) =>{
    if(quiz[quizIndex].correct === e.target.textContent){
        window.alert('正解');
        score++
    }else{
        window.alert('不正解');
    }

    quizIndex++;

    if(quizIndex < quizLength){
        // 問題数がまだあればこちらを実行
        setupQuiz();
    }else{
        // 問題数がもうなければこちらを実行
        window.alert('終了!あなたのせい回数は' + score + '/' + quizLength + 'です');
    }
};


// ボタンをクリックしたら生後判定
let handlerIndex = 0;
while(handlerIndex < buttonLength) {
    $button[handlerIndex].addEventListener('click', (e)=>{
        clickHandler(e);
    });
    handlerIndex++;
}
