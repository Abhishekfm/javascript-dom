let ele = document.querySelector(".z4hgWe");

let all = ele.childNodes;

for(let i = 0; i<all.length; i += 3){
    all[i].remove();
}

for(let i = 0; i<all.length; i += 2){
    all[i].remove();
}