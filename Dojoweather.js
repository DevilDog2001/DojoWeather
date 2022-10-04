var z = document.getElementById("alert")

var r = document.getElementById("Red_W1")

var b = document.getElementById("Blue_W1")

var rr = document.getElementById("Red_W2")

var bb = document.getElementById("Blue_W2")

var rrr = document.getElementById("Red_W3")

var bbb = document.getElementById("Blue_W3")

var rrrr = document.getElementById("Red_W4")

var bbbb = document.getElementById("Blue_W4")

function temp2(){
    r.textContent= "75°"
    b.innerHTML = "65°"
    rr.innerHTML= "80°"
    bb.innerHTML = "66°"
    rrr.innerHTML = "69°"
    bbb.innerHTML = "61°"
    rrrr.innerHTML = "78°"
    bbbb.innerHTML = "70°"
}

function alertz(){
    alert("Loading weather report...")
}

function accepted(){
    z.remove()
}