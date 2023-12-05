
//各[done]ボタンのクリックイベントを取得
const buttonDone = document.querySelectorAll(".btn-done");
[...buttonDone].forEach((w_button) => {
    w_button.addEventListener("click", function() {todoEnvChangeClass(w_button)});
})

//各[done]ボタンのクリックイベントを取得
const buttonCurrnt = document.querySelectorAll(".btn-current");
[...buttonCurrnt].forEach((w_button) => {
    w_button.addEventListener("click", function() {todoEnvChangeClass(w_button)});
})

//CSSファイルをリロード
function reloadCSS(){
    var links = document.getElementsByTagName('link');
    for (var i = 0; i < links.length; i++) {
        if (links[i].rel === 'stylesheet') {
            links[i].disabled = true;
            links[i].disabled = false;
        }
    }
}



//<li>タグのクラス属性をtodo-doneに更新する
function todoEnvChangeClass(e){
    console.log(e);
    var li = e.closest("li");
    if (e.classList.contains("btn-done")) {
        li.classList.remove("txt-default");
        li.classList.remove("txt-current");
        li.classList.add("txt-done");
    } 
    else if (e.classList.contains("btn-current")) {
        li.classList.remove("txt-default");
        li.classList.remove("txt-done");
        li.classList.add("txt-current");
    }

    reloadCSS(); //CSSリロード関数が走らない

}


