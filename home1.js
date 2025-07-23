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







// hitung mundur acara feast
const hitungMundur = setInterval(() => {

        const ultah = new Date(`13 october 2025 00:00:00`).getTime();
        const today = new Date().getTime();

        const selisih = ultah - today;

        const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
		const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
		const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60)); 
		const detik = Math.floor(selisih % (1000 * 60) / 1000);  

        const teks = document.querySelector('#hitungMundur ul');
		// teks.innerHTML = hari + '  :  ' + jam + '  :  ' + menit + '  :  ' + detik
        teks.innerHTML = `<li><span>${hari}</span> Days</li> - <li><span>${jam}</span> Hours</li> - <li><span>${menit}</span> Minutes</li> - <li><span>${detik}</span> Seconds</li>`

		if (selisih < 0) {
			clearInterval(hitungMundur);
            surprise(nama)
            setTimeout(() => {
                hadiah();
            },3000)
		}

    },1000)