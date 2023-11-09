class AboutCenter extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'closed' });
  }
  connectedCallback() {
    this.render();
  }
  render() {
    this._shadowRoot.innerHTML = `
    <style>
      * {
        padding: 0;
        margin: 0;
        text-decoration: none;
        box-sizing: border-box;
      }
      :host {
        display: block;
        min-height: 600px;
      }
      .container {
        padding: 80px 0;
      }
      .title {
        font-family: 'Roboto', sans-serif;
        text-transform: capitalize;
        margin: 0 0 50px 0;
      }
      .title h1 {
        color: var(--color-b3);
        font-size: 45px;
        margin: 0 0 0 20px;
      }
      .title .underline-contain {
        position: relative;
        display: flex;
        align-items: center;
      }
      .title .underline-contain .underline {
        width: 400px;
        height: 3px;
        background-color: #000;
      }
      .title .underline-contain .circle {
        width: 20px;
        height: 20px;
        border: 2px solid #000;
        border-radius: 15px;
      }
      .about-content {
        font-family: 'Poppins', sans-serif;
      }
      .profile {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 50px;
      }
      .desc-about {
        order: 1;
        width: 45%;
        line-height: 1.5;
      }
      .desc-about h2 {
        display: inline;
        color: var(--color-b2);
        letter-spacing: 1px;
        transition: 0.3s;
      }
      .intro {
        font-family: "Open-sans", sans-serif;
        margin: 10px 0 0 0;
      }
      .intro .YCM {
        color: var(--color-b2);
      }
      .intro .YCM:hover {
        color: #d65050;
        text-decoration: underline;
      }
      .my-img {
        width: 350px;
        height: 350px;
        padding: 5px;
        border: 2px solid var(--color-b2);
        border-radius: 5px;
      }
      .my-img img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.2s ease;
      }
      .my-img:hover img {
        transform: scale(0.95) rotate(3deg);
      }
      .cv-btn {
        display: inline-block;
        background-color: var(--color-b3);
        color: #fff;
        font-size: 18px;
        font-family: 'Arial', sans-serif;
        padding: 15px 25px;
        margin: 15px 0 0 0;
        border: 2px solid var(--color-b3);
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .cv-btn:hover {
        background-color: transparent;
        color: var(--color-b3);
      }

      @media (max-width: 1000px) {
        .profile {
          flex-direction: column;
          gap: 20px;
        }
        .desc-about {
          max-width: 90%;
          width: 600px;
        }
      }
      @media (max-width: 768px) {
        .title h1 {
          font-size: 40px;
        }
        .about-content {
          flex-direction: column;
        }
        .title .underline-contain .underline {
          width: 225px;
        }
        .my-img {
          width: 300px;
          height: 300px;
        }
      }
      @media (max-width: 678px) {
        .desc-about {
          font-size: 14px;
        }
      }
      @media (max-width: 450px) {
        .title h1 {
          margin: 0 0 0 15px;
        }
      }
    </style>

    <div class="container">
      <div class="title">
        <h1>about</h1>
        <div class="underline-contain">
          <div class="underline"></div>
          <div class="circle"></div>
        </div>
      </div>
      <section class="about-center">
        <div class="about-content">
          <div class="profile">
            <div class="desc-about desc">
              <h2>Introduction</h2>
              <p class="intro">
                Hi.!! I'm Nauffal experienced in Web Development included HTML, CSS, Javascript, and many more. Proficient in website development, such as company profile website, commercial website, web applications, etc. When I first intrigued in programming I started learned about HTML, since then I keep learning about other programming language, framework, and library to improve my skills
              </p>
              <a href="./download/Nauffal - CV.pdf" target="_blank" download="Nauffal CV" class="cv-btn btn">Download CV</a>
            </div>
            <div class="my-img">
              <img src="./assets/profile-nomask2.JPG"></img>
            </div>
          </div>
        </div>
      </section>
    </div>
    `;
  }
}
customElements.define('about-center', AboutCenter);
