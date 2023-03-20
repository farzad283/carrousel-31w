(function(){
    // fonction IIFE
   
    console.log('début du carrousel');
    let elmCarrousel = document.querySelector('.carrousel');
    let elmBouton__x = document.querySelector('.bouton__x');
    let elmBouton__precedent = document.querySelector('.bouton__precedent');
    let elmBouton__suivant = document.querySelector('.bouton__suivant');
    let elmGalerie = document.querySelector('.galerie');
    let elmGalerie__img = elmGalerie.querySelectorAll('img');
    let elmCarrousel__figure = document.querySelector('.carrousel__figure'); //
    let elmCarrousel__form= document.querySelector('.carrousel__form'); // conteneur des radio bouton
    console.log(elmGalerie__img.length);

    let index = 0;
    let index__precedent = -1;
    let lastClickedIndex = -1;
    console.log(elmGalerie__img.length);

    for (let i = 0; i < elmGalerie__img.length; i++) {
        let elmImg = elmGalerie__img[i];
        elmImg.addEventListener('click', function() {
            lastClickedIndex = i;
            elmCarrousel.classList.add('carrousel--ouvrir');
            ajouter_carrousel();
        });
    }
    
    elmBouton__x.addEventListener('click', function(){
        console.log('boîte modale');
        elmCarrousel.classList.remove('carrousel--ouvrir');
    });
    
    elmBouton__precedent.addEventListener('click', function() {
        if (index > 0) {
            index--;
            activer__image(index);
        }
    });
    
    elmBouton__suivant.addEventListener('click', function() {
        if (index < elmGalerie__img.length - 1) {
            index++;
            activer__image(index);
        }
    });

    function ajouter_carrousel(){
        elmCarrousel__figure.innerHTML="";
        elmCarrousel__form.innerHTML="";
        index = 0;
        for (const elmImg of elmGalerie__img){
            ajouter_img(elmImg);  // ajoute l'image dans le carrousel
            ajouter_radio(); // ajoute les radio bouton dans carrousel__form
            index++;
        }
        index = lastClickedIndex;
        activer__image(index);
    }

    function ajouter_img(elmImg){
        let elmCarrousel__img = document.createElement('img');
        elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'));
        elmCarrousel__img.classList.add('carrousel__img');
        elmCarrousel__img.dataset.index = index;
        elmCarrousel__figure.appendChild(elmCarrousel__img);
    }

    function ajouter_radio(){
        let elmcarrousel__radio = document.createElement('input');
        elmcarrousel__radio.setAttribute('type','radio');
        elmcarrousel__radio.setAttribute('name','radCarrousel');
        elmcarrousel__radio.dataset.index = index;
        elmCarrousel__form.appendChild(elmcarrousel__radio);
        elmcarrousel__radio.addEventListener('click', function(){
            activer__image(this.dataset.index);
        });
    }
        function activer__image(index){
        if (index__precedent != -1){
            elmCarrousel__figure.children[index__precedent].classList.remove('carrousel__img--activer');
        }
        elmCarrousel__figure.children[index].classList.add('carrousel__img--activer');
        index__precedent = index;
    }

})();