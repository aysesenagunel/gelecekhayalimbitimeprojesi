//! SIDEBAR 
const showSidebar = (toggleId, sidebarId) => {
    const toggle = document.getElementById(toggleId),
        sidebar = document.getElementById(sidebarId)

    if (toggle && sidebar) {
        toggle.addEventListener('click', () => {
            /* Show sidebar */
            sidebar.classList.toggle('show-sidebar')
        })
    }
}
showSidebar('header-toggle', 'sidebar')


//! ALERT UYARISI
function myFunction() {
    alert("Konferansa katılmak için üye olunuz!");
}


//! DARK-LIGHT MODE
const mode = document.querySelector(".navbar-right");
const items = document.querySelectorAll("body,.navbar,.list,.navbar-menu li,.navbar-menu a,.heart,.uye-button a,.after,.sun,.moon,.sidebar a,.sidebar-last,.header,.container,.card,.main,.content-time div,.ucret,.katil,.ucret-button:hover,.katil-button:hover,.sayac,table,.footer,.footer-title,.overlay,.image-text,.arrow");

mode.addEventListener("click", function () {
    items.forEach((item) => item.classList.toggle("active"));
});


//!GERİ SAYIM SAYACI
var countDownDate = new Date("2024-11-11T18:30:00").getTime(); // Konferans tarihini belirleme

//geri sayım işlevi
var x = setInterval(function () { //geri sayım hesaplama
    var now = new Date().getTime(); // Sistem saatini alıyoruz
    var distance = countDownDate - now; // Geri sayımla şimdi saat arasındaki zamanı ölçüyoruz
    var days = Math.floor(distance / (1000 * 60 * 60 * 24)); //Gün
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); // Saat
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); //Dakika
    var seconds = Math.floor((distance % (1000 * 60)) / 1000); //Saniye

    document.getElementById("gerisayim").innerHTML = "Konferansa " + days + " gün " + hours + " saat " + minutes + " dakika " + seconds + " saniye kaldı..."; // Anlık olarak id="gerisayim" içine aktarılıyor

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("gerisayim").innerHTML = "Süre doldu";
    }; // Süre dolduğunda yazacak yazı.
}, 1000);


//! LISTE KAYDIRMA

// sağ tarafa için kaydırma
const arrowRs = document.querySelectorAll(".right");
const girlListR = document.querySelectorAll(".woman-list");

for (let i = 0; i < arrowRs.length; i++) {
    let clickCounter = 0;
    const imageItem = girlListR[i].querySelectorAll("img").length;

    arrowRs[i].addEventListener("click", function () {
        const currentTransform = getComputedStyle(girlListR[i]).transform;
        const matrixValues = currentTransform.match(/matrix.*\((.+)\)/);

        if (matrixValues) {
            const translateX = parseFloat(matrixValues[1].split(', ')[4]);
            const maxScroll = imageItem - 12; // Maksimum kaydırma sayısı

            // Eğer tıklamalar maxScroll'dan fazla ise, clickCounter'ı sıfırla
            if (clickCounter < maxScroll) {
                girlListR[i].style.transform = `translateX(${translateX - 140}px)`;
                clickCounter++;
            } else {
                clickCounter = 0; // Sıfırla
                girlListR[i].style.transform = "translateX(0)"; // Yeniden başlat
            }
        }
    });
}

// sol tarafa için kaydırma
const arrowLs = document.querySelectorAll(".left");
const girlListL = document.querySelectorAll(".woman-list");

for (let i = 0; i < arrowLs.length; i++) {
    let clickCounter = 0;
    const imageItem = girlListL[i].querySelectorAll("img").length;

    arrowLs[i].addEventListener("click", function () {
        const currentTransform = getComputedStyle(girlListL[i]).transform;
        const matrixValues = currentTransform.match(/matrix.*\((.+)\)/);

        if (matrixValues) {
            const translateX = parseFloat(matrixValues[1].split(', ')[4]);
            const maxScroll = imageItem - 12; // Maksimum kaydırma sayısı

            // Eğer tıklamalar maxScroll'dan fazla ise, clickCounter'ı sıfırla
            if (clickCounter < maxScroll) {
                girlListL[i].style.transform = `translateX(${translateX + 140}px)`;
                clickCounter++;
            } else {
                clickCounter = 0; // Sıfırla
                girlListL[i].style.transform = "translateX(0)"; // Yeniden başlat
            }
        }
    });
}