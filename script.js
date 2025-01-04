// Navbar Script Begin
let lastScrollTop = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const threshold = 40; // Adjust threshold value if needed

  if (scrollTop > lastScrollTop && scrollTop > threshold) {
    // Scrolling down and past the threshold
    navbar.style.top = "-100px"; // Adjust to your navbar height
  } else {
    // Scrolling up
    navbar.style.top = "0";
  }

  if (window.scrollY > 100) {
    // Change color after scrolling 100px
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For mobile or negative scrolling
});

// Navbar Script End

// copy and open links
function whatsapp() {
  window.open("http://wa.me/+918709399252");
}
function email() {
  window.open("mailto:uditsahu@idealiftstudio.com");
}
function instagram() {
  window.open(
    "https://www.instagram.com/idealiftstudio?igsh=MW1paGJ1eXducnlzMw=="
  );
}
function facebook() {
  window.open("https://www.facebook.com/idealift");
}
function linkedin() {
  window.open("https://www.linkedin.com/in/udit-sahu-7950a8188/");
}
