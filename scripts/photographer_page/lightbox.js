/***** Display lightbox *****/
import {Media} from '../factories/media.js';

// Template creation
function photographerGallery(data){
    const title = data.title;

	const boxSlide = document.querySelector('#box');
	const slideText = document.createElement('h3');
	slideText.setAttribute('class', 'picture-title');
	slideText.textContent = title;
	boxSlide.appendChild(slideText);

	return boxSlide
}

// Display lightbox
function displayLightbox(data){

    const pictureGallery = document.querySelector('#lightbox > #box');
    const cardMedia = photographerGallery(data);
    const media = new Media(data);
    const template = cardMedia.appendChild(media.createMedia());
    const logo = document.querySelector('.logo');
    const close = document.querySelector("#close_lightbox");

    pictureGallery.insertBefore(template, pictureGallery.firstChild)
    logo.style.display = 'none'
    close.focus();
}

// Clear lightbox
function resetLightbox(){
	const boxSlide = document.querySelector('#box');
    boxSlide.innerHTML = '';
}

// Listen to click to display lightbox
export function listenToDisplayLightbox(data) {

    const cards = [...document.querySelectorAll('.Media')];
    const lightbox = document.getElementById('lightbox');
    const goNext = document.querySelector('#next');
    const goPrevious = document.querySelector('#previous');
    const backMain = document.querySelector('main');
    
    for(let n=0; n<cards.length; n++){
        cards[n].addEventListener('click', function(){
            lightbox.style.display = "flex";
            backMain.style.display = "none";

            displayLightbox(data[n]);
            goToNext();
            goToPrevious();

            // Go to next picture
            function goToNext(){
                goNext.addEventListener('click', function(){
                    resetLightbox();
                    if(n === cards.length-1){
                        n = 0    
                    }else{
                        n = n+1
                    }
                    displayLightbox(data[n]);
                })
            }

            // Go to previous picture
            function goToPrevious(){
                goPrevious.addEventListener('click', function(){
                    resetLightbox();
                    if(n === 0){
                        n = cards.length-1
                    }else{
                        n = n-1
                    }
                    displayLightbox(data[n]);
                })
            }

            // Listen to keypress
            lightbox.addEventListener('keydown', function(e){

                if (e.key === 'ArrowLeft') {
                    resetLightbox();
                    if(n === 0){
                        n = cards.length-1
                    }else{
                        n = n-1
                    }
                    displayLightbox(data[n]);
                }

                if (e.key === 'Escape'){
                    closeLightbox();
                }

                if (e.key === 'ArrowRight'){
                    resetLightbox();
                    if(n === cards.length-1){
                        n = 0    
                    }else{
                        n = n+1
                    }
                    displayLightbox(data[n]);
                }
            })
        })
        
    listenToCloseLightbox()
    }
}

// Close lightbox
function closeLightbox() {
    const lightbox = document.getElementById("lightbox");
    const backMain = document.querySelector('main');
    const logo = document.querySelector('.logo');
    const firstPicture = document.querySelector('.Media');

    lightbox.style.display = "none";
    backMain.style.display = "block";
    logo.style.display = 'block';
    firstPicture.focus();
}

// Listen to click to close lightbox
function listenToCloseLightbox(){
    const close = document.querySelector("#close_lightbox");

    close.addEventListener('click', function(){
        resetLightbox();
        closeLightbox();
    })
}
