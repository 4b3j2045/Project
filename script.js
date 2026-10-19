let 今天 = new Date();
今天.setHours(0, 0, 0, 0);

let 首場開箱日期 = new Date(2026, 9, 25);
    
let 相差天數 = (首場開箱日期 - 今天) / (1000 * 60 * 60 * 24);

document.getElementById("倒數").textContent = "距離首場開箱還有 " + (相差天數) + " 天";
