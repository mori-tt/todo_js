import './style.css';

const onClickAdd =()=>{
    // テキストボックスの値を取得し、初期化する
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";

    // li生成
    const li = document.createElement("li");
    // div生成
    const div = document.createElement("div");
    div.className = "list-row";
    // p生成
    const p = document.createElement("p");
    p.className = "todo-item";
    p.innerText = inputText;

    // button(完了)タグ生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    
    completeButton.addEventListener("click", () => {
        // 押された完了ボタンの親にあるliタグを、未完了リストから完了リストへ移動
        const moveTarget = completeButton.closest("li");
        document.getElementById("complete-list").appendChild(moveTarget);
         // 完了ボタンと削除ボタンを削除
        div.removeChild(completeButton);
        div.removeChild(deleteButton);
         // 戻すボタンを作成
        const returnButton = document.createElement("button");
        div.appendChild(returnButton)
        returnButton.innerText = "戻す";
        // 戻すボタンを押したら未完了リストへ移動
        returnButton.addEventListener("click", ()=> {
            document.getElementById("incomplete-list").appendChild(moveTarget);
            div.appendChild(completeButton);
            div.appendChild(deleteButton);
            div.removeChild(returnButton);
        })
    })

    // button(削除)タグ生成
    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親にあるliタグを未完了リストから削除
        const deleteTarget = deleteButton.closest("li");
        document.getElementById("incomplete-list").removeChild(deleteTarget);
    })

    // liタグの子要素に各要素を設定
    div.appendChild(p);
    div.appendChild(completeButton);
    div.appendChild(deleteButton);
    li.appendChild(div);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
}

document.getElementById("add-button").addEventListener("click", onClickAdd);