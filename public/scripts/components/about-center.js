class AboutCenter extends HTMLElement {
	constructor() {
		super();
		this._shadowRoot = this.attachShadow({ mode: "closed" });
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
        position: relative;
        color: var(--color-b3);
        font-size: 55px;
        font-family: 'Roboto', sans-serif;
        text-align: center;
        text-transform: capitalize;
        margin: 0px 0px 40px 0px;
      }
      .title::before{
        content: "";
        position: absolute;
        bottom: -10px;
        right: 50%;
        width: 100px;
        height: 1.5px;
        background-color: #000;
        transform: translateX(50%);
      }
      .title::after {
        content: "myself";
        position: absolute;
        bottom: -24px;
        right: 50%;
        width: fit-content;
        background-color: #fff;
        color: var(--color-b4);
        font-size: 20px;
        text-transform: lowercase;
        transform: translateX(50%);
        padding: 3px;
      }
      .about-content {
        display: flex;
        justify-content: center;
        font-family: 'Poppins', sans-serif;
      }
      .profile {
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        gap: 50px;
        width: 950px;
        max-width: 90%;
      }
      .desc-about {
        line-height: 1.5;
      }
      .desc-about h2 {
        display: inline;
        color: var(--color-b2);
        font-size: 30px;
        letter-spacing: 1px;
        transition: 0.3s;
      }
      .intro {
        font-size: 16px;
        font-family: "Open-sans", sans-serif;
        margin: 5px 0 25px 0;
      }
      .intro .YCM {
        color: var(--color-b2);
      }
      .intro .YCM:hover {
        color: #d65050;
        text-decoration: underline;
      }
      .my-img {
        width: 400px;
        height: 400px;
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
        border: 2px solid var(--color-b3);
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .cv-btn:hover {
        background-color: transparent;
        color: var(--color-b3);
      }

      @media (max-width: 1024px) {
        .profile {
          grid-template-areas: 'image'
          'introduction';
          grid-template-columns: none;
          grid-template-rows: 1fr 100%;
          justify-items: center;
          align-items: start;
          gap: 10px;
          width: 600px;
        }
        .desc-about {
          grid-area: introduction;
        }
        .my-img {
          grid-area: image;
        }
        .title {
          font-size: 50px;
          margin: 0px 0px 35px 0px;
        }
        .title::before {
          bottom: -5px;
        }
        .title::after {
          font-size: 18px;
          bottom: -18px;
        }
        .my-img {
          width: 350px;
          height: 350px;
        }
        .desc-about h2 {
          font-size: 28px;
        }
        .intro {
          margin: 5px 0px 20px 0px;
        }
      }
      @media (max-width: 768px) {
        .profile {
          width: 500px;
        }
        .title {
          font-size: 45px;
          margin: 0px 0px 30px 0px;
        }
        .title::before {
          bottom: -5px;
        }
        .title::after {
          font-size: 16px;
          bottom: -18px;
        }
        .my-img {
          width: 300px;
          height: 300px;
        }
        .desc-about h2 {
          font-size: 26px;
        }
        .intro {
          margin: 5px 0px 15px 0px;
        }
        .cv-btn {
          font-size: 16px;
          padding: 12px 22px;
        }
      }
      @media (max-width: 576px) {
        .profile {
          width: 450px;
        }
        .my-img {
          width: 250px;
          height: 250px;
        }
        .desc-about h2 {
          font-size: 22px;
        }
        .intro {
          font-size: 14px;
          margin: 5px 0px 15px 0px;
        }
        .cv-btn {
          font-size: 16px;
          padding: 12px 20px;
        }
      }
    </style>

    <div class="container">
      <h1 class="title">about</h1>
        <section class="about-content">
          <div class="profile">
            <div class="desc-about">
              <h2>Introduction</h2>
              <p class="intro">
                Hi.!! I'm Nauffal experienced in Web Development included HTML, CSS, Javascript, and many more. Proficient in website development, such as company profile website, commercial website, web applications, etc. When I first intrigued in programming I started learned about HTML, since then I keep learning about other programming language, framework, and library to improve my skills
              </p>
              <a href="./public/download/Nauffal - CV.pdf" target="_blank" download="Nauffal CV" class="cv-btn">Download CV</a>
            </div>
            <div class="my-img">
              <img src="./public/assets/profile-nomask2.JPG"></img>
            </div>
          </div>
        </section>
    </div>
    `;
	}
}
customElements.define("about-center", AboutCenter);
