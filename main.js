let menuIcons = document.querySelector('#menu-icon');
let nav = document.querySelector('.nav');


menuIcons.Onclick = () =>{
menuIcons.classList.toggle('bx-x');
nav.classList.toggle('active');
};


let section = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('.header nav a');

window.onscroll = () =>{
    section.forEach(sec =>{
        let top=window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top <offset + height){
        navlinks.forEach(link => {
            link.classList.remove('active');
            document.querySelector('header nav a[href*=' + id  + ']').classList.add('active');
        });
       
        };
    });
         /*==========emove toggle icon amd navbar when click nav bar when scrol==========*/
        menuIcons.classList.remove('bx-x');
        nav.classList.remove('active');


    };
    // =====submit btn=====

    let contbtn = document.querySelector(".contbtn");
    contbtn.addEventListener("click", (event) => {
        event.preventDefault();

        contbtn.classList.add("submiting");
        contbtn.innerHTML = "";
            setTimeout(() => {
                contbtn.classList.remove("submiting");
                contbtn .innerHTML = "Done!";
            },3000)
        });

    let submitbtn = document.getElementById('submitbtn');
    submitbtn.addEventListener("click", function(e){
      e.preventDefault();
      var name = document.getElementById("fullname").value;
      var email = document.getElementById("email").value;
      var emailsubject = document.getElementById("emailsubject").value;
      var number = document.getElementById("number").value;
      var textarea = document.getElementById("textarea").value;
      var body = 'name: ' + name + '<br> email: ' + email + '<br> number: ' + number + '<br> textarea: ' + textarea;
      Email.send({
        Host : "smtp.elasticemail.com",
        Username : "olsenfischer08@gmail.com",
        Password : "AF8CF0061BF1C2B3E8D1C4CD40501AADD27C",
        To : 'olsenfischer08@gmail.com',
        From : email,
        Subject : emailsubject,
        Body : body
    }).then(
      message => alert(message)
    );
    })
    
    // ====typed js=====

 var typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Backend Developer', 'Designer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 100,
     loop: true
     });                       

    //  ====Swiper====

    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      grabCusor: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });

    let darkModeIcon = document.querySelector('#darkMode-icon');
    darkModeIcon.Onclick = () =>{
      darkModeIcon.classList.toggle( 'bx-sun');
    }