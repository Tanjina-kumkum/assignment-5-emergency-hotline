      document.getElementById("card-btn") 
      .addEventListener
("mouseover",function(){alert("National Emergency Number clicked");} );



const icon = document.getElementsByClassName("heart") 
let number = 0;
for(const heart of icon){
    heart.addEventListener('click', function(){
        number++
        const hbtn = document.getElementById("heart-line") 
        hbtn.innerText = number;
    })

}
let coin = document.getElementsByClassName("call-btn")
for(let call of coin){
    call.addEventListener('click', function(){
        if(coin>0){
            coin--
            const cbu = document.getElementById("coin-btn")
        cbu.innerText= coin
        }
       
    })
}
