let left = document.querySelector(".left");
let right = document.querySelector(".right");

let btnInfo = document.querySelector(".btn-info");
let crossBtn  = document.querySelector(".close-details");
btnInfo.addEventListener("click",()=>{
    right.classList.add("active");
    left.style.width = '75%'
    
})
crossBtn.addEventListener("click",()=>{
    right.classList.remove("active");
    left.style.width = "100%"
})



let icon1 = document.querySelector(".icons-1");
let tooltips = document.querySelector(".three-dots");
let icon3 = document.querySelector(".icons-3");
let cameraBtn = document.querySelector(".camera-btn");
let icons4 = document.querySelector(".icons-4");
let microBtn3 = document.querySelector(".micro-btn-3 ")
let body = document.querySelector("body")

console.log(icon1)
console.log(icon3)
console.log(icons4)
console.log(tooltips)
console.log(cameraBtn)
console.log(microBtn3)
tooltips,icon3,cameraBtn,icons4,microBtn3


tooltips.addEventListener("mouseover",()=>{
    icon1.classList.remove('d-none');
    icon3.classList.add('d-none');
    icons4.classList.add('d-none');
   
})
body.addEventListener("click",()=>{
    icon1.classList.add('d-none');
  
   
})

cameraBtn.addEventListener("mouseover",(e)=>{
    e.stopPropagation()
    icon3.classList.remove('d-none');
    icon1.classList.add('d-none');
    icons4.classList.add('d-none')
})
body.addEventListener("click",()=>{
    icon3.classList.add('d-none');
  
   
})

microBtn3.addEventListener("mouseover",(e)=>{
    e.stopPropagation()
    icons4.classList.remove('d-none');
    icon1.classList.add('d-none');
    icon3.classList.add('d-none');
})
body.addEventListener("click",()=>{
   
    icons4.classList.add('d-none');
  
   
})

let microBtn = document.querySelector(".micro-btn");
let tooltips1 = document.querySelector(".tooltips-1");
let icon2 = document.querySelector(".icons-1");

microBtn.addEventListener("mouseover",()=>{
    tooltips1.classList.remove("d-none");
    icon2.classList.add('d-none');
    
})
microBtn.addEventListener("mouseout",()=>{
    icon2.classList.remove('d-none');
    tooltips1.classList.add("d-none")
})



// let icon3 = document.querySelector(".icons-3");
// let cameraBtn = document.querySelector(".camera-btn");

// cameraBtn.addEventListener("mouseover",()=>{
//  icon3.classList.remove("d-none")

// }) 
// body.addEventListener("click",()=>{
//  icon3.classList.add("d-none")

// }) 


let tooltips2 = document.querySelector(".tooltips-2");
let microBtn1 = document.querySelector(".micro-btn-1");

microBtn1.addEventListener("mouseover",()=>{
tooltips2.classList.remove("d-none")
})
microBtn1.addEventListener("mouseout",()=>{
tooltips2.classList.add("d-none")
})

let tooltips3 = document.querySelector(".tooltips-3");
let microBtn2 = document.querySelector(".micro-btn-2");

microBtn2.addEventListener("mouseover",()=>{
tooltips3.classList.remove("d-none")
})
microBtn2.addEventListener("mouseout",()=>{
tooltips3.classList.add("d-none")
})


let tooltips5 = document.querySelector(".tooltips-5");
let microBtn4 = document.querySelector(".micro-btn-4");

microBtn4.addEventListener("mouseover",()=>{
tooltips5.classList.remove("d-none")
})
microBtn4.addEventListener("mouseout",()=>{
tooltips5.classList.add("d-none")
})

let tooltips6 = document.querySelector(".tooltips-6");
let microBtn5 = document.querySelector(".micro-btn-5");

microBtn5.addEventListener("mouseover",()=>{
tooltips6.classList.remove("d-none")
})
microBtn5.addEventListener("mouseout",()=>{
tooltips6.classList.add("d-none")
})

let tooltips7 = document.querySelector(".tooltips-7");
let microBtn6 = document.querySelector(".micro-btn-6");

microBtn6.addEventListener("mouseover",()=>{
tooltips7.classList.remove("d-none")
})
microBtn6.addEventListener("mouseout",()=>{
tooltips7.classList.add("d-none")
})



let endCall = document.querySelector(".End-call");
let tooltips8 = document.querySelector(".tooltips-8");
let undelay = document.querySelector(".undelay");
let cardInfo = document.querySelector(".card-info");

endCall.addEventListener("mouseover",()=>{
tooltips8.classList.remove("d-none")
})

endCall.addEventListener("click",()=>{
tooltips8.classList.remove("d-none");
undelay.classList.remove("d-none");
cardInfo.classList.remove('d-none');
})


undelay.addEventListener("click",()=>{
undelay.classList.add("d-none");
cardInfo.classList.add('d-none');
})

endCall.addEventListener("mouseout",()=>{
tooltips8.classList.add("d-none")
})



// let icons4 = document.querySelector(".icons-4");
// let microBtn3 = document.querySelector(".micro-btn-3")
// let body1 = document.querySelector("body")
// microBtn3.addEventListener("mouseover",(e)=>{
//    e.stopPropagation()
//     icons4.classList.remove("d-none")
// })
// body1.addEventListener("click",()=>{
//     icons4.classList.add("d-none")
// })
