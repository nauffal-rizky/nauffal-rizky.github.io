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
        transition: 0.3s;
      }
      .desc-about h2:hover {
        letter-spacing: 1.5px;
      }
      .intro-1 {
        margin: 10px 0 0 0;
      }
      .intro-1 .YCM {
        color: var(--color-b2);
      }
      .intro-1 .YCM:hover {
        color: #d65050;
        text-decoration: underline;
      }
      .cv-btn {
        display: inline-block;
      }
      .my-img {
        width: 300px;
        height: 300px;
        padding: 5px;
        border: 2px solid var(--color-b2);
        border-radius: 5px;
        object-fit: cover;
        transition: all 0.2s ease;
      }
      .my-img:hover {
        padding: 8px;
      }
      .cv-btn {
        display: inline-block;
        background-color: transparent;
        color: var(--color-b2);
        font-size: 18px;
        font-family: 'Arial', sans-serif;
        padding: 15px 25px;
        margin: 15px 0 0 0;
        border: 2px solid var(--color-b2);
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .cv-btn:hover {
        background-color: var(--color-b2);
        color: #fff;
      }

      @media (max-width: 1440px) {
        .my-img {
          width: 400px;
          height: 400px;
        }
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
          height: 250px;
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
              <p class="intro-1">
                Hi, my name is Nauffal. I'm from Bogor, Indonesia. I got intrigued by programming and started studying web development and then regularly practice my skills by doing several projects.
                I got my opportunity to know about Programming when I attended a computer class on <a href="https://ciptamandiri.net/home/" target="_blank" class="YCM">Yayasan Cipta Mandiri</a>.
                The place where I discovered my dreams.
              </p>
              <a href="./src/download/Nauffal - CV.pdf" target="_blank" download="Nauffal CV" class="cv-btn btn">Download CV</a>
            </div>
            <img src="./src/assets/profile-nomask2.JPG" class="my-img"></img>
          </div>
        </div>
      </section>
    </div>
    `;
  }
}
customElements.define('about-center', AboutCenter);
