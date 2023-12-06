
//[作成]ボタンのクリックイベントを取得
const buttonMakeTask = document.querySelector(".btn-newtodo");
buttonMakeTask.addEventListener("click", function() {

    //新規<li>の構造作成処理
    var makeTaskName = document.querySelector("#newtodo").value;
    var newli = document.createElement("li");
    newli.classList.add("txt-default");
    newli.textContent = makeTaskName;

    var newbuttonDone = document.createElement("button");
    newbuttonDone.classList.add("btn-done");
    newbuttonDone.textContent = "完了";
    var newbuttonCurrent = document.createElement("button");
    newbuttonCurrent.classList.add("btn-current");
    newbuttonCurrent.textContent = "優先";

    newli.appendChild(newbuttonDone);
    newli.appendChild(newbuttonCurrent);  

    console.log(newli);

    //既存<li>に追加処理
    var lastli_arr = document.querySelectorAll(".btn-done");
    var lastli = lastli_arr.item(lastli_arr.length - 1);

    newli.insertAdjacentElement("afterend", lastli); //ここが反映されない！！
})



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
}


