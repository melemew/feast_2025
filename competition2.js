const putra = {
    gambarSd: [
        {
            title: 'Puisi',
            img: 'img_sd/1.jpg',
            rules: '',
            keterangan: 'Putra',
            class: 0,
            file: 'gambarSd'
        },
        {
            title: 'Pidato',
            img: 'img_sd/2.jpg',
            rules: '',
            keterangan: 'Putra',
            class: 1,
            file: 'gambarSd'
        },
        {
            title: 'MHQ',
            img: 'img_sd/3.jpg',
            rules: '',
            keterangan: 'Putra',
            class: 2,
            file: 'gambarSd'
        }
    ],
    gambarSmp: [
        {
            title: 'Sepak Bola',
            img: 'img_smp/1.jpg',
            rules: '',
            keterangan: 'Putra',
            class: 0,
            file: 'gambarSmp'
        },
        {
            title: 'Futsal',
            img: 'img_smp/2.jpg',
            rules: '',
            keterangan: 'Putra',
            class: 1,
            file: 'gambarSmp'
        },
        {
            title: 'Story Telling',
            img: 'img_smp/3.jpg',
            rules: '',
            keterangan: 'Putra',
            class: 2,
            file: 'gambarSmp'
        },
        {
            title: 'CC MIPA',
            img: 'img_smp/4.png',
            rules: '',
            keterangan: 'Putra',
            class: 3,
            file: 'gambarSmp'
        },
        {
            title: 'MHQ',
            img: 'img_smp/5.jpg',
            rules: '',
            keterangan: 'Putra',
            class: 4,
            file: 'gambarSmp'
        }
    ],
    gambarSma: [
        {
            title: 'Futsal',
            img: 'img_sma/1.jpg',
            rules: '',
            keterangan: 'Putra',
            class: 0,
            file: 'gambarSmp'
        },
        {
            title: 'MHQ',
            img: 'img_sma/2.jpg',
            rules: '',
            keterangan: 'Putra',
            class: 1,
            file: 'gambarSmp'
        },
        {
            title: 'Kaligrafi',
            img: 'img_sma/3.jpg',
            rules: '',
            keterangan: 'Putra',
            class: 2,
            file: 'gambarSmp'
        },
        {
            title: 'SMS',
            img: 'img_sma/4.png',
            rules: '',
            keterangan: 'Putra',
            class: 3,
            file: 'gambarSmp'
        }
    ]
}

const putri = {
    gambarSd: [],
    gambarSmp: [{
        title: 'Ketambahan Solo Vocal',
        img: 'img_smp/1.jpg',
        rules: '',
        keterangan: 'Putri',
        class: 5,
        file: 'gambarSmp'
    }],
    gambarSma: []
}


const section = document.querySelector('.competition');
// showing cards
const urlParams = new URLSearchParams(window.location.search);
const compid = urlParams.get("gender");

if (compid == 'putra') {
    tampilkanCards(putra)
    tampilkanCards2(putra.gambarSmp)
} else {
    tampilkanCards(putri)
    tampilkanCards2(putri.gambarSmp)
}
    
function tampilkanCards(gender) {
    const grades = document.querySelectorAll('.grade');
    for (let i=0; i < grades.length; i++) {
        grades[i].addEventListener('click', (e) => {
            if (e.target.classList.contains('sd')) {
                grades[1].classList.remove('kontol')
                grades[2].classList.remove('kontol')
                e.target.classList.add('kontol');
                tampilkanCards2(gender.gambarSd);
                if (section.style.height < window.innerHeight) {
                  section.style.height = "100%";
                }else {section.style.height = ''}
            }
            if (e.target.classList.contains('smp')) {
                grades[0].classList.remove('kontol')
                grades[2].classList.remove('kontol')
                e.target.classList.add('kontol');
                tampilkanCards2(gender.gambarSmp);
                if (section.style.height < window.innerHeight) {
                  section.style.height = "100%";
                }else {section.style.height = ''}
            }
            if (e.target.classList.contains('sma')) {
                grades[0].classList.remove('kontol')
                grades[1].classList.remove('kontol')
                e.target.classList.add('kontol');
                tampilkanCards2(gender.gambarSma);
                if (section.style.height < window.innerHeight) {
                  section.style.height = "100%";
                }else {section.style.height = ''}
            }
        })
    }
}

function tampilkanCards2(dir) {
    if (dir.length == 0) {
        const container = document.querySelector('.cnt-comp');
        return container.innerHTML = showCards2();
    }

    let cards = '';
    dir.forEach(e => {
        cards += showCards(e);
    });
    const container = document.querySelector('.cnt-comp');
    return container.innerHTML = cards

}

function showCards(m) {
    return `<div class="lomba">
                        <div class="card">
                            <img src="${m.img}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${m.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${m.keterangan}</h6>
                                <a href="#" class="btn1 btn btn-primary modal-detail-button" data-bs-toggle="modal">Daftar</a>
                                <a href="#" class="btn2 btn btn-primary modal-detail-button" data-bs-toggle="modal">Show Details</a>
                            </div>
                        </div>
                    </div>`;    
}

function showCards2() {
    return `<div class="opacity lomba">
                        <div class="card">
                            <img src="img_smp/1.jpg" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">Ketambahan Solo Vocal</h5>
                                <h6 class="card-subtitle mb-2 text-muted">Putri</h6>
                                <a href="#" class="btn1 btn btn-primary modal-detail-button" data-bs-toggle="modal">Daftar</a>
                                <a href="#" class="btn2 btn btn-primary modal-detail-button" data-bs-toggle="modal">Show Details</a>
                            </div>
                        </div>
                    </div>`;    
}