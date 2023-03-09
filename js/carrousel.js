
(function(){
    // fonction IFEE
    console.log('début du carrousel')
    let bouton__ouvrir = document.querySelector('.bouton__ouvrir')
    let elmCarrousel = document.querySelector('.carrousel')
    let elmBouton__x = document.querySelector('.bouton__x')
    let elmGalerie = document.querySelector('.galerie')
    let elmGalerie__img = elmGalerie.querySelectorAll('img')
    let elmGalerie__figure = document.querySelector('.galerie__figure')
    console.log(elmGalerie__img.length)



    for (const elmImg of elmGalerie__img){
        let elmCarrousel__img = document.createElement('img')
        elmCarrousel__img.setAttribute('src', elmImg.getAttribute('src'))
        elmGalerie__figure.appendChild(elmCarrousel__img)

    }




    console.log(bouton__ouvrir.tagName)
    
    bouton__ouvrir.addEventListener('mousedown', function(){
        console.log('boîte modale')
        elmCarrousel.classList.add('carrousel--ouvrir')
    })
    elmBouton__x.addEventListener('mousedown', function(){
        console.log('boîte modale')
        elmCarrousel.classList.remove('carrousel--ouvrir')
    })
    })()