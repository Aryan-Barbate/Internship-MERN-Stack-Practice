//turn pages when click next or prev button
const pageTurnBtn = document.querySelectorAll(".nextprev-btn");
pageTurnBtn.forEach((el, index) => {
  el.onclick = () => {
    if (window.innerWidth <= 768) return;
    const pageTurnId = el.getAttribute("data-page");
    const pageTurn = document.getElementById(pageTurnId);
    if (pageTurn.classList.contains("turn")) {
      pageTurn.classList.remove("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 - index;
      }, 500);
    } else {
      pageTurn.classList.add("turn");
      setTimeout(() => {
        pageTurn.style.zIndex = 20 + index;
      }, 500);
    }
  };
});

//contact me button when click
const pages = document.querySelectorAll(".book-page.page-right");
const contactMeBtn = document.querySelector(".btn.contact-me");
contactMeBtn.onclick = () => {
  if (window.innerWidth <= 768) {
    currentMobileIndex = 6;
    updateMobileSlider();
    return;
  }
  pages.forEach((page, index) => {
    setTimeout(() => {
      page.classList.add("turn");
      setTimeout(() => {
        page.style.zIndex = 20 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

//create reverse index function
let totalPages = pages.length;
let pageNumber = 0;
function reverseIndex() {
  pageNumber--;
  if (pageNumber < 0) {
    pageNumber = totalPages - 1;
  }
}

//back profile button when click
const backProfileBtn = document.querySelector(".back-profile");
backProfileBtn.onclick = () => {
  if (window.innerWidth <= 768) {
    currentMobileIndex = 0;
    updateMobileSlider();
    return;
  }
  pages.forEach((_, index) => {
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].classList.remove("turn");

      setTimeout(() => {
        reverseIndex();
        pages[pageNumber].style.zIndex = 10 + index;
      }, 500);
    }, (index + 1) * 200 + 100);
  });
};

//opening animation
const coverRight = document.querySelector(".cover.cover-right");
const pageLeft = document.querySelector(".book-page.page-left");

//opening animation (cover right animation)
setTimeout(() => {
  coverRight.classList.add("turn");
}, 2100);
setTimeout(() => {
  coverRight.style.zIndex = -1;
}, 2800);

//opening animation (page left or profile page animation)
setTimeout(() => {
  pageLeft.style.zIndex = 20;
}, 3200);

//opening animation (all page right animation)
pages.forEach((_, index) => {
  setTimeout(() => {
    reverseIndex();
    pages[pageNumber].classList.remove("turn");
    setTimeout(() => {
      reverseIndex();
      pages[pageNumber].style.zIndex = 10 + index;
    }, 500);
  }, (index + 1) * 200 + 2100);
});

// Mouse wheel scrolling support
let isScrolling = false;

window.addEventListener('wheel', (e) => {
  if (window.innerWidth <= 768) return;
  if (isScrolling) return;
  isScrolling = true;
  
  if (e.deltaY > 0) {
    // Scroll down -> next page

    const forwardBtns = document.querySelectorAll(".nextprev-btn:not(.back)");
    for(let i=0; i<forwardBtns.length; i++) {
        const pageTurnId = forwardBtns[i].getAttribute("data-page");
        const pageTurn = document.getElementById(pageTurnId);
        if(!pageTurn.classList.contains("turn")) {
            forwardBtns[i].click();
            break;
        }
    }
  } else if (e.deltaY < 0) {
    // Scroll up -> previous page
    const backBtns = document.querySelectorAll(".nextprev-btn.back");
    for(let i=backBtns.length-1; i>=0; i--) {
        const pageTurnId = backBtns[i].getAttribute("data-page");
        const pageTurn = document.getElementById(pageTurnId);
        if(pageTurn.classList.contains("turn")) {
            backBtns[i].click();
            break;
        }
    }
  }

  // Prevent rapid firing (debounce time synced with page turn animation 500ms + buffer)
  setTimeout(() => {
    isScrolling = false;
  }, 1000);
});

// Mobile Slider Logic
const mobileSections = document.querySelectorAll(".mobile-section");
const mobileNext = document.getElementById("mobile-next");
const mobilePrev = document.getElementById("mobile-prev");
let currentMobileIndex = 0;

function updateMobileSlider() {
  if (window.innerWidth > 768) return;
  mobileSections.forEach((section, index) => {
    section.classList.remove("mobile-active", "mobile-prev-anim");
    if (index === currentMobileIndex) {
      section.classList.add("mobile-active");
    } else if (index < currentMobileIndex) {
      section.classList.add("mobile-prev-anim");
    }
  });
}

// Initialize on load and resize
window.addEventListener("load", updateMobileSlider);
window.addEventListener("resize", updateMobileSlider);

if (mobileNext && mobilePrev) {
  mobileNext.addEventListener("click", () => {
    if (currentMobileIndex < mobileSections.length - 1) {
      currentMobileIndex++;
      updateMobileSlider();
    }
  });

  mobilePrev.addEventListener("click", () => {
    if (currentMobileIndex > 0) {
      currentMobileIndex--;
      updateMobileSlider();
    }
  });
}

// Swipe Gesture Logic
let touchStartX = 0;
let touchEndX = 0;
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener("touchstart", (e) => {
  if (window.innerWidth > 768) return;
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener("touchend", (e) => {
  if (window.innerWidth > 768) return;
  touchEndX = e.changedTouches[0].screenX;
  touchEndY = e.changedTouches[0].screenY;
  
  // Ensure it's a horizontal swipe, not a vertical scroll
  if (Math.abs(touchStartX - touchEndX) > Math.abs(touchStartY - touchEndY) && Math.abs(touchStartX - touchEndX) > 50) {
    if (touchStartX - touchEndX > 50) {
      // Swiped left -> Next
      if (currentMobileIndex < mobileSections.length - 1) {
        currentMobileIndex++;
        updateMobileSlider();
      }
    } else if (touchEndX - touchStartX > 50) {
      // Swiped right -> Prev
      if (currentMobileIndex > 0) {
        currentMobileIndex--;
        updateMobileSlider();
      }
    }
  }
}, { passive: true });
