var mediaList = document.querySelectorAll('.lw-body-bg li');
var headLine = document.querySelector('.lw-filter-option-lbl');
var mainMenu = document.querySelector('.lw-filter-option');
const addedHTML = document.querySelectorAll('span.added-html.js-filter-author-list');



// Change the categories
headLine.textContent = 'Sections';
//insert html inside the .lw-filter-option
console.log(addedHTML)

for (i = 0; i < mediaList.length; i++) {
    //   console.log(mediaList[i].textContent);

    if (mediaList[i].textContent === 'audio') {
        console.log(mediaList[i]);
        mediaList[i].style.display = 'none';


    } else if (mediaList[i].textContent === 'vidéo') {
        console.log(mediaList[i])
        mediaList[i].style.display = 'none'

    } else if (mediaList[i].textContent === 'texte') {
        console.log(mediaList[i])
        mediaList[i].style.display = 'none'

    } else {

    }


}


mainMenu.innerHTML += '<span class="added-html js-filter-author-list"><span class="lw-filter-option-lbl">Format</span></span>'