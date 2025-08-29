// document.getElementById("card-btn")
// .addEventListener
// ("mouseover",function(){alert("National Emergency Number clicked");} );


const icon = document.getElementsByClassName("heart") 
let number = 0;
for(const heart of icon){
    heart.addEventListener('click', function(){
        number++
        const hbtn = document.getElementById("heart-line") 
        hbtn.innerText = number;
    })

}
const button = document.getElementsByClassName