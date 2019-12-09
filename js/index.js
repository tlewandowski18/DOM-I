const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const navLinks = document.querySelectorAll('header nav a');
const navLinksArr = Array.from(navLinks);
for (let i = 0; i < 6; i++){
  navLinksArr[i].textContent = siteContent['nav'][`nav-item-${i+1}`]
};

const titleHeading = document.querySelector('.cta .cta-text h1');

titleHeading.innerHTML = siteContent.cta.h1;

const titleButton = document.querySelector('.cta-text button');

titleButton.textContent = siteContent.cta.button;

const titleImg = document.getElementById('cta-img');
titleImg.src = siteContent.cta["img-src"];

const contentSubheadings = document.querySelectorAll('.text-content h4');

const mainContentKeys = Object.keys(siteContent["main-content"]);

const h4Keys = mainContentKeys.filter(key => key.includes('h4'));



const contentText = document.querySelectorAll('.text-content p');

const contentKeys = mainContentKeys.filter(key => key.includes('-content'));

for (let i = 0; i < h4Keys.length ; i++) {
  contentSubheadings[i].textContent = siteContent["main-content"][`${h4Keys[i]}`];
  contentText[i].textContent = siteContent["main-content"][`${contentKeys[i]}`];
}

const middleImg = document.getElementById('middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

const contactKeys = Object.keys(siteContent.contact);

const contactElements = document.querySelectorAll('.contact > *');

for (let i = 0; i < contactKeys.length; i++) {
  contactElements[i].textContent = siteContent.contact[contactKeys[i]];
}

const footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;
