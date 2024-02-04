const modlar = [
    "beach", "birds", "cafe", "campfire", "city", "fireplace", "forest", "heavy-rain", "night-crickets", "rain-camping", "rain", "rain-windshield", "snow", "thunder", "train"
]

const kokEleman = document.querySelector("#root")

function renderKartlar() {
    kokEleman.innerHTML = ""

    modlar.forEach( eleman=>{
        const HTMLSablonu = `
            <div class="kart">
                <img src="img/${eleman}.jpg">
                <h2>${eleman.replace("-", " ")}</h2>
                <audio src="audio/${eleman}-sound.mp3"></audio>
            </div>
        `
        kokEleman.insertAdjacentHTML("beforeend", HTMLSablonu)
    } )

    sesOlaylari()
}

function sesOlaylari() {
    const kartlar = document.querySelectorAll('.kart');
    kartlar.forEach(kartElamini => {
        kartElamini.addEventListener('click', olay => {
            const kartSesi = kartElamini.querySelector('audio');
            if (kartSesi.paused === true) { // çalmıyor
               kartSesi.play();
               kartElamini.classList.add('aktif');
            } else { // çalmıyor
                kartSesi.pause();
                kartElamini.classList.remove('aktif');
            }
        })
    })
}

/* function renderEvents() {
    let allKart = document.querySelectorAll('.kart');
    for (let eleman of allKart) {
        eleman.addEventListener('click', playSound)
    }
}
renderEvents(   )
function playSound(event) {
   let eleman =  event.currentTarget;
   let audioName = eleman.innerText.toLowerCase().replace(' ', '-') + '-sound' + '.mp3'
   let yeniAudio = new Audio(`/audio/${audioName}`)
   yeniAudio.play()
} */

renderKartlar()
