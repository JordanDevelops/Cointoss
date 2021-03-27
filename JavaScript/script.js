//Jordan Schulte
const results = document.querySelector("#results");
const flipBtn = document.querySelector(".flip");
let counter = document.querySelector("#counter");

flipBtn.addEventListener("click", ()=>{
    let rng = Math.floor(Math.random()*2);
    console.log(rng);

    if(rng == 0){
        document.querySelector("#coin").src = "https://i.ibb.co/sQKsNjC/heads.png";
        results.innerHTML = "<h2>Heads</h2>";
    }
    if(rng == 1){
        document.querySelector("#coin").src = "https://i.ibb.co/tYtvmdq/tails.png";
        results.innerHTML = "<h2>Tails</h2>";
    }

    counter.innerHTML++;

    

});