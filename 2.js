const arr = [];
document.querySelectorAll(".row .as-imagegrid-item").forEach((ele)=>{
    arr.push(ele.innerText.replace("\nSupport",""));
});
arr;