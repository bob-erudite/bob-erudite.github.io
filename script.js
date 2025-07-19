document.addEventListener("DOMContentLoaded", function() {
  var typed = new Typed("#typed", {
    strings: [
      '<span style="color: #0000FF;"> Web3 Developer</span>',
      '<span style="color: #4cff4c;"> Content Developer</span>',
      '<span style="color: #00FF00;"> AI Automator</span>'


      
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const serviceCards = document.querySelectorAll('.service-card');
  const readMoreButtons = document.querySelectorAll('.read-more-btn');
  
  if (serviceCards.length === 0 || readMoreButtons.length === 0) {
    console.error('Service cards or read more buttons not found in the DOM.');
    return;
  }
  
  // Function to close all cards
  function closeAllCards() {
    serviceCards.forEach(card => {
      card.classList.remove('active');
      const readMoreText = card.querySelector('.read-more-text');
      const readMoreBtn = card.querySelector('.read-more-btn');
      if (readMoreText && readMoreBtn) {
        readMoreText.style.maxHeight = '0';
        readMoreText.style.overflowY = 'hidden';
        readMoreBtn.style.display = 'block';
        // Stop any ongoing auto-scroll
        readMoreText.style.animation = 'none';
        readMoreText.offsetHeight; // Trigger reflow
      } else {
        console.error('Read more text or button not found in a card.');
      }
    });
  }
  
  // Toggle read more text with auto-scroll
  readMoreButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      e.stopPropagation(); // Prevent outside click from triggering immediately
      const card = button.parentElement;
      const readMoreText = card.querySelector('.read-more-text');
      
      if (!card || !readMoreText) {
        console.error('Card or read more text not found.');
        return;
      }
      
      if (card.classList.contains('active')) {
        closeAllCards();
      } else {
        closeAllCards(); // Close any open card
        card.classList.add('active');
        const textHeight = readMoreText.scrollHeight;
        readMoreText.style.maxHeight = `${textHeight}px`;
        readMoreText.style.overflowY = 'auto'; // Enable manual scrolling
        button.style.display = 'none'; // Hide the button when text is shown
        // Trigger auto-scroll animation
        readMoreText.style.animation = 'autoScroll 10s linear infinite';
      }
    });
  });
  
  // Close card when clicking outside
  document.addEventListener('click', (e) => {
    const isClickInsideCard = e.target.closest('.service-card');
    if (!isClickInsideCard) {
      closeAllCards();
    }
  });
});

// Function to create and animate water drops
function createWaterDrops() {
  setTimeout(() => {
    // Create multiple drops at different positions
    for (let i = 0; i < 10; i++) {
      const drop = document.createElement('div');
      drop.className = 'water-drop';
      drop.style.left = `${Math.random() * 100}vw`; // Random horizontal position
      drop.style.animationDuration = `${3 + Math.random() * 2}s`; // Random fall speed (3-5s)
      document.querySelector('.home').appendChild(drop);
      
      // Remove drop after animation to prevent buildup
      drop.addEventListener('animationend', () => drop.remove());
    }
    
    // Recreate drops every 2 seconds for continuous effect
    setInterval(() => {
      for (let i = 0; i < 10; i++) {
        const drop = document.createElement('div');
        drop.className = 'water-drop';
        drop.style.left = `${Math.random() * 100}vw`;
        drop.style.animationDuration = `${3 + Math.random() * 2}s`;
        document.querySelector('.home').appendChild(drop);
        
        drop.addEventListener('animationend', () => drop.remove());
      }
    }, 2000);
  }, 10000); // Start after 10 seconds
}

// Control text card visibility: slide in after 50s, stay for 5s, then hide
function updateTextCard() {
  const textCard = document.querySelector('.text-card');
  textCard.classList.add('active');
  setTimeout(() => {
    textCard.classList.remove('active');
  }, 5000);
}

// Run the text update every 55s (50s delay + 5s display)
setInterval(updateTextCard, 7000);
setTimeout(updateTextCard, 5000); // First appearance after 50s

// Initialize water drops
createWaterDrops();


  document.addEventListener('DOMContentLoaded', () => {
  // Mobile Nav Toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navbar = document.querySelector('.navbar');
  let autoCloseTimeout; // Store timeout for auto-close
  
  if (navToggle && navbar) {
    navToggle.addEventListener('click', () => {
      const isActive = navbar.classList.toggle('active');
      navToggle.classList.toggle('active');
      
      // Clear existing timeout
      clearTimeout(autoCloseTimeout);
      
      // Set auto-close after 15 seconds if opened
      if (isActive) {
        autoCloseTimeout = setTimeout(() => {
          navbar.classList.remove('active');
          navToggle.classList.remove('active');
          console.log('Mobile nav auto-closed after 15 seconds');
        }, 15000); // 15 seconds
      }
    });
    
    // Close nav when clicking a link
    navbar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
        navToggle.classList.remove('active');
        clearTimeout(autoCloseTimeout); // Clear timeout on manual close
      });
    });
  } else {
    console.warn('Nav toggle or navbar not found. Ensure .nav-toggle and .navbar elements exist.');
  }
  })
let formVisible = false;

document.addEventListener('click', function(e) {
  const btn = document.querySelector('.send-message-btn');
  const form = document.querySelector('.contact-form');
  if (btn && form && formVisible) {
    if (!btn.contains(e.target) && !form.contains(e.target)) {
      form.classList.remove('active');
      form.style.display = 'none';
      formVisible = false;
    }
  }
});

document.querySelector('.send-message-btn').addEventListener('click', function(e) {
  e.stopPropagation();
  const form = document.querySelector('.contact-form'); // Target form as sibling
  if (form) {
    if (!formVisible) {
      form.classList.add('active');
      form.style.display = 'block';
      formVisible = true;
    } else {
      form.classList.remove('active');
      form.style.display = 'none';
      formVisible = false;
    }
  }
});


  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const progress = entry.target.querySelector(".progress");
          const targetWidth = progress.getAttribute("data-width");

          progress.style.width = targetWidth;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll(".skill").forEach(skill => {
      const progress = skill.querySelector(".progress");

      // Store the original width and reset it
      const originalWidth = progress.style.width;
      progress.setAttribute("data-width", originalWidth);
      progress.style.width = "0";

      observer.observe(skill);
    });
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const zoomCards = document.querySelectorAll('.scroll-zoom-out');

    const zoomObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 300); // 300ms delay between each card's zoom
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    zoomCards.forEach(card => zoomObserver.observe(card));
  });
  

  document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // remove this line if you want to re-animate on scroll back
        }
      });
    }, {
      threshold: 0.2
    });

    document.querySelectorAll('.scroll-fade-up').forEach(el => {
      observer.observe(el);
    });
  });


const form = document.getElementById('contactForm');
const popup = document.getElementById('success-popup');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent default form submit
  
  const formData = new FormData(form);
  
  fetch("https://formsubmit.co/ajax/boberudite47@gmail.com", {
      method: "POST",
      headers: {
        'Accept': 'application/json'
      },
      body: formData
    })
    .then(response => {
      if (response.ok) {
        form.reset();
        popup.classList.add('show');
        setTimeout(() => {
          popup.classList.remove('show');
        }, 6000);
      } else {
        alert("Error sending message.");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Failed to send message.");
    });
});

const btn = document.getElementById("resumeBtn");
const resume = document.getElementById("resumeContainer");
const content = document.querySelector(".resume-content");
const closeBtn = document.getElementById("closeResume");

// Show with zoom-out effect
btn.onclick = () => {
  resume.classList.remove("hide");
  resume.style.display = "flex";
  setTimeout(() => resume.classList.add("show"), 10);
};

// Hide with zoom-in effect
closeBtn.onclick = () => {
  resume.classList.remove("show");
  resume.classList.add("hide");
  setTimeout(() => {
    resume.style.display = "none";
  }, 900); // match transition time
};

// Also hide if clicked outside
window.onclick = (e) => {
  if (e.target === resume) {
    resume.classList.remove("show");
    resume.classList.add("hide");
    setTimeout(() => {
      resume.style.display = "none";
    }, 400);
  }
};


  function toggleResume() {
    const popup = document.getElementById('resumePopup');
    popup.classList.toggle('show');
  }
