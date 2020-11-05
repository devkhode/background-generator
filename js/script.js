let body = document.getElementById('body')
let color1 = document.getElementById('color1')
let color2 = document.getElementById('color2')
let colorcode = document.getElementById('color-code')
let direction = document.getElementById('direction')

color1.addEventListener('input', function(){
    if (direction.value.toUpperCase() === 'right'.toUpperCase() || direction.value.toUpperCase() === 'left'.toUpperCase()) {
        body.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")"
        colorcode.innerText = "The first color code is" + " " + color1.value +' ' + "and the second color code is" + " " + color2.value    
    }

   else{
    colorcode.innerText = "Enter the correct gradient direction"
   } 
    
})

color2.addEventListener('input', function(){
    if (direction.value.toUpperCase() === 'right'.toUpperCase() || direction.value.toUpperCase() === 'left'.toUpperCase()){
    body.style.background = "linear-gradient(to right," + color2.value + "," + color1.value + ")"
    colorcode.innerText = "The first color code is" + " " + color1.value +' ' + "and the second color code is" + " " + color2.value    
}

else{
    colorcode.innerText = "Enter the correct gradient direction"
}
    
})

