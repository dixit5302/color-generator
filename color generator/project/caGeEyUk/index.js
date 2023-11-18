let characters = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
let clickBtn = document.getElementById("click-btn")
let bgdColor = document.querySelector("#bgd-color")
let body = document.querySelector("body")


clickBtn.addEventListener("click", function(){
        let getHex = '#'
        for(let i = 0; i< 6; i++){
        let randomNumbers = Math.floor(Math.random()*characters.length)
        getHex += characters[randomNumbers]
  }
  body.style.backgroundColor = getHex
  bgdColor.innerText = getHex
})

