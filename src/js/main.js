const nav = document.querySelector('.navbar');
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

const descBtn = document.querySelector('.desc-btn');
descBtn.addEventListener('click', () => {
  descBtn.classList.toggle('back');

  const simple = document.querySelector('.simple');
  const descSkill = document.querySelector('.desc-skill');
  const descSkillHeight = descSkill.getBoundingClientRect().height;

  const details = document.querySelector('.details');
  const descDetail1 = document.querySelector('.desc-detail-1');
  const descDetail2 = document.querySelector('.desc-detail-2');

  const descHeight1 = descDetail1.getBoundingClientRect().height;
  const descHeight2 = descDetail2.getBoundingClientRect().height;

  if (descBtn.classList.contains('back')) {
    simple.style.height = 0;
    descBtn.textContent = `Go back!!`;
    details.style.height = `${descHeight1 + descHeight2 + 15}px`;
  } else {
    simple.style.height = `${descSkillHeight}px`;
    descBtn.textContent = `Read details...`;
    details.style.height = 0;
  }
});

const graphs = document.querySelectorAll('.graph');
graphs.forEach((graph) => {
  const dropdown = graph.querySelector('.skill-dropdown');
  const dropdownMenu = graph.querySelector('.desc-graph');
  const dropdownMenuHeight = dropdownMenu.getBoundingClientRect().height;

  const skillToggle = graph.querySelector('.skillToggle');
  skillToggle.addEventListener('click', () => {
    skillToggle.classList.toggle('flip');
    dropdown.classList.toggle('show');

    if (dropdown.classList.contains('show')) {
      dropdown.style.height = `${dropdownMenuHeight}px`;
    } else {
      dropdown.style.height = 0;
    }
  });
});

const refreshInput = document.querySelector('.refresh-btn');
refreshInput.addEventListener('click', () => {
  const inputs = document.querySelectorAll('.input');
  inputs.forEach((input) => {
    input.value = ``;
  });
});

const date = document.getElementById('date');
const timeNow = new Date().getFullYear();
date.textContent = timeNow;
