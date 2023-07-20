const toggleBtn = document.querySelector(".toggle-btn");
const headerNav = document.querySelector(".header-nav");
const headerNavItems = document.querySelectorAll(".header-nav-item");
const toggleMode = document.querySelector(
  '#toggle-mode input[type="checkbox"]'
);
const body = document.querySelector("body");
const mainSections = document.querySelector("main");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".header-nav-item a");
const hero = document.querySelector(".hero");
const showMoreButton = document.getElementById("show-more-button");
const screenSize = window.innerWidth;


// form field clearance 
function clearFormFields() {
  setTimeout(function() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }, 2000); 
}


// Function to toggle the body class between light-mode and dark-mode
function toggleBodyClass() {
  body.classList.toggle("light-mode");
  body.classList.toggle("dark-mode");
  mainSections.classList.toggle("light-mode");
  mainSections.classList.toggle("dark-mode");
}

toggleBtn.addEventListener("click", () => {
    headerNav.classList.toggle("open");
  // if (screenSize < 768) {
  // }
});


// Event listener for closing the header navigation when a navigation item is clicked
headerNav.addEventListener("click", (event) => {
  if (event.target.matches(".header-nav-item a")) {
    headerNav.classList.remove("open");
  }
});
headerNavItems.forEach((item) => {
  item.addEventListener("click", () => {
    headerNav.classList.remove("open");
     if (screenSize < 768) {
      headerNav.classList.remove("open");
    }
  });
});

toggleMode.addEventListener("click", toggleBodyClass);

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    navLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
    hero.style.display = "none";
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);
    sections.forEach((section) => (section.style.display = "none"));
    targetSection.style.display = "block";

    // if (screenSize < 768) {
    //   headerNav.classList.remove("open");
    // }
  });
});

const homeLink = document.querySelector('a[href="#home"]');
homeLink.addEventListener("click", (event) => {
  event.preventDefault();
  hero.style.display = "block";
});



function setInitialView() {
  sections.forEach((section) => {
    section.style.display = "none";
  });
  hero.style.display = "block";
  navLinks.forEach((link) => {
    link.classList.remove("active");
  });
  homeLink.classList.add("active");
}

window.addEventListener("load", () => {
  hero.style.display = "block";
  setInitialView();
});






// JavaScript code to implement the slideshow functionality for hero
const slides = document.querySelectorAll('.hero-slide');
let startSlide = 0;

function showSlide(slideIndex) {
  slides.forEach((slide) => {
    slide.classList.remove('active');
  });

  slides[slideIndex].classList.add('active');
}

function nextSlide() {
  startSlide = (startSlide + 1) % slides.length;
  showSlide(startSlide);
}
let slideshowInterval;

function startSlideshow() {
  slideshowInterval = setInterval(nextSlide, 3500);
}

function stopSlideshow() {
  clearInterval(slideshowInterval);
}

startSlideshow();









// Array to store project details
let projects = [
  {
    imageSrc: 'images/ccapp.jpg',
    title: 'Currency Conversion',
    description: 'HTML, CSS/SCSS, JavaScript ExchangeRate API Goldapi.io',
    link: 'https://codepen.io/rkgith01/pen/LYXbQMP'
  },
  {
  imageSrc: 'images/imggalapp.jpg',
  title: 'Image Gallery App',
  description: 'REACT-JS, HTML, CSS/SCSS, Unsplash API',
  link: '#todo on github',
  link: '#'
  },
  {
    imageSrc: 'images/dogbreedapp.jpg',
    title: 'Dog breed\'s',
    description: 'HTML, CSS/SCSS, JavaScript dogceo API',
    link: 'https://codepen.io/rkgith01/pen/WNYxzXq'
  },
  {
    imageSrc: 'images/horseapp.jpg',
    title: 'Horse Race Game',
    description: 'HTML, CSS/SCSS, JavaScript, Horse Race Game',
    link: '#todo on github'
  },
    {
    imageSrc: 'images/ipcapp.jpg',
    title: 'Iphone calculator',
    description: 'Javascript, HTML, Bootstrap, CSS/SCSS',
    link: 'https://codepen.io/rkgith01/pen/LYgKbOp'
  },
    {
    imageSrc: 'images/plpapp.jpg',
    title: 'Product Landing Page',
    description: 'Bootstrap, HTML, JavaScript, CSS',
    link: 'https://codepen.io/rkgith01/pen/bGQWgpw'
  },
    {
    imageSrc: 'images/todoapp.jpg',
    title: 'Todo List App',
    description: 'Javascript-Bootstrap-CSS/SCSS',
    link: 'https://codepen.io/rkgith01/pen/oNarzGm'
  },
    {
    imageSrc: 'images/ttpapp.jpg',
    title: 'Tribute Page',
    description: 'HTML, CSS/SCSS',
    link: 'https://codepen.io/rkgith01/pen/gOxYRLW'
  },
    {
    imageSrc: 'images/txcapp.jpg',
    title: 'Tax calculator',
    description: 'Bootstrap, JavaScript, CSS/SCSS',
    link: 'https://codepen.io/rkgith01/pen/VwVbove'
  },
    {
    imageSrc: 'images/portfolioapp.jpg',
    title: 'Portfolio Page',
    description: 'Bootstrap, JavaScript, CSS',
    link: 'https://codepen.io/rkgith01/pen/dyQZGJE'
  },
  
];

// Variables to track slide navigation
let currentSlide = 1;
let slidesPerPage = 3;
let totalSlides = Math.ceil(projects.length / slidesPerPage);

// Function to create a project slide element
function createProjectSlide(project) {
  let slide = document.createElement('div');
  slide.classList.add('project-slide');

  let img = document.createElement('img');
  img.src = project.imageSrc;
  img.alt = project.title;
  img.classList.add('project-image');
  slide.appendChild(img);

  let title = document.createElement('h3');
  title.classList.add('project-title');
  title.textContent = project.title;
  slide.appendChild(title);

  let description = document.createElement('p');
  description.classList.add('project-description');
  description.textContent = project.description;
  slide.appendChild(description);

  let link = document.createElement('a');
  link.href = project.link;
  link.classList.add('project-link');
  link.textContent = 'View Project';
  slide.appendChild(link);

  return slide;
}

// Function to render project slides
function renderProjectSlides(startIndex, endIndex) {
  let slidesContainer = document.querySelector('.project-slides');
  slidesContainer.innerHTML = '';

  for (let i = startIndex; i < endIndex; i++) {
    if (i >= projects.length) break;

    let project = projects[i];
    let slide = createProjectSlide(project);
    slidesContainer.appendChild(slide);
  }
}

// Function to navigate to the previous or next slide
function navigateSlides(n) {
  currentSlide += n;
  if (currentSlide < 1) currentSlide = totalSlides;
  if (currentSlide > totalSlides) currentSlide = 1;
  let startIndex = (currentSlide - 1) * slidesPerPage;
  let endIndex = startIndex + slidesPerPage;
  renderProjectSlides(startIndex, endIndex);
  updateSlideCount();
}

// Function to update the slide count display
function updateSlideCount() {
  let currentSlideElem = document.getElementById('current-slide');
  currentSlideElem.textContent = currentSlide;

  let totalSlidesElem = document.getElementById('total-slides');
  totalSlidesElem.textContent = totalSlides;
}

// Event listener for load more button
showMoreButton.addEventListener('click', function() {
  slidesPerPage += 3;
  totalSlides = Math.ceil(projects.length / slidesPerPage);
  navigateSlides(0);

  if (slidesPerPage >= projects.length) {
    showMoreButton.textContent = "All Slides Shown";
    updateSlideCount();
    showMoreButton.disabled = true; // Disable the button when all slides are shown
  }
});

// Function to reset the project slides
function resetSlides() {
  slidesPerPage = 3;
  totalSlides = Math.ceil(projects.length / slidesPerPage);
  currentSlide = 1;
  renderProjectSlides(0, slidesPerPage);
  updateSlideCount();
  showMoreButton.textContent = "Show more";
  showMoreButton.disabled = false; // Enable the button
}

// Event listener for reset button
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetSlides);

// Initialize slides
renderProjectSlides(0, slidesPerPage);
updateSlideCount();






// about section
// Add event listener to the "Load More" button
document.addEventListener("DOMContentLoaded", function() {
  const aboutslides = document.querySelectorAll(".about-slide");
  let currentSlide = 0;

  function showSlide(index) {
    aboutslides.forEach((slide) => slide.classList.remove("show"));
    aboutslides[index].classList.add("show");
    aboutslides[index].style.opacity = "0";
    setTimeout(function() {
      aboutslides[index].style.opacity = "1";
    }, 10);
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % aboutslides.length;
    showSlide(currentSlide);
  }

  const loadMore = document.getElementById("loadMore");
  loadMore.addEventListener("click", nextSlide);

  showSlide(currentSlide);
});

// Store the data for the about slides
// const aboutSlides = [
//   {
//     imgUrl: "https://images.unsplash.com/photo-1688716290016-43c62a58b9f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5MHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
//     alt: "Passion Image",
//     heading: "Inspiring and Motivated",
//     content: "Hello there! I'm [Candidate's Name], a business professional turned IT software developer, and I'm here to bring a fresh perspective to your team."
//   },
//   {
//     imgUrl: "https://images.unsplash.com/photo-1688750771915-64047b2aad5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
//     alt: "Impact Image",
//     heading: "Passionate and Experienced",
//     content: "With a solid background in supply chain and logistics, I've made the exciting transition into web development. My skill set includes HTML, Bootstrap, CSS/SCSS, and JavaScript, and I've even completed two certifications on freecodecamp.",
//     button: {
//       text: "Front End Web Development",
//       url: null,
//     },
//     button: {
//       text: "JavaScript & Data Sctructures and Algorithms",
//       url: null,
//     }
//   },
//   // {
//   //   imgUrl: "https://images.unsplash.com/photo-1689014828513-cccf1b20ff21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
//   //   alt: "Candidate's Image",
//   //   heading: "Jaw-dropping Achievements",
//   //   content: "What sets me apart is not just my technical expertise, but also my enthusiasm for teamwork and remote collaboration. I believe that the best results come from fostering a positive and inclusive environment, even when working from a distance. I thrive on working alongside talented individuals who challenge and inspire me.",
//   //   button: {
//   //     text: "Contact Me",
//   //     url: "#contact" // Example URL for the button
//   //   }
//   // }
// ];

// // Function to create an about slide element
// function createAboutSlide(slideData) {
//   const aboutSlideDiv = document.createElement("div");
//   aboutSlideDiv.classList.add("about-slide");

//   const img = document.createElement("img");
//   img.src = slideData.imgUrl;
//   img.alt = slideData.alt;
//   aboutSlideDiv.appendChild(img);

//   const aboutSlideContent = document.createElement("div");
//   aboutSlideContent.classList.add("about-slide-content");

//   const heading = document.createElement("h2");
//   heading.textContent = slideData.heading;
//   aboutSlideContent.appendChild(heading);

//   const content = document.createElement("p");
//   content.textContent = slideData.content;
//   aboutSlideContent.appendChild(content);

//   if (slideData.button) {
//     const button = document.createElement("a");
//     button.textContent = slideData.button.text;
//     if (slideData.button.url.startsWith("#")) {
//       // Handle hash navigation
//       button.href = slideData.button.url;
//       button.addEventListener("click", function (event) {
//         event.preventDefault();
//         const targetId = button.getAttribute("href").substring(1);
//         const targetElement = document.getElementById(targetId);
//         if (targetElement) {
//           targetElement.scrollIntoView({ behavior: "smooth" });
//         }
//       });
//     } else {
//       // Handle regular URL navigation
//       button.href = slideData.button.url;
//       button.target = "_blank";
//     }
//     aboutSlideContent.appendChild(button);
//   }

//   aboutSlideDiv.appendChild(aboutSlideContent);

//   return aboutSlideDiv;
// }

// // Function to append about slides to the container
// function appendAboutSlides(container, slides) {
//   slides.forEach(function(slideData) {
//     const aboutSlide = createAboutSlide(slideData);
//     container.appendChild(aboutSlide);
//   });
// }

// const aboutSlideContainer = document.querySelector(".about-slide-container");
// const loadMoreButton = document.getElementById("loadMore");

// // Append the initial about slides
// appendAboutSlides(aboutSlideContainer, aboutSlides);


