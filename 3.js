let outer = document.getElementsByClassName("accordion-homepage");

let ele = document.createElement("h3");

ele.innerText = "My New Element";

let sec = document.createElement("section");

sec.appendChild(ele);

sec.classList.add("parent");

outer[0].appendChild(sec);
