/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
// comment
const navigationBar = document.querySelector('#navbar__list');
// comment
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

const navigationBuilder = () => {

    let navContent = '';
    // comment
        for (let i = 0; i < sections.length; i++) {
            const sectionId = sections[i].id;
            const sectionDataNav = sections[i].dataset.nav;
    
            navContent = navContent + `<li><a class="menu__link" href="#${sectionId}">${sectionDataNav}</a></li>`;    
        }
        // comment
        navigationBar.innerHTML = navContent;
};

navigationBuilder();


// /**
//  * End Main Functions
//  * Begin Events
//  * 
// */

// // Build menu 

// // Scroll to section on link click

// // Set sections as active
const box1 = document.getElementById('section1');
window.addEventListener('scroll', function () {
    if (box1.getBoundingClientRect().top < 150 && box1.getBoundingClientRect().top >= -150) {
        box1.className = 'activeClass';
    } else {
        box1.className = 'your-active-class';
    }
})

const box2 = document.getElementById('section2');
window.addEventListener('scroll', function () {
    if (box2.getBoundingClientRect().top < 150 && box2.getBoundingClientRect().top >= -150) {
        box2.className = 'activeClass';
        box1.className = 'your-active-class';
    } else {
        box2.className = 'your-active-class';
    }
})

const box3 = document.getElementById('section3');
window.addEventListener('scroll', function () {
    if (box3.getBoundingClientRect().top < 150 && box3.getBoundingClientRect().top >= -150) {
        box3.className = 'activeClass';
        box2.className = 'your-active-class';
    } else {
        box3.className = 'your-active-class';
    }
})

const box4 = document.getElementById('section4');
window.addEventListener('scroll', function () {
    if (box4.getBoundingClientRect().top < 150 && box4.getBoundingClientRect().top >= -150) {
        box4.className = 'activeClass';
        box3.className = 'your-active-class';
    } else {
        box4.className = 'your-active-class';
    }
})