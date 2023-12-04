
//各[done]ボタンのクリックイベントを取得
const buttonDone = document.querySelectorAll('.btn-done');
[...buttonDone].forEach((w_button) => {
    w_button.addEventListener('click', function() {todoEnvChangeClass(w_button)});
});

//各[done]ボタンのクリックイベントを取得
const buttonCurrnt = document.querySelectorAll('.btn-current');
[...buttonCurrnt].forEach((w_button) => {
    w_button.addEventListener('click', function() {todoEnvChangeClass(w_button)});
});


//<li>タグのクラス属性をtodo-doneに更新する
function todoEnvChangeClass(e){
    console.log(e);
    var li = e.closest('li');
    if (e.classList.contains('btn-done')) {
        li.classList.remove('txt-default');
        li.classList.remove('txt-current');
        li.classList.add('txt-done'); //ここがHTMLで読み込んでくれない
    } 
    else if (e.classList.contains('btn-current')) {
        li.classList.remove('txt-default');
        li.classList.remove('txt-done');
        li.classList.add('txt-current'); //ここがHTMLで読み込んでくれない
    };

};



