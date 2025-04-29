var crsr = document.querySelector("#cursor")
var crsrr = document.querySelector("#cursor-blur")


document.addEventListener('mousemove',function(dets){
    crsr.style.left = dets.x+'px'
    crsr.style.top = dets.y+'px'
    crsrr.style.left = dets.x- 100 +'px'
    crsrr.style.top = dets.y-  100 +'px'
})


gsap.to("#nav",{
    backgroundColor: "#000",
    duration : 1,
    height : "100px",
    scrollTrigger:{
        trigger : "#nav",
        scroller:"body",
        // markers : true,
        start : "top -10%",
        end : "top -15%",
        scrub:1
    }
    
})

gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:"#main",
        scroller:"body",
        // markers:true,
        start:"top -30%",
        end:"top -80%",
        scrub : 2

    }
})














const circle = document.getElementById('circle');
    let angle = 0;
    let animationFrame = null;
    let isHovering = false;

    function rotate() {
      if (!isHovering) return;
      angle = (angle + 2) % 360; // increment angle
      circle.style.transform = `rotate(${angle}deg)`;
      animationFrame = requestAnimationFrame(rotate);
    }

    circle.addEventListener('mouseenter', () => {
      isHovering = true;
      circle.style.transition = 'none'; // disable smooth transition while rotating
      rotate();
    });

    circle.addEventListener('mouseleave', () => {
      isHovering = false;
      cancelAnimationFrame(animationFrame);

      // Smooth transition back to 0deg
      circle.style.transition = 'transform 1s ease';
      circle.style.transform = 'rotate(0deg)';
      angle = 0;
    });

// Scroll animations
const aboutUsIn = document.querySelector("#about-us-in");
const cards = document.querySelectorAll(".card");

// Intersection Observer for about section
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.5
});

observer.observe(aboutUsIn);

// Card hover effects
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px) scale(1.05)";
    });
    
    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) scale(1)";
    });
});

// Smooth scroll for navigation
document.querySelectorAll("#nav h4").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.textContent.toLowerCase().replace(/\s+/g, '-');
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

// Page load animation
window.addEventListener("load", () => {
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.transition = "opacity 1s ease";
        document.body.style.opacity = "1";
    }, 100);
});