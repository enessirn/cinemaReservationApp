let seat = document.querySelectorAll(".seat")
let gun = document.querySelector(".gun")
let bilet = document.querySelector(".bilet")
let toplam = document.querySelector(".toplam")
let koltuklar = [];
const biletFiyati = 90;
seat.forEach(koltuk => {
    koltuklar.push(koltuk)
});
console.log(koltuklar)
const koltukSecimi = (e) => {
    const targetSecim = e.target;
    if(targetSecim.classList[1] === "dolu"){
       alert("Bu koltuk dolu olduğundan seçemezsiniz")
    }
    else if(targetSecim.classList[0] === "seat"){
        targetSecim.classList.toggle("selected")
    }
    biletSayisiKontrol()
  
}
const biletSayisiKontrol = ()=> {
    const biletSayisi = document.querySelectorAll(".selected").length
    
    bilet.textContent = `${biletSayisi}`
    const total = biletSayisi * biletFiyati;
    toplam.textContent = `₺${total}`

}
addEventListener("click",koltukSecimi)
