let tit1 = document.getElementById("tit1")
let tit2 = document.getElementById("tit2")
let tit3 = document.getElementById("tit3")

let act1 = document.getElementById("act1")
let act2 = document.getElementById("act2")
let act3 = document.getElementById("act3")

let img1 = document.getElementById("img1")
let img2 = document.getElementById("img2")
let img3 = document.getElementById("img3")

let p1 = fetch("https://www.boredapi.com/api/activity");
p1.then((value)=>{
    return value.json();
}).then((value)=>{
    tit1.innerText = (value.type).toUpperCase();
    act1.innerText = (value.activity);
    img1.setAttribute("src",`https://source.unsplash.com/600x600/?${value.type},bored`)
})
p1.catch((error)=>{
    console.log(error);
})

let p2 = fetch("https://www.boredapi.com/api/activity");
p2.then((value)=>{
    return value.json();
}).then((value)=>{
    console.log(`https://source.unsplash.com/600x600/?${value.type}`);
    tit2.innerText = (value.type).toUpperCase();
    act2.innerText = (value.activity);
    img2.setAttribute("src",`https://source.unsplash.com/600x600/?${value.type},bored`)
})
p2.catch((error)=>{
    console.log(error);
})

let p3 = fetch("https://www.boredapi.com/api/activity");
p3.then((value)=>{
    return value.json();
}).then((value)=>{
    tit3.innerText = (value.type).toUpperCase();
    act3.innerText = (value.activity);
    img3.setAttribute("src",`https://source.unsplash.com/600x600/?${value.type},bored`)
})
p3.catch((error)=>{
    console.log(error);
})


// https://source.unsplash.com/600x600/?