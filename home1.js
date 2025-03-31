// clear form before unload
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")) {
        form.reset();
    }
}
    
    window.addEventListener('scroll', reveal);
    
    function reveal(){  
        var reveals = document.querySelectorAll('.reveal');
    
        for(var i = 0; i < reveals.length; i++){
    
            var windowheight = window.innerHeight;
            var revealtop = reveals[i].getBoundingClientRect().top;
            var revealpoint = 150;
    
            if(revealtop < windowheight - revealpoint){
                reveals[i].classList.add('active');
            }
            else{
                reveals[i].classList.remove('active');
            }
        }
    }





// home coming soon
const comingSoon = document.querySelector('.comingSoon');

setInterval(() => {
    comingSoon.classList.add('activeSoon');
    clearInterval();
}, 2000);
setInterval(() => {
    comingSoon.classList.remove('activeSoon');
    clearInterval();
},4500)
