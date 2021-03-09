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
        for (section of sections) {
            const sectionId = section.id;
            const sectionDataNav = section.dataset.nav;
    
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
const links = document.querySelectorAll('.navbar__menu a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({behavior: 'smooth', block: "end", inline: "nearest"});
      });
});

// // Set sections as active
sections.forEach(section => {
    window.addEventListener('scroll', function () {
        if (section.getBoundingClientRect().top < 200 && section.getBoundingClientRect().top >= -200) {
            section.className = 'activeClass';
        } else {
            section.className = 'your-active-class';
        }
    })
})


