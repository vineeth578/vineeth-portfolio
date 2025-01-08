// Simple form validation (optional)
// document.getElementById("contact-form").addEventListener("submit", function(event) {
//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let message = document.getElementById("message").value;

//     if (name === "" || email === "" || message === "") {
//         alert("All fields are required!");
//         event.preventDefault();
//     }
// });
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent default form submission
    const confirmation = document.createElement("div");
    confirmation.classList.add("confirmation-message");
    confirmation.textContent = "Thank you! Your message has been sent.";
    document.body.appendChild(confirmation);

    setTimeout(() => {
        confirmation.remove();
    }, 3000); // Remove message after 3 seconds
});

// 
// const toggleTheme = document.createElement("button");
// toggleTheme.textContent = "Toggle Theme";
// toggleTheme.classList.add("theme-toggle");
// document.querySelector("#contact").appendChild(toggleTheme);

// toggleTheme.addEventListener("click", () => {
//     document.getElementById("contact").classList.toggle("dark-mode");
// });
const words = ["a Developer", "a Designer", "a Creator"];
let index = 0;
let letterIndex = 0;

function type() {
    const typingElement = document.querySelector(".typing-animation");
    if (letterIndex < words[index].length) {
        typingElement.textContent += words[index][letterIndex];
        letterIndex++;
        setTimeout(type, 150);
    } else {
        setTimeout(erase, 1000);
    }
}

function erase() {
    const typingElement = document.querySelector(".typing-animation");
    if (letterIndex > 0) {
        typingElement.textContent = words[index].substring(0, letterIndex - 1);
        letterIndex--;
        setTimeout(erase, 100);
    } else {
        index = (index + 1) % words.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", type);
// 
particlesJS("particles-js", {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800,
            },
        },
        color: {
            value: "#ffffff",
        },
        shape: {
            type: "circle",
            stroke: {
                width: 0,
                color: "#000000",
            },
        },
        opacity: {
            value: 0.5,
            random: false,
            anim: {
                enable: false,
            },
        },
        size: {
            value: 3,
            random: true,
            anim: {
                enable: false,
            },
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.4,
            width: 1,
        },
        move: {
            enable: true,
            speed: 6,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
        },
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: true,
                mode: "grab",
            },
            onclick: {
                enable: true,
                mode: "push",
            },
            resize: true,
        },
    },
    retina_detect: true,
});
// smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// back to top
const backToTop = document.getElementById('backToTop');

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
};

backToTop.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
