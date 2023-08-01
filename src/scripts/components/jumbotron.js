class Jumbotron extends HTMLElement {
  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
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
      .jumbotron-content {
        margin: 0 0 0 80px;
      }
      .jumbotron-content .text1,
      .jumbotron-content .text2,
      .jumbotron-content .text3,
      .jumbotron-content .text4 {
        font-family: 'Roboto', 'Arial', sans-serif;
        color: #fff;
        text-shadow: 2px 2px 4px #000;
      }
      .jumbotron-content .text1 {
        font-size: 50px;
      }
      .jumbotron-content .text2 {
        font-size: 55px;
      }
      .jumbotron-content .text2 a {
        position: relative;
        color: var(--color-b2);
      }
      .jumbotron-content .text2 a::after {
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
      .jumbotron-content .text2 a:hover::after {
        transform: scaleX(1);
      }
      .jumbotron-content .text3 {
        font-size: 45px;
      }
      .jumbotron-content .text4 {
        font-size: 16px;
        margin: 20px 0;
      }
      .jumbotron-content .text4 span {
        font-size: 20px;
      }
      .explore-btn {
        display: inline-block;
        background-color: transparent;
        color: var(--color-b2);
        border: 2px solid var(--color-b2);
        font-size: 18px;
        font-family: 'Arial', sans-serif;
        padding: 15px 25px;
        margin: 15px 0 0 0;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease;
      }
      .explore-btn:hover {
        background-color: var(--color-b2);
        color: #fff;
      }

      @media (max-width: 950px) {
        .jumbotron-content {
          margin: 0 0 0 30px;
        }
        .jumbotron-content .text1 {
          font-size: 40px;
        }
        .jumbotron-content .text2 {
          font-size: 45px;
        }
        .jumbotron-content .text3 {
          font-size: 35px;
        }
      }
      @media (max-width: 768px) {
        .jumbotron-content .text1 {
          font-size: 30px;
        }
        .jumbotron-content .text2 {
          font-size: 35px;
        }
        .jumbotron-content .text3 {
          font-size: 25px;
        }
        @media (max-width: 678px) {
          .explore-btn {
            font-size: 16px;
            padding: 10px 20px;
          }
        }
      }
    </style>

    <div class="jumbotron-content">
      <p class="text1">Hi!,</p>
      <p class="text2">I'm <a href="https://www.instagram.com/nauffal.code/" target="_blank">Nauffal</a>,</p>
      <p class="text3">welcome to my website</p>
      <p class="text4">Me as: <span>Web developer, Web Designer</span></p>
      <a href="#about" class="explore-btn btn">Explore more...</a>
    </div>
    `;
  }
}
customElements.define('jumbo-tron', Jumbotron);
