"use strict";

// "use strict";
/****************** NAVBAR *******************/
var navToggler = document.getElementById('toggle');
var navList = document.getElementById('navList');
var hamburger = document.querySelector('.burger');
var closeBtn = document.querySelector('.close');
var navbar = document.querySelector('.navbar');
var year = document.querySelector('.year');
var heroText = document.querySelector('.text_box');

/***************** BANNER IMAGE RENDERING****************/
var banner = document.querySelector('.main-head');

/***************** MODAL TOGGLE FUNCTIONALITY ****************/
var showMore = document.querySelectorAll('.read-more');
var modal = document.querySelector('.modal-wrapper');
var hideModal = document.querySelector('.modal-close');
var modalContent = document.querySelector('.modal-content');
var flyntEvent = document.querySelectorAll('.fl-auto-event');
var eventModalContainer = document.querySelector('.event-modal-wrapper');
var eventModal = document.querySelector('.event-modal');
var eventModalContent = document.querySelector('.event-modal-content');
var hideEventModal = document.querySelector('.hide-event-modal');
// const textFields = document.querySelector('.message_form');
// const submitBtn = document.querySelector('.submit');

// let p = eventModalContent.firstElementChild.textContent = 'Hey';
// console.log(p)
//console.log()

// submitBtn.addEventListener('click', () => textFields.reset());

var bannerImages = ['img/nissan.jpg', 'img/nissanStaff.jpg', 'img/foton.jpg', 'img/bikers.jpg', 'img/bikes.jpg', 'img/jaguar.jpg', 'img/stallone.jpg', 'img/stalloneStaff.jpg', 'img/group.jpg', 'img/exibit.jpg'];
var imageTimeCount = 0;
var changeImage = function changeImage() {
  banner.style.backgroundImage = "linear-gradient(rgba(0,0,0, 0.7), rgba(42, 40, 40, 0.664)), url(".concat(bannerImages[imageTimeCount], ")");
  imageTimeCount++;
  if (imageTimeCount === bannerImages.length) {
    imageTimeCount = 0;
  }
};
setInterval(changeImage, 5000);
var services = ["<h2>Vehicle Sales</h2>\n    <p>\n        Flynt Automobile is into \n        the sales of pre-owned vehicles from \n        individual vehicle owners, institutions and car \n        delarships. The company \n        also provides vehicle sales \n        agency services for various car dealerships.\n    </p>", "<h2>Auto-Tech Solution</h2>\n    <p>\n        Flynt Automobile provides customized automobile \n        tech solutions for \n        garages and companies \n        with fleet and garages.\n    </p>", "<h2>Consultancy</h2>\n    <p>\n        Flynt automobile provides consultancy\n        on vehicle purchases, vehicle repairs and \n        other automobile related services.\n    </p>", "<h2>Product Promotion</h2>\n    <p>\n        Flynt Automobile provides product \n        promotion services for automobile \n        dealerships with regards \n        to spare parts and vehicles\n    </p>"];
var flyntAutoEvent = ["\n        The past three editions of Taadi Street \n        Auto Show had street \n        processions and Drive Tour with \n        the aim of promoting tourism in Western Region thus \n        creating the avenue for car and bike \n        lovers to show off, and to socialize \n        among the general public. This year's \n        drive tour is a sub event in the\n        <span>FAE_22</span> series of events and we look forward \n        to a more wonderful experience than that of last year. Join us \n        as we cover a distance of 153km on the N1 Stretch.\n        Follow our social media pages <a href=\"https://www.facebook.com/100895504973348/posts/pfbid02BfFCYGYTM8uDQej4FutRfnvLRNfYkwzguypb1tCsYQvNvqMCvdcgbWYbbLdBpYNPl/?d=n\">@flyntauto</a> and \n        <a href=\"https://twitter.com/TaadiSAS\">@TaadiSAS</a> for more information\n    ", "   The Ghanaian automobile industry is one of the\n        fastest growing industries in Africa, yet the\n        infrastructure and over vital services have\n        not caught up with the demand. As a result,\n        more vehicles are shipped in from Europe and\n        other countries. The Ride Summit will be a \n        platform for major industry players to have a\n        conversation about the Ghanaian automobile industry.\n        Follow our social media pages <a href=\"https://www.facebook.com/100895504973348/posts/pfbid02BfFCYGYTM8uDQej4FutRfnvLRNfYkwzguypb1tCsYQvNvqMCvdcgbWYbbLdBpYNPl/?d=n\">@flyntauto</a> and \n        <a href=\"https://twitter.com/TaadiSAS\">@TaadiSAS</a> for more information \n        #FAE22 #FAS #TaadiSAS22\n    ", "   Connecting auto brands and consumers have been\n        a major goal for the Flynt Auto series of events\n        over the years. Flynt Auto Show is an automotive\n        fair that showcases various car brands and auto\n        innovations across Ghana to consumers. The fair\n        kicks off in Accra this year and move on\n        to other cities as part of this year's series.\n        Follow our social media pages <a href=\"https://www.facebook.com/100895504973348/posts/pfbid02BfFCYGYTM8uDQej4FutRfnvLRNfYkwzguypb1tCsYQvNvqMCvdcgbWYbbLdBpYNPl/?d=n\">@flyntauto</a> and \n        <a href=\"https://twitter.com/TaadiSAS\">@TaadiSAS</a> for more information\n        of events. #FAE22 #FAS #TaadiSAS22\n    ", "\n        TaadiSAS has been the flagship event of the Flynt Auto\n        Events for the past 3 years. This year, it will be\n        bigger and packed with more activities for a whole\n        week. TaadiSAS 2022 will be a weeklong car festival,\n        featuring an auto exhibition show, games, photography,\n        music and food. The festival will include car-themed\n        activities for car enthusiasts, corporate bodies,\n        families and individuals. You can\u2019t afford to miss this\n        Get ready!\n        Follow our social media pages <a href=\"https://www.facebook.com/100895504973348/posts/pfbid02BfFCYGYTM8uDQej4FutRfnvLRNfYkwzguypb1tCsYQvNvqMCvdcgbWYbbLdBpYNPl/?d=n\">@flyntauto</a> and \n        <a href=\"https://twitter.com/TaadiSAS\">@TaadiSAS</a> for more information\n        #FAE22 #FAS #TaadiSAS22\n    "];

//Variable that monitors and updates year in the footer to the current year
var currentYear = new Date().getFullYear();

// Hamburger icon toggler
navToggler.addEventListener('click', function () {
  navList.classList.toggle('active');
  //console.log(navList.classList)
  if (navList.classList.contains('active')) {
    // console.log(true)
    heroText.classList.add('fade-banner-text');
  } else {
    //console.log(false)
    heroText.classList.remove('fade-banner-text');
  }

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

// Changing the background color of the navbar on scroll
window.onscroll = function () {
  //if(document.body.scrollTop >= window.innerHeight || document.documentElement.scrollTop >= window.innerHeight){
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    //console.log('scrolling...');
    navbar.classList.add('bg-nav');
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
      //console.log('scrolling above image');
      navbar.classList.add('bg-nav-2');
    } else {
      navbar.classList.remove('bg-nav-2');
    }
  } else {
    navbar.classList.remove('bg-nav');
  }
};

/**************updating the footer to the current year**************/
year.textContent = currentYear;

/***************** MODAL TOGGLE FUNCTIONALITY ****************/
// services modal                    
showMore.forEach(function (el) {
  el.addEventListener('click', function (e) {
    // Rendering service content dynamically into one single html modal container
    if (e.target.classList.contains('vehicle__sales')) {
      //console.log("you clicked on vehicle sales")
      modalContent.innerHTML = services[0];
    } else if (e.target.classList.contains('auto__tech')) {
      //console.log("you clicked on Auto-tech solutions")
      modalContent.innerHTML = services[1];
    } else if (e.target.classList.contains('auto__consult')) {
      //console.log("you clicked on consultancy")
      modalContent.innerHTML = services[2];
    } else if (e.target.classList.contains('product__promo')) {
      //console.log("you clicked on product promotion")
      modalContent.innerHTML = services[3];
    }
    modal.style.display = 'block';
  });
});

// Event modal
flyntEvent.forEach(function (fae) {
  fae.addEventListener('click', function (e) {
    // Rendering Event content dynamically into one single html modal container
    if (e.currentTarget.classList.contains('driveTour')) {
      //console.log('you clicked drivetour')
      eventModal.firstElementChild.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d601940.5639235179!2d-2.5402654910003672!3d5.230455939725654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0xfe77915a7a38941%3A0x5a5d3ee955695cfa!2sTakoradi%20Mall%2C%20Independence%20Avenue%2C%20Takoradi!3m2!1d4.9074556!2d-1.7701376!4m5!1s0xfc2b0a49bbb2e55%3A0xebd3d31c982ab3be!2s7C7C%2B782%20Ankasa%20Game%20Reserve%20%26%20Nini-Suhien%20National%20Park%2C%20Nkwanda!3m2!1d5.2631365!2d-2.5792482!5e1!3m2!1sen!2sgh!4v1662795332938!5m2!1sen!2sgh");
      eventModalContent.firstElementChild.innerHTML = flyntAutoEvent[0];
    } else if (e.currentTarget.classList.contains('rideSumit')) {
      //console.log('you clicked on ride sumit');
      eventModal.firstElementChild.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d293.75752196008074!2d-0.17241973593691362!3d5.558306536992567!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf90743d2a860d%3A0x2b87c68c7f2cef91!2sImpact%20Hub%20Accra%20-%201AAP!5e1!3m2!1sen!2sgh!4v1663169748299!5m2!1sen!2sgh");
      eventModalContent.firstElementChild.innerHTML = flyntAutoEvent[1];
    } else if (e.currentTarget.classList.contains('flyntAutoShow')) {
      //console.log('you clicked on Flynt auto show');
      eventModal.firstElementChild.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18797.902895103598!2d-0.2411386!3d5.6384792!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x28150c4463c0d554!2sAchimota%20Mall!5e1!3m2!1sen!2sgh!4v1663178028851!5m2!1sen!2sgh");
      eventModalContent.firstElementChild.innerHTML = flyntAutoEvent[2];
    } else if (e.currentTarget.classList.contains('TadiSas')) {
      //console.log('you clicked on Tadisas');
      eventModal.firstElementChild.setAttribute('src', "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d18820.051216762466!2d-1.7701376!3d4.9074556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x5a5d3ee955695cfa!2sTakoradi%20Mall!5e1!3m2!1sen!2sgh!4v1663178354940!5m2!1sen!2sgh");
      eventModalContent.firstElementChild.innerHTML = flyntAutoEvent[3];
    }
    eventModalContainer.style.display = 'block';
  });
});

/*********CLICK AND KEYPRESS EVENTS THAT HIDES THE MODAL*********/

hideModal.addEventListener('click', function () {
  modal.style.display = 'none';
});
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    modal.style.display = 'none';
  }
});
hideEventModal.addEventListener('click', function () {
  eventModalContainer.style.display = 'none';
});
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    eventModalContainer.style.display = 'none';
  }
});

/****************COUTNDOWN TO EVENT******************/

var countDown = function countDown() {
  var dateCounter = new Date("December 1, ".concat(currentYear, " 00:00:00")).getTime();
  var now = new Date().getTime();
  var gap = dateCounter - now;

  // Working with time
  var second = 1000;
  var minute = second * 60;
  var hour = minute * 60;
  var day = hour * 24;

  // calculate the time difference
  var textDay = Math.floor(gap / day);
  var textHour = Math.floor(gap % day / hour);
  var textMinute = Math.floor(gap % hour / minute);
  var textSecond = Math.floor(gap % minute / second);
  //console.log(textDay)

  document.querySelector('.day').innerText = textDay;
  document.querySelector('.hour').innerText = textHour;
  document.querySelector('.minute').innerText = textMinute;
  document.querySelector('.second').innerText = textSecond;
  var add_s = document.querySelectorAll('.add-s');
  var eventTime = document.querySelectorAll('.day,.hour,.minute,.second');
  var countDownContainer = document.querySelector('.countdown');
  var timeValue = [];
  var timeUnit = [];
  eventTime.forEach(function (time) {
    timeValue.push(time.textContent);
  });
  //console.log(timeValue)
  add_s.forEach(function (text, index) {
    timeUnit.push(text.textContent);
    timeValue.forEach(function (value) {
      //console.log(value)
      //console.log(value)
    });
  });

  // html code that gets parsed injected into a countdown container on the html page
  var html = "\n\n        <div class=\"container-day\">\n            <h3 class=\"day\">".concat(textDay, "</h3>\n            <h3 class=\"add-s\">").concat(timeUnit[0], "</h3>\n        </div>\n        <div class=\"container-hour\">\n            <h3 class=\"hour\">").concat(textHour, "</h3>\n            <h3 class=\"add-s\">").concat(timeUnit[1], "</h3>\n        </div>\n        <div class=\"container-minute\">\n            <h3 class=\"minute\">").concat(textMinute, "</h3>\n            <h3 class=\"add-s\">").concat(timeUnit[2], "</h3>\n        </div>\n        <div class=\"container-second\">\n            <h3 class=\"second\">").concat(textSecond, "</h3>\n            <h3 class=\"add-s\">").concat(timeUnit[3], "</h3>\n        </div>\n    \n    ");
  countDownContainer.innerHTML = html;
};
setInterval(countDown, 1000);

//node_modules/.bin/babel script.js -o bundle.js
