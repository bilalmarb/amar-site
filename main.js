let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let marbouh = document.getElementById('marbouh')

window.onscroll = function(){
    let value = scrollY ;

    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value  + 'px';
    boat.style.left = value * 3  + 'px';
    boat.style.top = value * 2.5  + 'px';
    river.style.top = value  + 'px';
    marbouh.style.fontSize = value  + 'px';

    if(scrollY >= 65)
    {
        marbouh.style.fontSize = 65  + 'px';
        marbouh.style.position = 'fixed';
        if(scrollY >= 381.5){
            marbouh.style.display = 'none';
        }else{
            marbouh.style.display = 'block';
        }
    }

    if(scrollY >= 106){
        document.querySelector('.min').style.background = 'linear-gradient(#030c5f,#3a76e6)';
    }else{
        document.querySelector('.min').style.background = 'linear-gradient(#27013f,#280f02)';
    }
}

