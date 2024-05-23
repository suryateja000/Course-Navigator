document.addEventListener('DOMContentLoaded', function() {
      const topicLinks = document.querySelectorAll('nav a');
      const topics = document.querySelectorAll('.topic');

      topicLinks.forEach(function(link) {
        link.addEventListener('click', function(event) 
      {
          event.preventDefault();
          const selectedTopic = this.dataset.topic;
          topics.forEach(function(topic) {
            topic.classList.remove('active');
          });
          document.getElementById(selectedTopic).classList.add('active');
        });
      });
    });
    function replaceOptions(option) {
        let optionsHTML = '';
        switch(option) {
            case 'subjects':
                optionsHTML += '<button onclick="replaceOptions(\'maths\')">Maths</button>';
                optionsHTML += '<button onclick="replaceOptions(\'physics\')">Physics</button>';
                optionsHTML += '<button onclick="replaceOptions(\'chemistry\')">Chemistry</button>';
                break;
            case 'physics':
                optionsHTML += '<button onclick="openClass(\'experimental\')">Experimental Skills</button>';
                optionsHTML += '<button onclick="openClass(\'understanding\')"> Basic Concepts</button>';
                optionsHTML += '<button onclick="openClass(\'critical\')">Critical Thinking</button>';
                break;
            case 'maths':
                optionsHTML += '<button onclick="openClass(\'arithmetic\')">Arithmetic Operation</button>';
                optionsHTML += '<button onclick="openClass(\'design\')">design analysis</button>';
                optionsHTML += '<button onclick="openClass(\'logical\')">Logical Reasoning</button>';
                break;
            case 'chemistry':
                optionsHTML += '<button onclick="openClass(\'laboratory\')">Laboratory Skills</button>';
                optionsHTML += '<button onclick="openClass(\'analytical\')">Analytical Skill</button>';
                optionsHTML += '<button onclick="openClass(\'chemical\')">Chemical reaction</button>';
                break;
            case 'movies':
                optionsHTML += '<button onclick="openClass(\'editing\')">Editing</button>';
                optionsHTML += '<button onclick="openClass(\'music\')">Music</button>';
                optionsHTML += '<button onclick="openClass(\'script writing\')">Writing</button>';
                break;
            case 'sports':
                optionsHTML += '<button onclick="openClass(\'tactical skills\')">Tactical Skills</button>';
                optionsHTML += '<button onclick="openClass(\'physical skills\')">Physical Skills</button>';
                optionsHTML += '<button onclick="openClass(\'mental skills\')">Mental Skills</button>';
                break;
        }
        document.getElementById('options').innerHTML = optionsHTML;
    }

    // Corrected function with syntax correction and expanded for readability
    function openClass(course) 
    {
        let courseHTML = '';
        // Checking if course matches any of the three options
        if (['arithmetic', 'logical','mental skills'].includes(course.toLowerCase())) 
        {
            courseHTML += `<div class="dep">
            <img src="images/cse.png" class="crourseimg" alt="back1">
            CSE typically stands for "Computer Science and Engineering." It's an academic discipline that encompasses
            the study of computer systems, software development, algorithms, and computational theory, along with their
            application in various fields. CSE focuses on both the theoretical foundations,software development, research, and more.
    
            <a href="https://en.wikipedia.org/wiki/Computer_science" target="_parent">www.wikipedia</a>
            <a href="https://byjus.com/full-form/cse-full-form/" target="_parent">www.byjus</a>
            
        </div>`;
        }
        if (['arithmetic', 'critical','mentalskills','chemical'].includes(course.toLowerCase())) 
        {
            courseHTML += `<div class="dep">
            <img src="images/ECE.png" class="crourseimg" alt="back1">
            Electronics and Communication Engineering (ECE) is a specialized field that integrates principles from electrical 
            engineering and computer science to design, develop, and maintain electronic systems and communication networks1. 
            It encompasses a wide range of topics including electronics, telecommunications, signal processing, and embedded systems1.
            <a href="https://www.electronicshub.org/" target="_parent">www.electronicshub</a>
            <a href="https://en.wikipedia.org/wiki/Electronic_engineering" target="_parent">www.wikipedia</a>
        </div>`;
        }
        if (['design', 'analytical','tactical skills'].includes(course.toLowerCase())) 
        {
            courseHTML += `<div class="dep">
            <img src="images/MECH.png" class="crourseimg" alt="back1">
            Mechanical Engineering is a branch of engineering that deals with the design, analysis, manufacturing, 
            and maintenance of mechanical systems and processes. It applies principles of physics, mathematics, and 
            materials science to design and produce machinery, devices, structures, and systems that serve various
            purposes.
            <a href="https://en.wikipedia.org/wiki/Mechanical_engineering" target="_parent">www.wikipedia</a>
            <a href="https://www.britannica.com/technology/mechanical-engineering" target="_parent">www.britannica</a>
        </div>`;
        }
        if (['design', 'understanding','laboratory'].includes(course.toLowerCase())) 
        {
            courseHTML += `<div class="dep">
            <img src="images/CIV.png" class="crourseimg" alt="back1">
            Civil Engineering is a branch of engineering that deals with the design, construction, and maintenance
            of the physical and natural built environment. It encompasses a broad range of activities related to infrastructurex
            development, including buildings, bridges, roads, dams, airports, water supply systems, and environmental protection
            measures.
            <a href="https://en.wikipedia.org/wiki/Civil_engineering" target="_parent">www.wikipedia</a>
            <a href="https://www.twi-global.com/technical-knowledge/faqs/what-is-civil-engineering" target="_parent">www.twi-global</a>
        </div>`;
        }
        if (['experimental','critical','laboratory','chemical'].includes(course.toLowerCase())) 
        {
            courseHTML += `<div class="dep">
            <img src="images/EEE.png" class="crourseimg" alt="back1">
            EEE typically stands for "Electrical and Electronics Engineering." It's a branch of engineering that deals with the
            study, design, application, and maintenance of electrical and electronic systems, devices, and equipment.
            <a href="https://unacademy.com/content/full-forms/eee-full-form/" target="_parent">www.unacademy</a>
            <a href="https://www.twi-global.com/technical-knowledge/faqs/what-is-civil-engineering" target="_parent">www.twi-global</a>
        </div>`;
        }
        if (['script writing'].includes(course.toLowerCase())) 
        {
            courseHTML += `<div class="dep">
            <img src="images/Screenwriting-.png" class="crourseimg" alt="back1">
            A Diploma in Screenwriting is an educational program that focuses on teaching students the principles, techniques,
            and skills involved in writing scripts for film, television, and other screen-based media.
            <a href="https://www.actorprepares.net/course/diploma-programme-in-screenwriting/" target="_parent">www.actorprepares</a>
            <a href="https://www.ftii.ac.in/p/film-wing/one-year-pg-certificate-course-in-feature-film-screenplay-writing" target="_parent">www.ftii</a>
        </div>`;
        }
        if (['editing'].includes(course.toLowerCase())) 
        {
            courseHTML += `<div class="dep">
            <img src="images/Bechelor-of-film-and-television.png" class="crourseimg" alt="back1">
            A Bachelor's Degree in Film and Television is an undergraduate program that provides students with comprehensive education and
            training in the theory, production, and industry practices of filmmaking and television production. It typically covers a 
            wide range of topics related to film, television, and media studies, preparing students for careers in various roles within
            the entertainment industry.
            <a href="https://en.wikipedia.org/wiki/Bachelor_of_Film_and_Television" target="_parent">www.wikipedia</a>
            <a href="https://www.cdm.depaul.edu/academics/Pages/BA-in-Film-and-Television.aspx" target="_parent">www.depaul</a>
        </div>`;
        }
        if (['script writing','editing'].includes(course.toLowerCase())) 
        {
            courseHTML += `<div class="dep">
            <img src="images/digital film.png" class="crourseimg" alt="back1">
            A Diploma in Digital Filmmaking is an educational program designed to provide students with practical skills and
            theoretical knowledge in the art and craft of digital filmmaking. This program typically covers various aspects
            of the filmmaking process, from pre-production planning to post-production editing, with a focus on digital
            technologies and techniques.
            <a href="https://www.prasadacademy.com/diploma-in-digital-film-making/" target="_parent">www.prasadacademy</a>
            <a href="https://www.shiksha.com/arts-fine-visual-performing/film-making-chp" target="_parent">www.shiksha</a>
        </div>`;
        }
        if (['music'].includes(course.toLowerCase())) 
        {
            courseHTML += `<div class="dep">
            <img src="images/audio-engineering.png" class="crourseimg" alt="back1">
            A Bachelor's Degree in Sound Engineering is an undergraduate program that focuses on providing students with theoretical knowledge and practical skills in the field of audio production, recording, mixing, and sound design. This degree program typically covers various aspects of sound engineering, including music production, live sound reinforcement, studio recording, post-production for film and television, and audio technology.</p>
            <a href="https://www.educations.com/bachelors-degree/sound-engineering/" target="_parent">www.educations</a>
            <a href="https://smtd.umich.edu/degree/bachelor-of-science-in-sound-engineering/" target="_parent">www.smtd.umich.edu</a>
            </div>`;
        }
        if (['experimental','understanding'].includes(course.toLowerCase())) 
        {
            courseHTML += `<div class="dep">
            <img src="images/phy.png" class="crourseimg" alt="back1">
            Bachelor of Science in Applied Physics is an undergraduate degree course in the science field that deals with the specialization in applied physics.
            <a href=https://engineering.nyu.edu/programs/applied-physics-bs target="_parent">www.engineering.nyu.edu</a>
            <a href=https://targetstudy.com/courses/bsc-applied-physics.htmltarget="_parent">www.targetstudy</a>
            </div> `;
        }
        if (['logical','tactical skills',].includes(course.toLowerCase()))
        {
            courseHTML += `<div class="dep">
            <img src="images/math.png" class="crourseimg" alt="back1">
            A Bachelor of Science (B.Sc) in Mathematics is an undergraduate academic degree program that focuses on the study of mathematical concepts, theories, and applications. It provides students with a solid foundation in various branches of mathematics and prepares them for further study or careers in fields such as education, research, finance, engineering, computer science, and more.
            <a href=https://www.shiksha.com/science/bsc-mathematics-chp target="_parent">www.siksha</a>
            <a href=https://collegedunia.com/courses/bachelor-of-science-bsc-mathematics target="_parent">www.collegedunia</a>
          </div>`;
        }
        if (['physical skills','mental skills','analytical'].includes(course.toLowerCase())) 
        {       
            courseHTML += `<div class="dep">
            <img src="images/physical-education.png" class="crourseimg" alt="back1">
            <p>BA Physical Education or Bachelor of Arts in Physical Education is an Under-Graduate Physical Education course. The Bachelor of Arts in Physical Education degree combines studies in all areas of science related to physical knowledge and abilities, as well as the application of these talents and their outcomes.</p>
            <a href="targetstudy.com/courses/ba-physical-education.html" target="_parent">www.targetstudy</a>
            <a href="https://collegedunia.com/courses/bachelor-of-physical-education-bped" target="_parent">www.collegedunia</a>
                </div>`;
        }
        // Logic for other courses can be added with else if blocks
        // Show the course details
        const courseDetailsDiv = document.getElementById('courseDetails');
        courseDetailsDiv.innerHTML = courseHTML;
        courseDetailsDiv.style.display = 'block';
    }
    const carousel = document.querySelector(".carousel"),
firstImg = carousel.querySelectorAll("img")[0],
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

const showHideIcons = () => {
    // showing and hiding prev/next icon according to carousel scroll left value
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // getting max scrollable width
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14; // getting first img width & adding 14 margin value
        // if clicked icon is left, reduce width value from the carousel scroll left else add to it
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60); // calling showHideIcons after 60ms
    });
});

const autoSlide = () => {
    // if there is no image left to scroll then return from here
    if(carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 || carousel.scrollLeft <= 0) return;

    positionDiff = Math.abs(positionDiff); // making positionDiff value to positive
    let firstImgWidth = firstImg.clientWidth + 14;
    // getting difference value that needs to add or reduce from carousel left to take middle img center
    let valDifference = firstImgWidth - positionDiff;

    if(carousel.scrollLeft > prevScrollLeft) { // if user is scrolling to the right
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    }
    // if user is scrolling to the left
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

const dragStart = (e) => {
    // updatating global variables value on mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to mouse pointer
    if(!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");

    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

document.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

document.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);

function refreshPage() {
    location.reload(); // Reloads the current page
}