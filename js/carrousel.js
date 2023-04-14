(function () {
    console.log('Carousel initialized');

    let carousel = document.querySelector('.carrousel');
    let closeButton = document.querySelector('.bouton__x');
    let prevButton = document.querySelector('.bouton__precedent');
    let nextButton = document.querySelector('.bouton__suivant');
    let gallery = document.querySelector('.galerie');
    let galleryImages = gallery.querySelectorAll('img');
    let carouselFigure = document.querySelector('.carrousel__figure');
    let carouselForm = document.querySelector('.carrousel__form');

    let currentIndex = 0;
    let prevIndex = -1;
    let lastClickedIndex = -1;

    galleryImages.forEach((image, index) => {
        image.addEventListener('click', () => {
            lastClickedIndex = index;
            carousel.classList.add('carrousel--ouvrir');
            setupCarousel();
        });
    });

    closeButton.addEventListener('click', () => {
        console.log('Closing modal');
        carousel.classList.remove('carrousel--ouvrir');
    });

    prevButton.addEventListener('click', () => {
        currentIndex = currentIndex > 0 ? currentIndex - 1 : galleryImages.length - 1;
        activateImage(currentIndex);
    });

    nextButton.addEventListener('click', () => {
        currentIndex = currentIndex < galleryImages.length - 1 ? currentIndex + 1 : 0;
        activateImage(currentIndex);
    });

    function setupCarousel() {
        carouselFigure.innerHTML = "";
        carouselForm.innerHTML = "";
        currentIndex = 0;
        galleryImages.forEach((image) => {
            addImageToCarousel(image);
            addRadioButton();
            currentIndex++;
        });
        currentIndex = lastClickedIndex;
        activateImage(currentIndex);
    }

    function addImageToCarousel(image) {
        let carouselImage = document.createElement('img');
        carouselImage.setAttribute('src', image.getAttribute('src'));
        carouselImage.classList.add('carrousel__img');
        carouselImage.dataset.index = currentIndex;
        carouselFigure.appendChild(carouselImage);
    }

    function addRadioButton() {
        let radioButton = document.createElement('input');
        radioButton.setAttribute('type', 'radio');
        radioButton.setAttribute('name', 'radCarrousel');
        radioButton.dataset.index = currentIndex;
        carouselForm.appendChild(radioButton);
        radioButton.addEventListener('click', () => {
            activateImage(radioButton.dataset.index);
        });
    }

    function activateImage(index) {
        if (prevIndex !== -1) {
            carouselFigure.children[prevIndex].classList.remove('carrousel__img--activer');
            carouselForm.children[prevIndex].checked = false;
        }
        carouselFigure.children[index].classList.add('carrousel__img--activer');
        carouselForm.children[index].checked = true;
        prevIndex = index;
    }
})();
