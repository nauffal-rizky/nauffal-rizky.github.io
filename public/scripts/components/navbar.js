import '../view/all.min.js';
class Navbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
    <style>
      * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        box-sizing: border-box;
      }

      .toggle-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 62%;
      }
      .section-center,
      .social-center {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 15px;
      }
      .header-title a {
        position: relative;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-size: 30px;
      }
      .section-center li a,
      .social-center li a {
        position: relative;
        display: flex;
        align-items: center;
        color: #fff;
        font-family: 'Poppins', sans-serif;
        font-size: 18px;
        text-transform: capitalize;
      }
      .social-center li a {
        font-size: 25px;
      }
      .social-center li a svg {
        transition: all 0.3s ease;
      }
      .social-center li a svg:hover {
        transform: scale(1.5);
      }
      .header-title a::after,
      .section-center li a::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 1.5px solid #fff;
        transform: scaleX(0);
        transition: 0.3s;
      }
      .header-title a:hover::after,
      .section-center li a:hover::after {
        transform: scaleX(0.5);
      }
        .navToggle {
          display: none;
          background-color: transparent;
          color: #fff;
          font-size: 20px;
          border: none;
          transition: all 0.3s ease;
        }
        .navToggle.flip,
        .skillToggle.flip {
          transform: scale(-1);
        }

      @media (max-width: 1024px) {
        .toggle-container {
          width: 68%;
        }
      }
      @media (max-width: 900px) {
        .header-title a {
          font-size: 28px;
        }
        .section-center li a {
          font-size: 16px;
        }
      }
      @media (max-width: 768px) {
        .social-center {
          display: none;
        }
        .toggle-container {
          width: fit-content;
        }
      }
      @media (max-width: 600px) {
        .header-title {
          display: flex;
          justify-content: space-between;
          min-width: 35vw;
          gap: 10px;
        }
        .header-title a {
          font-size: 26px;
        }
        .social-center {
          display: flex;
        }
        .navToggle {
          display: block;
        }
        .toggle-container {
          flex-direction: column;
          align-items: center;
          gap: 0px;
          width: fit-content;
          height: 0;
          transition: all 0.3s ease;
        }
        .section-center {
          width: fit-content;
          padding: 10px 0 8px 0;
        }
      }
    </style>

    <div class="header-title">
      <a href="#home">nauffal.site</a>
      <button class="navToggle">
        <i class="fa-solid fa-chevron-down"></i>
      </button>
    </div>
    <div class="toggle-container">
      <ul class="section-center">
        <li><a href="#about" class="links">about</a></li>
        <li><a href="#skills" class="links">skills</a></li>
        <li><a href="#exp" class="links">experience</a></li>
        <li><a href="#service" class="links">service</a></li>
        <li><a href="#contact" class="links">contact</a></li>
      </ul>
      <ul class="social-center">
        <li>
          <a href="https://www.linkedin.com/in/nauffal-rizky-3a3b70243" target="_blank" class="linkedin links">
            <i class="fa-brands fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/nauffal.code/" target="_blank" class="instagram links">
            <i class="fa-brands fa-instagram"></i>
          </a>
        </li>
        <li>
          <a href="https://wa.me/+6287825000868" target="_blank" class="whatsapp links">
            <i class="fa-brands fa-whatsapp"></i>
          </a>
        </li>
      </ul>
    </div>

    <script src="https://kit.fontawesome.com/1160dd891b.js" crossorigin="anonymous"></script>
    `;
    const toggleContain = this.querySelector('.toggle-container');
    const sectionCenter = this.querySelector('.section-center');
    const socialCenter = this.querySelector('.social-center');
    const navToggle = this.querySelector('.navToggle');
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

    const links = this.querySelectorAll('.links');
    links.forEach((link) => {
      link.addEventListener('click', () => {
        navToggle.classList.remove('flip');
        toggleContain.style.height = 0;
      });
    });
  }
}
customElements.define('nav-bar', Navbar);
