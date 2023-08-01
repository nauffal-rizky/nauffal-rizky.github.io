const main = () => {
  // DOMContentLoaded
  window.addEventListener('DOMContentLoaded', () => {
    desc.style.height = `${simpleDescHeight}px`;
  });

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
  const scrollLinks = document.querySelectorAll('.scroll-link');
  scrollLinks.forEach((link) => {
    link.addEventListener('click', () => {
      toggleContain.style.height = 0;
    });
  });

  /* NAVBAR
  const toggleContain = document.querySelector('.toggle-container');
  const sectionCenter = document.querySelector('.section-center');
  const socialCenter = document.querySelector('.social-center');
  const navToggle = document.querySelector('.navToggle');
  navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('flip');

    const toggleContainHeight = toggleContain.getBoundingClientRect().height;
    const sectionHeight = sectionCenter.getBoundingClientRect().height;
    const socialHeight = socialCenter.getBoundingClientRect().height;
    
    if (toggleContainHeight === 0) {
      toggleContain.style.height = `${sectionHeight + socialHeight}px`;
    } else {
      toggleContain.style.height = 0;
    }
  });
  */

  // SKILLS
  const desc = document.querySelector('.description');
  const simpleDesc = desc.querySelector('.simple-desc');
  const simpleDescHeight = simpleDesc.getBoundingClientRect().height;

  const detailDesc = desc.querySelector('.detail-desc');
  const detailDescHeight = detailDesc.getBoundingClientRect().height;

  const descBtn = document.querySelector('.desc-btn');
  descBtn.addEventListener('click', () => {
    if (descBtn.innerText === `Read less...`) {
      desc.style.height = `${simpleDescHeight}px`;
      descBtn.innerText = `Read details...`;
    } else {
      desc.style.height = `${simpleDescHeight + detailDescHeight}px`;
      descBtn.innerText = `Read less...`;
    }
  });

  // SKILLS-DROPDOWN
  const graphs = document.querySelectorAll('.graph');
  graphs.forEach((graph) => {
    const skillToggle = graph.querySelector('.skillToggle');
    skillToggle.addEventListener('click', () => {
      const dropdown = graph.querySelector('.skill-dropdown');
      const skillDropdownHeight = dropdown.querySelector('p').getBoundingClientRect().height;

      graph.classList.toggle('show');

      graphs.forEach((item) => {
        if (item !== graph) {
          item.classList.remove('show');

          const dropdownItem = item.querySelector('.skill-dropdown');
          const skillToggleItem = item.querySelector('.skillToggle');
          dropdownItem.style.height = 0;
          skillToggleItem.classList.remove('flip');
        }
      });

      if (graph.classList.contains('show')) {
        dropdown.style.height = `${skillDropdownHeight}px`;
        skillToggle.classList.add('flip');
      } else {
        dropdown.style.height = 0;
        skillToggle.classList.remove('flip');
      }
    });
  });

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

    const url = `https://wa.me/+6287825000868?text=Name: ${username}%0aPhone: ${phone}%0aEmail: ${email}`;
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
