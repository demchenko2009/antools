
const elements = document.getElementsByClassName('image-dark');


for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener('click', function() {
       
        const currentSrc = this.getAttribute('src');
        
    
        const newSrc = currentSrc === 'img/like.png' ? 'img/hert.png' : 'img/like.png';
        
       
        this.setAttribute('src', newSrc);
    });
}