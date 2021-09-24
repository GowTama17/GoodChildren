let autorization = document.querySelector(".autorization");
let registrationBtn = document.querySelector(".registration");
let volunteerBlock = document.querySelector(".registration-volunteer");
let childrenBlock = document.querySelector(".registration-children");
let volunteerBtn = document.querySelectorAll(".form__buttons-volunteer");
let childrenBtn = document.querySelectorAll(".form__buttons-children");
let volunteer1 = document.querySelector(".form__regist-vol1");
let volunteer2 = document.querySelector(".form__regist-vol2");
let children1 = document.querySelector(".form__regist-child");
let children2 = document.querySelector(".form__regist-orp");
let volunteerContinue = document.querySelector(".volunteer-continue");
let childrenContinue = document.querySelector(".children-continue");
let volutreen1Back = document.querySelector(".back-vol1");
let volutreen2Back = document.querySelector(".back-vol2");
let children1Back = document.querySelector(".back-child1");
let children2Back = document.querySelector(".back-child2");

registrationBtn.addEventListener("click", ()=>{
    volunteerBlock.style.display = "flex";
    volunteerBlock.style.opacity = "1";
    autorization.style.opacity = "0";
    setTimeout(() => {                
        autorization.style.display = "none";
    }, 300)
})
for(let item of volunteerBtn){
    item.addEventListener("click", () => {
        volunteerBlock.style.display = "flex";
        volunteerBlock.style.opacity = "1";
        childrenBlock.style.opacity = "0";
        setTimeout(() => {                
            childrenBlock.style.display = "none";
            children1.style.display = "block";
            children1.style.opacity = "1";
            children2.style.display = "none";
            children2.style.opacity = "0";
        }, 300)
    })
}

for(let item of childrenBtn){
    item.addEventListener("click", () => {
        childrenBlock.style.display = "flex";
        childrenBlock.style.opacity = "1";
        volunteerBlock.style.opacity = "0";
        setTimeout(() => {                
            volunteerBlock.style.display = "none";
            volunteer1.style.display = "block";
            volunteer1.style.opacity = "1";
            volunteer2.style.display = "none";
            volunteer2.style.opacity = "0";
        }, 300)
    })
}

volunteerContinue.addEventListener("click", () => {
    volunteer2.style.display = "block";
    volunteer2.style.opacity = "1";
    volunteer1.style.opacity = "0";
    setTimeout(() => {                
        volunteer1.style.display = "none";
    }, 300)
})

childrenContinue.addEventListener("click", () => {
    children2.style.display = "block";
    children2.style.opacity = "1";
    children1.style.opacity = "0";
    setTimeout(() => {                
        children1.style.display = "none";
    }, 300)
})

volutreen1Back.addEventListener("click", () =>{
    autorization.style.display = "flex";
    autorization.style.opacity = "1";
    volunteerBlock.style.opacity = "0";
    setTimeout(() => {                
        volunteerBlock.style.display = "none";
        volunteer1.style.display = "block";
        volunteer1.style.opacity = "1";
        volunteer2.style.display = "none";
        volunteer2.style.opacity = "0";
    }, 300)
})

children1Back.addEventListener("click", () =>{
    autorization.style.display = "flex";
    autorization.style.opacity = "1";
    childrenBlock.style.opacity = "0";
    setTimeout(() => {                
        childrenBlock.style.display = "none";
        children1.style.display = "block";
        children1.style.opacity = "1";
        children2.style.display = "none";
        children2.style.opacity = "0";
    }, 300)
})


volutreen2Back.addEventListener("click", () => {
    volunteer1.style.display = "block";
    volunteer1.style.opacity = "1";
    volunteer2.style.opacity = "0";
    setTimeout(() => {                
        volunteer2.style.display = "none";
    }, 300)
})

children2Back.addEventListener("click", () => {
    children1.style.display = "block";
    children1.style.opacity = "1";
    children2.style.opacity = "0";
    setTimeout(() => {                
        children2.style.display = "none";
    }, 300)
})