//JavaScriptによるHTMLとキュメントの操作は、DOM（Documentオブジェクト）




//[done]ボタンクリック時、リストのクラス'todo_done'を追加する処理
const buttonDone = document.getElementById('button-done1');
console.log(buttonDone);

buttonDone.addEventListener('click', function() {todoEnvChangeDone(buttonDone)});

// buttonDone.forEach((w_button) => {
//     w_button.addEventListener('click', todoEnvChangeDone(w_button));
// });

function todoEnvChangeDone(e){
    console.log(e);
    // const li = e.closest('li');
    // for (var i = 1; i < li.classList.length; i++){
    //     li.classList.remove(); 
    // };
    // li.classList.add('todo-done');
};

// //[curernt]ボタンクリック時、リストのクラス'todo_curernt'を追加する処理
// const buttonCurrent = document.getElementById('button-current');
// console.log(buttonCurrent);

// buttonCurrent.forEach((w_button) => {
//     w_button.addEventListener('click', todoEnvChangeCurrent(w_button));
// });

// function todoEnvChangeCurrent(e){
//     const li = e.closest('li');
//     for (var i = 1; i < li.classList.length; i++){
//         li.classList.remove(); 
//     };
//     li.classList.add('todo-current');
// };


