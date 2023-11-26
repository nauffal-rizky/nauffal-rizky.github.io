class Jumbotron extends HTMLElement {
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
        display: flex;
        align-items: center;
        height: 100vh;
      }

      @keyframes wavy {
        0%,
        40%,
        100% {
          transform: translateY(0px);
        }
        20% {
          transform: translateY(-20px);
        }
      }

      .jumbotron-content {
        margin: 0 0 0 100px;
      }
      .text1,
      .text2,
      .text3,
      .text4 {
        font-family: 'Roboto', 'Arial', sans-serif;
        color: #fff;
        text-shadow: 2px 2px 4px #000;
      }
      .text1 {
        font-size: 60px;
      }
      .text2 {
        font-size: 65px;
      }
      .text2 a {
        position: relative;
        color: var(--color-b2);
        transition: 0.3s;
      }
      .text2 a:hover span {
        position: relative;
        display: inline-block;
        animation: wavy .7s;
        animation-delay: calc(.1s * var(--i));
      }
      .text2 a::after {
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-bottom: 1.5px solid var(--color-b2);
        transform: scaleX(0);
        transition: 0.3s;
      }
      .text2 a:hover::after {
        transform: scaleX(1);
      }
      .text3 {
        font-size: 55px;
      }
      .text4 {
        font-size: 24px;
        margin: 20px 0px 35px 0px;
      }
      .text4 span {
        font-size: 22px;
      }
      .explore-btn {
        display: inline-block;
        background-color: transparent;
        color: var(--color-b2);
        border: 2px solid var(--color-b2);
        font-size: 20px;
        font-family: 'Arial', sans-serif;
        padding: 18px 25px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .explore-btn:hover {
        background-color: var(--color-b2);
        color: #fff;
      }

      @media (max-width: 1280px) {
        .jumbotron-content {
          margin: 0 0 0 80px;
        }
        .text1 {
          font-size: 50px;
        }
        .text2 {
          font-size: 55px;
        }
        .text3 {
          font-size: 45px;
        }
        .text4 {
          font-size: 20px;
        }
        .text4 span {
          font-size: 18px;
        }
        .explore-btn {
          font-size: 16px;
          padding: 16px 25px;
        }
      }
      @media (max-width: 950px) {
        .jumbotron-content {
          margin: 0 0 0 50px;
        }
        .text1 {
          font-size: 45px;
        }
        .text2 {
          font-size: 50px;
        }
        .text3 {
          font-size: 40px;
        }
        .text4 {
          margin: 15px 0px 30px 0px;
        }
      }
      @media (max-width: 676px) {
        .jumbotron-content {
          margin: 0 0 0 40px;
        }
        .text1 {
          font-size: 40px;
        }
        .text2 {
          font-size: 45px;
        }
        .text3 {
          font-size: 35px;
        }
        .text4 {
          font-size: 18px;
          margin: 10px 0px 25px 0px;
        }
        .text4 span {
          font-size: 16px;
        }
        .explore-btn {
          font-size: 14px;
          padding: 14px 22px;
        }
      }
      @media (max-width: 576px) {
        .jumbotron-content {
          margin: 0 0 0 30px;
        }
        .text1 {
          font-size: 35px;
        }
        .text2 {
          font-size: 40px;
        }
        .text3 {
          font-size: 30px;
        }
        .text4 {
          font-size: 16px;
          margin: 10px 0px 20px 0px;
        }
        .text4 span {
          font-size: 14px;
        }
        .explore-btn {
          padding: 12px 18px;
        }
      }
    </style>

    <div class="jumbotron-content">
      <p class="text1">Hi!,</p>
      <p class="text2">I'm <a href="https://www.instagram.com/nauffal.code/" target="_blank"><span style="--i:1">N</span><span style="--i:2">a</span><span style="--i:3">u</span><span style="--i:4">f</span><span style="--i:5">f</span><span style="--i:6">a</span><span style="--i:7">l</span></a>,</p>
      <p class="text3">welcome to my website</p>
      <p class="text4">Me as: <span>Web developer, Web Designer</span></p>
      <a href="#about" class="explore-btn">Explore more...</a>
    </div>
    `;
	}
}
customElements.define("jumbo-tron", Jumbotron);
