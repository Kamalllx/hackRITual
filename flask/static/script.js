document.addEventListener("DOMContentLoaded", () => {
  const enterButton = document.getElementById("enter");
  const landing = document.querySelector(".landing");
  const mainContent = document.querySelector(".main-content");
  const typewriterElement = document.getElementById("typewriter");
  const startHeistButton = document.getElementById("start-heist");

  // Initialize GSAP ScrollTrigger
  gsap.registerPlugin(ScrollTrigger);

  enterButton.addEventListener("click", () => {
    gsap.to(landing, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        landing.classList.add("hidden");
        mainContent.classList.remove("hidden");
        revealMainContent();
      },
    });
  });

  function revealMainContent() {
    const text = `Welcome to chapter MONEY HEIST<br><br>
  
  
       You'll start with 8 challenges: 4 medium and 4 hard. At any moment, you could uncover the path to a new medium challenge—no rules, no order, just pure chaos. <br><br>
  
  
       Each medium challenge holds a main flag... and a piece of a *secret password*. This password is your key to the heist: collect 4 fragments and you'll unlock the route to the first hard challenge. <br><br>
  
  
       But that's not all. Every hard challenge you crack reveals another route, another piece of the puzzle, until you've breached the vault and claimed victory. <br><br>
  
  
       Time is ticking. The codes are hidden. Are you ready to pull off the perfect heist?<br><br>`;

    const words = text.split(" ");
    let i = 0;

    function typeWriter() {
      if (i < words.length) {
        typewriterElement.innerHTML += words[i] + " ";
        i++;
        setTimeout(typeWriter, 50);
      } else {
        startHeistButton.classList.remove("hidden");
        gsap.from(startHeistButton, { opacity: 0, y: 20, duration: 1 });
      }
    }

    typeWriter();
  }

  startHeistButton.addEventListener("click", () => {
    window.location.href = "secret_cameras";
  });
});
