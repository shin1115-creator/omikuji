function omikujishow() {
    // ランダムな数（0.0～0.999...）を生成
    const x = Math.random();
    
    // 結果と対応画像の初期値
    let result = ""; // ブロック内だけで有効な変数を宣言
    let image = "";

    // 条件分岐で範囲をチューニング
    if (x < 0.1) {
        result = "大吉";
        image = "/omikuji/daikichi.jpeg";
    } else if (x < 0.3) {
        result = "吉";
        image = "/omikuji/kichi.jpeg";
    } else if (x < 0.5) {
        result = "中吉";
        image = "/omikuji/chukichi.jpeg";
    } else if (x < 0.7) {
        result = "小吉";
        image = "/omikuji/shoukichi.jpeg";
    } else if (x < 0.85) {
        result = "末吉";
        image = "/omikuji/suekichi.jpeg";
    } else if (x < 0.95) {
        result = "凶";
        image = "/omikuji/kyou.jpeg";
    } else {
        result = "大凶";
        image = "/omikuji/daikyou.jpeg";
    }
    // 画像要素を更新
    const imageElement = document.getElementById("omikujiImage");
    // テキスト要素を更新
    document.getElementById("resultText").innerText = `結果は…${result}！`;
    imageElement.src = image;
    imageElement.alt = result;
    imageElement.style.display = "block"; // 最初は非表示にしているのでHTML要素を「画面に表示する」
}