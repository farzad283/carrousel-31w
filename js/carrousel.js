(function(){
    // fonction IFEE
   
    console.log('début du carrousel')
    let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmBouton__x = document.querySelector('.bouton__x')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerie__img = elmGalerie.querySelectorAll('img')
    let elmCarrousel__figure = document.querySelector('.carrousel__figure') //
    let elmCarrousel__form= document.querySelector('.carrousel__form') // conteneur des radio bouton
    let bouton__prochain= document.querySelector('.bouton__prochain') 
    let bouton__precedent= document.querySelector('.bouton__precedent') 
    console.log(elmGalerie__img.length)

    let index = 0;
    let index__precedent = -1
    console.log(bouton__ouvrir.tagName)
    
    bouton__ouvrir.addEventListener('mousedown', function(){
        console.log('boîte modale')
        elmCarrousel.classList.add('carrousel--ouvrir')
        ajouter_carrousel()
    })
    elmBouton__x.addEventListener('mousedown', function(){
        console.log('boîte modale')
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })
    
    bouton__prochain.addEventListener('click', function(e){
       index++;
       if (index> elmGalerie__img.length-1) {
            index=0;
        }
        activer__image(index)
       
    })
    bouton__precedent.addEventListener('click', function(e){
        index--;
        if (index<0) {
            index=elmGalerie__img.length-1
        }
        activer__image(index)
    })
    function ajouter_carrousel(){
        elmCarrousel__figure.innerHTML=""
        elmCarrousel__form.innerHTML=""
        for (const elmImg of elmGalerie__img){
            ajouter_img(elmImg)  // ajoute l'image dans le carrousel
            ajouter_radio() // ajoute les radio bouton dans carrousel__form
        }
        elmCarrousel__figure .children[0].classList.add('carrousel__img--activer')
    }

    function ajouter_img(elmImg){
        let elmCarrousel__img = document.createElement('img')
        elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
        elmCarrousel__img.classList.add('carrousel__img')
        elmCarrousel__img.dataset.index = index
        elmCarrousel__figure.appendChild(elmCarrousel__img)
    }

    
    
    function ajouter_radio(){
        let elmcarrousel__radio = document.createElement('input')
        elmcarrousel__radio.setAttribute('type','radio')
        elmcarrousel__radio.setAttribute('name','radCarrousel')
        elmcarrousel__radio.dataset.index = index
        index++
        if (index> elmGalerie__img.length-1) {
            index=0;
        }
        elmCarrousel__form.appendChild(elmcarrousel__radio)
        elmcarrousel__radio.addEventListener('mousedown', function(){
            activer__image(this.dataset.index)
        })
    }
    
    function activer__image(index){
        if (index__precedent != -1){
            elmCarrousel__figure.children[index__precedent].classList.remove('carrousel__img--activer')
        }
        elmCarrousel__figure.children[index].classList.add('carrousel__img--activer')
        index__precedent = index
    }

    })()