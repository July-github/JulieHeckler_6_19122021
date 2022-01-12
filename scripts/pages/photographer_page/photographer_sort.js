/***** Dropdown filters *****/
import {displayPictures} from './photographer_grid.js';

export async function sortPictures(data){    
    const likesSort = document.getElementById('Likes');
    const dateSort = document.getElementById('Date');
    const titleSort = document.getElementById('Title');
console.log(1)

    likesSort.addEventListener('click', function(){
        displayPictures ([])
        sortByLikes(data)});
    dateSort.addEventListener('click', function(){
        displayPictures ([])
        sortByDate(data)});
    titleSort.addEventListener('click', function(){
        displayPictures ([])
        sortByTitle(data)});
}

function sortByDate(data){
    data.sort(function compare(a, b) {
        console.log(2)
        if (a.date < b.date){
            console.log('2bis')
            return -1;
        }
        if (a.date > b.date ){
            console.log(3)
            return 1;
        }
        return 0;
    });
    
    return displayPictures (data)
}

function sortByLikes(data){
    data.sort(function compare(a, b) {
        if (a.likes < b.likes){
        console.log('like1')
            return 1;
        }if (a.likes > b.likes ){
        console.log('like2')
            return -1;
        }return 0;
    });

    return displayPictures (data)
}

function sortByTitle(data){
    data.sort(function compare(a, b) {
        if (a.title < b.title)
            return -1;
        if (a.title > b.title )
            return 1;
        return 0;
    });
    return displayPictures (data)
}