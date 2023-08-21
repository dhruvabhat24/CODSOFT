/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')
/*=====MENU SHOW====*/
/* Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
/*====== MENU HIDDEN =====*/
/* validate if constant exists*/
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink=document.querySelectorAll('.nav__link')
const navLinkAction=()=>{
    const navMenu=document.getElementById('nav--menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n=>n.addEventListener('click',LinkAction))

/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader=()=>{
    const header=document.getElementById('header')
    this.scrollY>=50 ? header.classList.add('blur-header')
                     : header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader)

/*=============== EMAIL JS ===============*/
const conatctForm = document.getElementById('conatct-form')
      conatctMessage = document.getElementById('contact-message')
const sendEmail =(e) =>{
    e.preventDefault()

    //ServiceID - templateID - #form -publickey
    emailjs.sendForm('service_k786uqv', 'template_o1z6vra', '#contact-form', '-rNtAdDbyTixa3hwu')
    .then(()=>{
        // show sent message
        conatctMessage.textContent = 'Message sent successfully ✔✔'
    }, () =>{
        //Show error message
        conatctMessage.textContent = 'Message not sent (service error) ❌'
    })
}
conatctForm.addEventListener('submit',sendEmail)      

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/