"use strict";
                        /****************** NAVBAR *******************/
const navToggler = document.getElementById('toggle');
const navList = document.getElementById('navList');
const hamburger = document.querySelector('.burger');
const closeBtn = document.querySelector('.close');
const navbar = document.querySelector('.navbar');
const footerYear = document.querySelector('.footer-year');
const heroText = document.querySelector('.text_box');
const links = navList.querySelectorAll('a');


                        /***************** BANNER IMAGE RENDERING****************/
const banner = document.querySelector('.main-head')

                        /***************** MODAL TOGGLE FUNCTIONALITY ****************/
const showMore = document.querySelectorAll('.read-more');
const modal = document.querySelector('.modal-wrapper');
const hideModal = document.querySelector('.modal-close');
const modalContent = document.querySelector('.modal-content');
const flyntEvent = document.querySelectorAll('.fl-auto-event');
const eventModalContainer = document.querySelector('.event-modal-wrapper');
const eventModal = document.querySelector('.event-modal');
const eventModalContent = document.querySelector('.event-modal-content');
const hideEventModal = document.querySelector('.hide-event-modal');

//Binding that monitors and updates the footer and event countdown year to the current year
let currentYear = new Date().getFullYear(); 
//console.log(typeof(currentYear))


// const textFields = document.querySelector('.message_form');
// const submitBtn = document.querySelector('.submit');

// let p = eventModalContent.firstElementChild.textContent = 'Hey';
// console.log(p)
//console.log()
// submitBtn.addEventListener('click', () => textFields.reset());


                        /************************   NAVIGATION BAR  ***********************/
// Hamburger icon toggler
navToggler.addEventListener('click', ()=>{
    navList.classList.toggle('active');
    heroText.classList.toggle('fade-banner-text');
    //console.log(navList.classList)
   /*
   navList.classList.contains('active') ? heroText.classList.add('fade-banner-text') :  heroText.classList.remove('fade-banner-text');
    if(navList.classList.contains('active')){
        // console.log(true)
        heroText.classList.toggle('fade-banner-text');
    }
    else{
        //console.log(false)
        heroText.classList.toggle('fade-banner-text');
    }
    */
    //if(e.currentTarget.classList.contains('burger')){
        hamburger.classList.toggle('hideBurger');
        closeBtn.classList.toggle('ShowCloseBtn');

        // navList.addEventListener('click', (e)=>{
        //     if(e.target.classList.contains('navLinks')){
        //         console.log(true);
        //         navList.classList.toggle('active');
        //         hamburger.classList.toggle('hideBurger');
        //         closeBtn.classList.toggle('ShowCloseBtn');
        //     }else{
        //         console.log(false);
        //         navList.classList.toggle('active');
        //         hamburger.classList.toggle('hideBurger');
        //         closeBtn.classList.toggle('ShowCloseBtn');
        //     }
        // });
});
    links.forEach(link => {
        link.addEventListener('click', ()=>{
            navList.classList.toggle('active');
            hamburger.classList.toggle('hideBurger');
            closeBtn.classList.toggle('ShowCloseBtn');
            heroText.classList.toggle('fade-banner-text');
        });
});

// Changing the background color of the navbar on scroll
window.onscroll = function(){
      //if(document.body.scrollTop >= window.innerHeight || document.documentElement.scrollTop >= window.innerHeight){
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
            //console.log('scrolling...');
            navbar.classList.add('bg-nav');

            if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
                //console.log('scrolling above image');
                navbar.classList.add('bg-nav-2');
            }else {
                navbar.classList.remove('bg-nav-2');
            }
        }
        else {
            navbar.classList.remove('bg-nav');
        }
}

/***************************BANNER IMAGE CHANGE FUNCTIONALITY***********************/
let bannerImages = [
    'img/exibit.jpg',
    'img/nissan.jpg',
    'img/nissanStaff.jpg',
    'img/foton.jpg',
    'img/stallone.jpg',
    'img/stalloneStaff.jpg',
    'img/Autoshow1.jpg',
    'img/Autoshow2.jpg',
    'img/Autoshow3.jpg',
    'img/driveTour1.jpg',
    'img/driveTour3.jpg',
    'img/driveTour4.jpg',
    'img/driveTour5.jpg',
    // 'img/bikers.jpg',
    'img/bikes.jpg',
    'img/jaguar.jpg',
    'img/group.jpg',
    'img/movieNight1.jpg',
    'img/movieNight2.jpg'
];

let imageTimeCount = 0;
let changeImage = ()=>{
    banner.style.backgroundImage = `linear-gradient(rgba(0,0,0, 0.7), rgba(42, 40, 40, 0.664)), url(${bannerImages[imageTimeCount]})`;
    imageTimeCount++;

    if(imageTimeCount === bannerImages.length){
        imageTimeCount = 0;
    }
}
setInterval(changeImage, 6000);


                    /**************MODAL CONTENTS**************/
// Service modal content
const services = [
    `<h2>Vehicle Sales</h2>
    <p>
        Flynt Automobile is into 
        the sales of pre-owned vehicles from 
        individual vehicle owners, institutions and car 
        delarships. The company 
        also provides vehicle sales 
        agency services for various car dealerships.
    </p>`,

    `<h2>Product Promotion</h2>
    <p>
        Flynt Automobile provides product 
        promotion services for automobile 
        dealerships with regards 
        to spare parts and vehicles
    </p>
    `,

    `<h2>Consultancy</h2>
    <p>
        Flynt automobile provides consultancy
        on vehicle purchases, vehicle repairs and 
        other automobile related services.
    </p>`,

    `<h2>Automobile projects</h2>
    <p>
        Flynt automobile provides automobile 
        services as third party contractors
        such as fairs, marketing, product
        education for organizations, agencies
        and other corporate entities.
    </p>`
]

//Event modal content
const flyntAutoEvent = [
    `
        The past three editions of Taadi Street 
        Auto Show had street 
        processions and Drive Tour with 
        the aim of promoting tourism in Western Region thus 
        creating the avenue for car and bike 
        lovers to show off, and to socialize 
        among the general public. This year's 
        drive tour is a sub event in the
        <span>FAE_22</span> series of events and we look forward 
        to a more wonderful experience than that of last year. Join us 
        as we cover a distance of 153km on the N1 Stretch.
        Follow our social media pages <a href="https://www.facebook.com/100895504973348/posts/pfbid02BfFCYGYTM8uDQej4FutRfnvLRNfYkwzguypb1tCsYQvNvqMCvdcgbWYbbLdBpYNPl/?d=n">@flyntauto</a> and 
        <a href="https://twitter.com/TaadiSAS">@TaadiSAS</a> for more information
    `,

    `   The Ghanaian automobile industry is one of the
        fastest growing industries in Africa, yet the
        infrastructure and over vital services have
        not caught up with the demand. As a result,
        more vehicles are shipped in from Europe and
        other countries. The Ride Summit will be a 
        platform for major industry players to have a
        conversation about the Ghanaian automobile industry.
        Follow our social media pages <a href="https://www.facebook.com/100895504973348/posts/pfbid02BfFCYGYTM8uDQej4FutRfnvLRNfYkwzguypb1tCsYQvNvqMCvdcgbWYbbLdBpYNPl/?d=n">@flyntauto</a> and 
        <a href="https://twitter.com/TaadiSAS">@TaadiSAS</a> for more information 
        #FAE22 #FAS #TaadiSAS22
    `,

    `   Connecting auto brands and consumers have been
        a major goal for the Flynt Auto series of events
        over the years. Flynt Auto Show is an automotive
        fair that showcases various car brands and auto
        innovations across Ghana to consumers. The fair
        kicks off in Accra this year and move on
        to other cities as part of this year's series.
        Follow our social media pages <a href="https://www.facebook.com/100895504973348/posts/pfbid02BfFCYGYTM8uDQej4FutRfnvLRNfYkwzguypb1tCsYQvNvqMCvdcgbWYbbLdBpYNPl/?d=n">@flyntauto</a> and 
        <a href="https://twitter.com/TaadiSAS">@TaadiSAS</a> for more information
        of events. #FAE22 #FAS #TaadiSAS22
    `,

    `
        TaadiSAS has been the flagship event of the Flynt Auto
        Events for the past 3 years. This year, it will be
        bigger and packed with more activities for a whole
        week. TaadiSAS 2022 will be a weeklong car festival,
        featuring an auto exhibition show, games, photography,
        music and food. The festival will include car-themed
        activities for car enthusiasts, corporate bodies,
        families and individuals. You can’t afford to miss this
        Get ready!
        Follow our social media pages <a href="https://www.facebook.com/100895504973348/posts/pfbid02BfFCYGYTM8uDQej4FutRfnvLRNfYkwzguypb1tCsYQvNvqMCvdcgbWYbbLdBpYNPl/?d=n">@flyntauto</a> and 
        <a href="https://twitter.com/TaadiSAS">@TaadiSAS</a> for more information
        #FAE22 #FAS #TaadiSAS22
    `
];

                    /***************** MODAL TOGGLE FUNCTIONALITY ****************/
// services modal                    
showMore.forEach(el => {
    el.addEventListener('click', (e)=>{
        // Rendering service content dynamically into one single html modal container
        if(e.target.classList.contains('vehicle__sales')){
            //console.log("you clicked on vehicle sales")
            modalContent.innerHTML = services[0];
        } else if(e.target.classList.contains('product__promo')){
            //console.log("you clicked on Auto-tech solutions")
            modalContent.innerHTML = services[1];
        }else if(e.target.classList.contains('auto__consult')){
            //console.log("you clicked on consultancy")
            modalContent.innerHTML = services[2];
        }else if(e.target.classList.contains('auto__project')){
            //console.log("you clicked on product promotion")
            modalContent.innerHTML = services[3];            
        }
        modal.style.display = 'block';
    });
});

// Event modal
flyntEvent.forEach(fae =>{
    fae.addEventListener('click', (e)=>{
        // Rendering Event content dynamically into one single html modal container
        if(e.currentTarget.classList.contains('driveTour')){
            //console.log('you clicked drivetour')
            eventModal.firstElementChild.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d601940.5639235179!2d-2.5402654910003672!3d5.230455939725654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0xfe77915a7a38941%3A0x5a5d3ee955695cfa!2sTakoradi%20Mall%2C%20Independence%20Avenue%2C%20Takoradi!3m2!1d4.9074556!2d-1.7701376!4m5!1s0xfc2b0a49bbb2e55%3A0xebd3d31c982ab3be!2s7C7C%2B782%20Ankasa%20Game%20Reserve%20%26%20Nini-Suhien%20National%20Park%2C%20Nkwanda!3m2!1d5.2631365!2d-2.5792482!5e1!3m2!1sen!2sgh!4v1662795332938!5m2!1sen!2sgh");
            eventModalContent.firstElementChild.innerHTML = flyntAutoEvent[0];
        } else if(e.currentTarget.classList.contains('rideSumit')){
            //console.log('you clicked on ride sumit');
            eventModal.firstElementChild.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d293.75752196008074!2d-0.17241973593691362!3d5.558306536992567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf90743d2a860d%3A0x2b87c68c7f2cef91!2sImpact%20Hub%20Accra%20-%201AAP!5e1!3m2!1sen!2sgh!4v1663169748299!5m2!1sen!2sgh");
            eventModalContent.firstElementChild.innerHTML = flyntAutoEvent[1];
        } else if(e.currentTarget.classList.contains('flyntAutoShow')){
            //console.log('you clicked on Flynt auto show');
            eventModal.firstElementChild.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18797.902895103598!2d-0.2411386!3d5.6384792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28150c4463c0d554!2sAchimota%20Mall!5e1!3m2!1sen!2sgh!4v1663178028851!5m2!1sen!2sgh");
            
            eventModalContent.firstElementChild.innerHTML = flyntAutoEvent[2];
        } else if(e.currentTarget.classList.contains('TadiSas')){
            //console.log('you clicked on Tadisas');
            eventModal.firstElementChild.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18820.051216762466!2d-1.7701376!3d4.9074556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a5d3ee955695cfa!2sTakoradi%20Mall!5e1!3m2!1sen!2sgh!4v1663178354940!5m2!1sen!2sgh");
            eventModalContent.firstElementChild.innerHTML = flyntAutoEvent[3];
        }
        eventModalContainer.style.display = 'block';
    });
});

/*********CLICK AND KEYPRESS EVENTS THAT HIDES THE MODAL*********/

hideModal.addEventListener('click', ()=>{
    modal.style.display = 'none';
});
window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
        modal.style.display = 'none';
    }
});

hideEventModal.addEventListener('click', ()=>{
    eventModalContainer.style.display = 'none';
});
window.addEventListener('keydown', (e)=>{
    if(e.key === 'Escape'){
        eventModalContainer.style.display = 'none';
    }
});

                    /****************COUTNDOWN TO EVENT******************/
//automatically rendering FAE'23' PER based on current year
let faeYear = document.querySelector('.fae-year');
let eventYear = currentYear.toString().slice(2);
faeYear.textContent = eventYear;
// console.log(typeof(eventYear))

const countDown = () => {
    const dateCounter = new Date(`December 1, ${currentYear} 00:00:00`).getTime();
    const now = new Date().getTime();
    const gap = dateCounter - now;

    // Working with time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
    
    // calculate the time difference
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);
    //console.log(textDay)

    document.querySelector('.day').innerText = textDay;
    document.querySelector('.hour').innerText = textHour;
    document.querySelector('.minute').innerText = textMinute;
    document.querySelector('.second').innerText = textSecond;

    let unit = document.querySelectorAll('.unit');
    //let eventTime = document.querySelectorAll('.day,.hour,.minute,.second');
    let countDownContainer = document.querySelector('.countdown');
    
    // let timeValue = [];
    let timeUnit = [];

    // eventTime.forEach((time) => {
    //     timeValue.push(time.textContent);
    // });
//console.log(timeValue)
    unit.forEach((text) => {
        timeUnit.push(text.textContent);
    });
    

// html code that gets parsed or injected into a countdown container on the html page
    let html = `

        <div class="container-day">
            <h3 class="day">${textDay}</h3>
            <h3 class="unit">${timeUnit[0]}</h3>
        </div>
        <div class="container-hour">
            <h3 class="hour">${textHour}</h3>
            <h3 class="unit">${timeUnit[1]}</h3>
        </div>
        <div class="container-minute">
            <h3 class="minute">${textMinute}</h3>
            <h3 class="unit">${timeUnit[2]}</h3>
        </div>
        <div class="container-second">
            <h3 class="second">${textSecond}</h3>
            <h3 class="unit">${timeUnit[3]}</h3>
        </div>
    
    `;

    countDownContainer.innerHTML = html;
}

setInterval(countDown, 1000);


                    /**************updating the footer to the current year**************/
footerYear.textContent = currentYear;

//node_modules/.bin/babel script.js -o bundle.js
