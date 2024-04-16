const topBanner = document.querySelector(".top-banner");
const topBannerClose = document.querySelector(".top-banner-close");
topBannerClose.addEventListener("click", () => {
  topBanner.classList.add("d-none");
});

function showTimeHeader() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  let time = `${hours}:${minutes}:${seconds}`;
  document.querySelector(".showclockHeader").innerHTML = time;
}
setInterval(showTimeHeader, 1000);

/**
 * Navbar links
 */
const hideNavbar = document.querySelector("#navbarSupportedContent");
function services() {
  event.preventDefault();
  const element = document.getElementById("services");
  element.scrollIntoView();
  hideNavbar.classList.remove("show");
}
function workSample() {
  event.preventDefault();
  Swal.fire({
    icon: "info",
    title: "در حال توسعه هستیم...",
    text: "این قسمت در آینده تکمیل شده و به وبسایت افزوده می شود.",
    confirmButtonText: "باشه",
    confirmButtonColor: "#FF9900",
    showCloseButton: true,
  });
  hideNavbar.classList.remove("show");
}
function ourTeam() {
  event.preventDefault();
  const element = document.getElementById("ourTeam");
  element.scrollIntoView();
  hideNavbar.classList.remove("show");
}
function contactUs() {
  event.preventDefault();
  const element = document.getElementById("contact-us");
  element.scrollIntoView();
  hideNavbar.classList.remove("show");
}
function counseling() {
  event.preventDefault();
  const element = document.getElementById("counselingForm");
  element.scrollIntoView();
  hideNavbar.classList.remove("show");
}

/**
 *  Hedaer progress bar - When the user scrolls the page, execute userScrolls() Function
 */
function userScrolls() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

/**
 * Typing effect hero title
 */
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["فروشگاهی", "شرکتی", "شخصی", "پزشکی", "آموزشی", "وکالت"];
const typingDelay = 170;
const erasingDelay = 100;
const newTextDelay = 1500; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}
function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// cokie alert
function cookieAlarm() {
  Swal.fire({
    imageUrl: "./assets/img/cookie/cookieicon.png",
    imageWidth: 100,
    imageHeight: 100,
    imageAlt: "Custom image",
    title: "اطلاعیه",
    text: "ما از کوکی ها برای بهبود تجربه شما در وب سایتمان استفاده می کنیم. با مرور این وب سایت، شما با استفاده از کوکی ها موافقت می کنید.",
    confirmButtonText: "باشه",
    confirmButtonColor: "#FF9900",
    showCloseButton: true,
    footer:
      '<a href="https://policies.google.com/technologies/cookies?hl=fa" target="_blank">مطالعه بیشتر در رابطه با کوکی ها</a>',
  });
}
// setTimeout(cookieAlarm, 2000);

/**
 * Send pm on whatsapp - popup button
 */
const whatsappIcon = document.querySelector(".whatsapp-icon");
const whatsappForm = document.querySelector(".whatsapp-form");
whatsappIcon.addEventListener("click", () => {
  whatsappForm.classList.toggle("d-none");
});
function sendMessageWhatsapp() {
  const from = document.querySelector(".whatsapp-form");
  const input = document.querySelector(".whatsapp-input");
  from.addEventListener("submit", (e) => {
    e.preventDefault();
    let inputValue = input.value;
    const url = `whatsapp://send?phone=+989150716114&text=${inputValue} - ارسال از سایت`;
    window.open(url);

    whatsappForm.classList.add("d-none");
  });

  const closeBtn = document.querySelector(".whatsapp-close-btn");
  closeBtn.addEventListener("click", () => {
    whatsappForm.classList.add("d-none");
  });
}
sendMessageWhatsapp();

function timerShowPopup() {
  if (whatsappForm.classList != "d-none") {
    whatsappForm.classList.remove("d-none");
  }
}
setTimeout(timerShowPopup, 10000);

/**
 * Back to top button - When the user scrolls down 20px from the top of the document, show the button
 */
let mybutton = document.getElementById("topbtn");
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/**
 * When the user clicks on the button, scroll to the top of the document
 */
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// onscroll function
window.onscroll = function () {
  userScrolls();
  scrollFunction();
};

/**
 * read More And Less Button
 */
function readMoreAndLessBtn() {
  const dots = document.getElementById("dots");
  const moreText = document.getElementById("more");
  const btnText = document.getElementById("read-more-button");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "مشاهده بیشتر&#128071;";
    moreText.style.display = "none";

    const importanceSection = document.getElementById("importance");
    importanceSection.scrollIntoView();
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "مشاهده کمتر&#128070;";
    moreText.style.display = "inline";
  }
}

/**
 * contact us - whatsapp link
 */
const from = document.querySelector("#form");
const input = document.querySelector("#whatsapp-input");
const option = document.querySelector("#option");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputValue = input.value;
  let optionValue = option.value;
  const url = `whatsapp://send?phone=+989205664202&text=${inputValue} - ${option.value} - ارسال از سایت`;
  window.open(url);
});
optionValue = "";

/**
 * clock in hero section
 */
function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  seconds = seconds < 10 ? `0${seconds}` : seconds;
  let time = `${hours}:${minutes}:${seconds}`;
  document.querySelector(".showclock").innerHTML = time;
}
setInterval(showTime, 1000);