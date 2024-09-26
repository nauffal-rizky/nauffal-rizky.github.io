const nav = document.querySelector(".navbar");

const goToUp = document.querySelector(".go-to-up");
window.addEventListener("scroll", () => {
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 0) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }

  if (scrollHeight > 500) {
    goToUp.classList.add("show");
  } else {
    goToUp.classList.remove("show");
  }
});

const initialHeight = 70.2;

if (window.innerWidth <= 768 && window.innerWidth > 576) {
  nav.style.height = `${initialHeight}px`;
} else if (window.innerWidth <= 576) {
  nav.style.height = `${initialHeight - 12}px`;
}
window.addEventListener("resize", () => {
  if (window.innerWidth <= 768 && window.innerWidth > 576) {
    nav.style.height = `${initialHeight}px`;
  } else if (window.innerWidth <= 576) {
    nav.style.height = `${initialHeight - 12}px`;
  }
});

const navDrop = document.querySelector(".logo i");
navDrop.addEventListener("click", () => {
  if (!nav.classList.contains("drop")) {
    nav.classList.add("drop");
  } else {
    nav.classList.remove("drop");
  }
});

const toggles = document.querySelectorAll(".toggle-links li a");
toggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    e.preventDefault();

    const id = e.currentTarget.getAttribute("href").slice(1);
    const targetElement = document.getElementById(id);

    const navHeight = nav.getBoundingClientRect().height;
    let targetPosition = targetElement.offsetTop - navHeight;

    if (nav.classList.contains("drop")) {
      if (window.innerWidth <= 768 && window.innerWidth > 576) {
        targetPosition += 278;
      } else if (window.innerWidth <= 576) {
        targetPosition += 236;
      }
    }

    if (nav.classList.contains("scrolled")) {
      if (window.innerWidth <= 768 && window.innerWidth > 576) {
        targetPosition -= initialHeight;
      } else if (window.innerWidth <= 576) {
        targetPosition -= initialHeight - 12;
      }
    } else {
      if (window.innerWidth <= 768 && window.innerWidth > 576) {
        targetPosition -= initialHeight;
      } else if (window.innerWidth <= 576) {
        targetPosition -= initialHeight - 12;
      }
    }

    window.scrollTo({
      left: 0,
      top: targetPosition,
    });

    nav.classList.remove("drop");
  });
});

// HIDDEN WORKS
const time = new Date();
const year = time.getFullYear();
const month = time.getMonth() + 1;
const date = time.getDate();

const err = document.querySelector(".err");
if (year === 2024 && month === 6 && date === 7) {
  err.style.display = "flex";
}

err.addEventListener("click", () => {
  const element = document.createElement("form");
  element.classList.add("user-check");
  element.innerHTML = `
		<div class="input-box">
			<input type="text">
			<button>Enter</button>
		</div>
	`;

  document.body.appendChild(element);

  window.addEventListener("click", (e) => {
    if (e.target === element) {
      document.body.removeChild(element);
    }
  });

  // PASS CHECK
  element.addEventListener("submit", (e) => {
    e.preventDefault();
    const passValue = element.querySelector("input").value.toLowerCase();
    if (passValue === "020422") {
      window.location.href = "./projects/bubbie.html";
    } else {
      document.body.removeChild(element);
    }
  });
});

// CONTACT FORM
const clearBtn = document.querySelectorAll(".clear-btn");
clearBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    const input = btn.previousElementSibling;

    if (input.value !== "") {
      input.value = "";
      input.focus();
    } else {
      input.focus();
    }
  });
});

const form = document.querySelector(".contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const msg = document.getElementById("msg").value;

  console.log(username, email, phone, msg);

  const url = `https://wa.me/+6287843902885?text=Name: ${username}%0aPhone: ${phone}%0aEmail: ${email}%0a%0a${msg}`;
  window.open(url, "_blank").focus();

  username.value = "";
  email.value = "";
  phone.value = "";
  msg.value = "";
});
