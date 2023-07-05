const RateCards = document.querySelectorAll(".rate-numbers span");
const Submitbtn = document.querySelector (".btn-submit");
const RateNumber = document.getElementById ("rate"); 
const rateSection = document.querySelector (".firstcard");
const thankSection = document.querySelector(".second-card")

let rate= null; 

RateCards.forEach((rate_card) => {
    rate_card.addEventListener("click", (f) => {
        const active = document.querySelector(".checked");
        if(active){
            active.classList.remove("checked")
        }
        const card= f.target;
        card.classList.add("checked");
        rate = f.target.innerText;
    });
});

Submitbtn.addEventListener("click", () => {
    if(rate) {
        RateNumber.innerText = rate;
        rateSection.classList.add("hidden");
        thankSection.classList.remove("hidden");
    }
});