var mediaList = document.querySelectorAll(".lw-body-bg li");
var headLine = document.querySelector(".lw-filter-option-lbl");
var mainMenu = document.querySelector(".lw-filter-option");
const addedHTML = document.querySelectorAll(
  "span.added-html.js-filter-author-list"
);

var addUl = document.createElement("ul");
addUl.classList.add("added-ul");
addUl.classList.add("js-filter-author-list");

// Change the categories
headLine.textContent = "Sections";
//insert html inside the .lw-filter-option

var arr = [];
console.log(addedHTML);

for (i = 0; i < mediaList.length; i++) {
  if (mediaList[i].textContent === "audio") {
    arr.push(mediaList[i].outerHTML);
    mediaList[i].style.display = "none";
  } else if (mediaList[i].textContent === "vidéo") {
    arr.push(mediaList[i].outerHTML);
    mediaList[i].style.display = "none";
  } else if (mediaList[i].textContent === "texte") {
    arr.push(mediaList[i].outerHTML);
    mediaList[i].style.display = "none";
  } else {
  }
}

mainMenu.innerHTML +=
  '<span class="added-html js-filter-author-list"><span class="lw-filter-option-lbl">Format</span></span>';

arr.forEach((item) => {
  addUl.innerHTML += `${item}`;
  mainMenu.appendChild(addUl);
});

