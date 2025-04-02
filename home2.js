// showing cards
const gender = document.querySelectorAll('.gender');
for (let i=0; i < gender.length; i++) {
    gender[i].addEventListener('click', (e) => {
        if (e.target.classList.contains('putra')) {
            const idny = new URLSearchParams({ gender: 'putra' }).toString();
            window.location.href = `/competition?${idny}`;
        }
        if (e.target.classList.contains('putri')) {
            const idny = new URLSearchParams({ gender: 'putri' }).toString();
            window.location.href = `/competition?${idny}`;
        }
    })
}


setTimeout(() => {
    const body = document.querySelector('html body').clientWidth;
    if (body >= 320 && body <= 767) {
        const tambah = body + 140
        document.body.style.width = `${tambah}px`;
    }

    if (body >= 768 && body <= 1023) {
        const tambah2 = body + 340;
        document.body.style.width = `${tambah2}px`;
    }

    console.log(body);
    

    // if (body >= 1024) {
    //     const tambah3 = body + 450;
    //     document.body.style.width = `${tambah3}px`;
    // }

}, 10)