const  row = 3 , column = 3 ;
const colors =["#ffb703" , "#6a994e" , "#bc4749" ,"#e5989b" ,"#457b9d", "#ff0054", "#bc6c25", "#9e0059" , "#240046", "#41ead4"];
const items = document.querySelectorAll(".item");

const modalContainer = document.querySelector(".modal-container");
const modal = document.querySelector(".modal");
const modalBtn = document.querySelector(".modal-btn");
const modalP = document.querySelector(".modal p");

const point =  document.querySelector(".point");


let score ;
initialGame();

function initialGame(){
    score = 0 ;
    point.innerText = "امتیاز های شما : 0"
    colorizeItems();
}



function colorizeItems(){

    let mainColor = colors[ Math.floor(Math.random() * colors.length)];
    items.forEach(item => item.style.backgroundColor = mainColor) ;

    let targetItems = Math.floor(Math.random() * (row * column));
    items[targetItems].style.backgroundColor = lightenColor(mainColor, 50);

    items.forEach((item , number) => {
        if(number === targetItems){
            item.removeEventListener("click" , loseGame);
              item.addEventListener("click", nextLevel);

              }else{
            item.removeEventListener("click" , nextLevel);
            item.addEventListener("click", loseGame) };
  
        });
    };


function lightenColor(color, amount) {
     return '#' + color.replace(/^#/, '').replace(/../g , color => ('0'+ Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(16)).substr(-2));

     }


function nextLevel (){
    score += 1;
    point.innerText = `امتیاز های شما : ${score}`;
    colorizeItems();
    
}
function loseGame(){
    modalP.innerText =`امتیاز های شما : ${score}`;
    modalContainer.classList.add("show");

}
modalBtn.addEventListener("click", () => {
    modalContainer.classList.remove("show");
    initialGame();
})