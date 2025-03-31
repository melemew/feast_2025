const gambarSd = [
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
];

const gambarSmp = [
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
    },
    {
        title: 'Ketambahan Solo Vocal',
        img: 'img_smp/1.jpg',
        rules: '',
        keterangan: 'Putri',
        class: 5,
        file: 'gambarSmp'
    }
];

const gambarSma = [
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


// showing cards
const grades = document.querySelectorAll('.grade');
for (let i=0; i < grades.length; i++) {
    grades[i].addEventListener('click', (e) => {
        if (e.target.classList.contains('sd')) {
            grades[1].classList.remove('kontol')
            grades[2].classList.remove('kontol')
            e.target.classList.add('kontol');
            return tampilkanCards(gambarSd);
        }
        if (e.target.classList.contains('smp')) {
            grades[0].classList.remove('kontol')
            grades[2].classList.remove('kontol')
            e.target.classList.add('kontol');
            return tampilkanCards(gambarSmp);
        }
        if (e.target.classList.contains('sma')) {
            grades[0].classList.remove('kontol')
            grades[1].classList.remove('kontol')
            e.target.classList.add('kontol');
            return tampilkanCards(gambarSma);
        }
    })
}
tampilkanCards(gambarSmp);



function tampilkanCards(dir) {
    let cards = '';
    dir.forEach(e => {
        cards += showCards(e);
    });
    const container = document.querySelector('.cnt-comp');
    container.innerHTML = cards
}

function showCards(m) {
    return `<div class="lomba">
                        <div class="card">
                            <img src="${m.img}" class="card-img-top">
                            <div class="card-body">
                                <h5 class="card-title">${m.title}</h5>
                                <h6 class="card-subtitle mb-2 text-muted">${m.keterangan}</h6>
                                <a href="#" class="btn1 btn btn-primary modal-detail-button" data-bs-toggle="modal">Daftar</a>
                                <a href="#" class="${m.file} btn2 btn btn-primary modal-detail-button" data-bs-toggle="modal" data-bs-target="#movieDetailModal" data-imdbid="${m.class}">Show Detail</a>
                            </div>
                        </div>
                    </div>`;    
}



// detail card
document.addEventListener('click', async function(e) {
    if(e.target.classList.contains('gambarSd')) {
        const index = e.target.dataset.imdbid;            
        cetakDetail(gambarSd, index)
    }
    if(e.target.classList.contains('gambarSmp')) {
        const index = e.target.dataset.imdbid;            
        cetakDetail(gambarSmp, index)
    }
    if(e.target.classList.contains('gambarSma')) {
        const index = e.target.dataset.imdbid;            
        cetakDetail(gambarSma, index)
    }
})

function cetakDetail(file, index) {
    console.log(file + index);
    
    const lombaDetail = showLombaDetail(file[index]);
    const modalBody = document.querySelector('.modal-body');
    modalBody.innerHTML = lombaDetail;
}

function showLombaDetail(m) {
    return `<div class="container-fluid">
                        <div class="row">
                            <div class="col-md-3">
                                <img src="${m.img}" class="img-fluid">
                            </div>
                            <div class="col-md">
                                <ul class="list-group">
                                    <li class="list-group-item"><h4>${m.title} (${m.keterangan})</h4></li>
                                    <li class="list-group-item"><strong>Direstor : </strong>${m.Director}</li>
                                    <li class="list-group-item"><strong>Actress : </strong>${m.Actors}</li>
                                    <li class="list-group-item"><strong>Writer : </strong>${m.Writer}</li>
                                    <li class="list-group-item"><strong>Plot : </strong><br>${m.Plot}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`
}


if (window.innerWidth >= 320 && window.innerWidth <= 428) {
    document.querySelector('.navbar-container').remove();
}