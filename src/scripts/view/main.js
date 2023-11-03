const main = () => {
  // SCROLL
  const nav = document.querySelector('nav-bar');
  const goToUp = document.querySelector('.go-to-up');
  window.addEventListener('scroll', () => {
    const scrollHeight = window.pageYOffset;

    if (scrollHeight > 0) {
      nav.classList.add('fixed');
    } else {
      nav.classList.remove('fixed');
    }

    if (scrollHeight > 500) {
      goToUp.classList.add('show-link');
    } else {
      goToUp.classList.remove('show-link');
    }
  });

  // SKILLS
  const skillsContain = document.querySelector('.skill-carousel');
  const skillBtns = skillsContain.querySelectorAll('span');
  const addSkillBtns = skillsContain.querySelectorAll('.hover-contain span');
  const skillDetails = document.querySelectorAll('.skill-detail');
  const cssSkills = document.querySelector('.css-skills');

  skillsContain.addEventListener('click', (e) => {
    const IDs = e.target.dataset.id;
    if (IDs) {
      skillBtns.forEach((btn) => {
        btn.classList.remove('active');
        e.target.classList.add('active');
      });

      addSkillBtns.forEach((btn) => {
        btn.classList.remove('active');
        e.target.classList.add('active');
        if (IDs == 'css' || IDs == 'materialize' || IDs == 'bootstrap') {
          cssSkills.classList.add('active');
        } else {
          cssSkills.classList.remove('active');
        }
      });

      skillDetails.forEach((detail) => {
        detail.classList.remove('active');

        const currentTarget = document.getElementById(IDs);
        currentTarget.classList.add('active');
      });
    }
  });

  const carousel = document.querySelector('.carousel-items');
  const carouselArrows = document.querySelectorAll('.skill-carousel button');
  const firstSkill = carousel.querySelectorAll('span')[1];

  let isDragStart = false;
  let prevPageX, prevScrollLeft;

  const showHideIcons = () => {
    let maxScrollWidth = carousel.scrollWidth - carousel.clientWidth;

    carouselArrows[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block';
    carouselArrows[1].style.display = carousel.scrollLeft == maxScrollWidth ? 'none' : 'block';
  };
  showHideIcons();

  carouselArrows.forEach((arrow) => {
    let firstImgWidth = firstSkill.clientWidth + 20;

    arrow.addEventListener('click', () => {
      /* Ternary */
      carousel.scrollLeft += arrow.id == 'left' ? -firstImgWidth : firstImgWidth;
      /* If/Else statement 
      if (arrow.id == 'left') {
        carousel.scrollLeft += firstImgWidth;
      } else {
        carousel.scrollLeft += firstImgWidth;
      }
      */

      setTimeout(() => showHideIcons(), 60);
    });
  });

  const dragStart = (e) => {
    // Updating global variables value on mousedown event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    e.preventDefault();

    if (!isDragStart) return;
    carousel.classList.add('dragging');

    let positionDiff = e.pageX - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;

    showHideIcons();
  };

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging');
  };

  carousel.addEventListener('mousedown', dragStart);
  carousel.addEventListener('touchstart', dragStart);

  carousel.addEventListener('mousemove', dragging);
  carousel.addEventListener('touchmove', dragging);

  carousel.addEventListener('mouseup', dragStop);
  carousel.addEventListener('mouseleave', dragStop);
  carousel.addEventListener('touchend', dragStop);

  // SERVICE
  const btnContain = document.querySelector('.package-name');
  const btns = document.querySelectorAll('.package-name span');
  const contents = document.querySelectorAll('.package-desc');

  btnContain.addEventListener('click', (e) => {
    const IDs = e.target.dataset.id;

    if (IDs) {
      btns.forEach((btn) => {
        btn.classList.remove('active');
        e.target.classList.add('active');
      });

      contents.forEach((content) => {
        content.classList.remove('active');

        const currentTarget = document.getElementById(IDs);
        currentTarget.classList.add('active');
      });
    }
  });

  // CONTACT
  const selectedServiceDisplay = document.querySelector('#selectedService');
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const optionService = document.querySelector('.options');
  const opSerCon = document.querySelector('.options-container');

  const services = document.querySelectorAll('.name');
  services.forEach((service) => {
    const value = service.textContent;
    const serviceSpan = document.createElement('span');
    serviceSpan.textContent = value;
    opSerCon.appendChild(serviceSpan);

    serviceSpan.addEventListener('click', (e) => {
      const clicked = e.target.textContent;
      selectedServiceDisplay.value = clicked;
      optionService.style.height = 0;
    });
  });

  [selectedServiceDisplay, dropdownBtn].forEach((element) => {
    element.addEventListener('click', () => {
      const optionsContactHeight = optionService.getBoundingClientRect().height;
      const opSerConHei = opSerCon.getBoundingClientRect().height;

      if (optionsContactHeight !== 0) {
        optionService.style.height = 0;
      } else {
        optionService.style.height = `${opSerConHei}px`;
      }
    });
  });

  selectedServiceDisplay.addEventListener('click', () => {
    selectedServiceDisplay.value = 'Service...';
  });

  const refreshInput = document.querySelector('.refresh-btn');
  refreshInput.addEventListener('click', () => {
    const inputs = document.querySelectorAll('.input');
    inputs.forEach((input) => {
      input.value = ``;
    });
  });

  const goToWhatsapp = () => {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const url = `https://wa.me/+6287825000868?text=Name: ${username}%0aPhone: ${phone}%0aEmail: ${email}%0aService: Please make ${selectedServiceDisplay.value} for me!`;
    window.open(url, '_blank').focus();
  };

  const form = document.querySelector('.form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    goToWhatsapp();
  });

  const date = document.getElementById('date');
  const timeNow = new Date().getFullYear();
  date.textContent = timeNow;
};
export default main;
