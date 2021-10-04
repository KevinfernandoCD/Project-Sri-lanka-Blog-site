var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter  > 5){
        counter = 1;
    }
}, 5000)

ScrollReveal({ reset: true ,distance: '60px',duration:2400});

ScrollReveal().reveal('.goals .image')
ScrollReveal().reveal('.goals .text' ,{origin:'right'});
ScrollReveal().reveal('.goals .text02' ,{origin:'left'});
ScrollReveal().reveal('.goals .image02' ,{origin:'right'});
ScrollReveal().reveal('.goals .image03' ,{origin:'bottom'});
ScrollReveal().reveal('.goals .text03' ,{origin:'right'});