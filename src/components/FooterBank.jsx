import React from "react";
import styled from "styled-components";
import Logo from "../assets/image/logo.svg";
import Facebook from "../assets/image/icon-facebook.svg";
import Youtube from "../assets/image/icon-youtube.svg";
import Twitter from "../assets/image/icon-twitter.svg";
import Pinterest from "../assets/image/icon-pinterest.svg";
import Instagram from "../assets/image/icon-instagram.svg";

const FooterBank = () => {
  return (
    <Footer>
      <div className="footer container_2">
        <div className="footer-list">
          <div className="footerImgSocial">
            <div className="footer-img">
              <svg xmlns="http://www.w3.org/2000/svg" width="139" height="20">
                <defs>
                  <linearGradient
                    id="a"
                    x1="72.195%"
                    x2="17.503%"
                    y1="0%"
                    y2="100%"
                  >
                    <stop offset="0%" stop-color="#33D35E" />
                    <stop offset="100%" stop-color="#2AB6D9" />
                  </linearGradient>
                </defs>
                <g fill="none" fill-rule="evenodd">
                  <path
                    fill="#FFF"
                    fill-rule="nonzero"
                    d="M37.754 15.847c2.852 0 5.152-1.622 5.952-4.216h-3.897c-.376.665-1.14 1.066-2.055 1.066-1.237 0-2.065-.674-2.32-1.978h8.44c.051-.352.081-.694.081-1.037 0-3.335-2.537-5.95-6.201-5.95-3.568 0-6.175 2.564-6.175 6.049 0 3.473 2.628 6.066 6.175 6.066zm2.344-7.297h-4.596c.317-1.129 1.11-1.749 2.252-1.749 1.181 0 2 .613 2.344 1.75zm10.946 7.296c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.919l-.4.88c-.94-.775-2.135-1.222-3.474-1.222-3.476 0-5.961 2.505-5.961 6.026 0 3.533 2.485 6.07 5.961 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.069-2.583 2.545-2.583 1.466 0 2.544 1.108 2.544 2.583 0 1.485-1.078 2.593-2.544 2.593zm13.123 3.467c3.02 0 5.025-1.554 5.025-3.93 0-2.883-2.387-3.256-4.183-3.575-1.08-.193-1.95-.344-1.95-.99 0-.527.422-.838 1.05-.838.71 0 1.197.337 1.197 1.063h3.667c-.044-2.303-1.92-3.843-4.816-3.843-2.912 0-4.854 1.47-4.854 3.75 0 2.757 2.337 3.289 4.1 3.574 1.092.181 1.952.368 1.952 1.024 0 .587-.543.88-1.116.88-.742 0-1.32-.383-1.32-1.214h-3.77c.036 2.463 1.919 4.1 5.018 4.1zm8.1 3.858c2.936 0 4.344-1.257 5.877-4.736l4.764-10.863h-4.206l-2.249 6.263-2.412-6.263H70.31l4.698 10.43c-.53 1.414-.983 1.804-2.48 1.804H71.45v3.365h1.341zm18.504-3.858c3.5 0 5.973-2.515 5.973-6.048S94.796 3.75 91.295 3.75a5.332 5.332 0 00-2.825.784V0H84.6v15.474h2.897l.37-.844c.923.771 2.102 1.216 3.428 1.216zm-.523-3.467c-1.467 0-2.545-1.108-2.545-2.58 0-1.486 1.078-2.594 2.545-2.594 1.466 0 2.544 1.108 2.544 2.593 0 1.473-1.087 2.58-2.544 2.58zm13.598 3.467c1.32 0 2.5-.434 3.43-1.188l.336.804h3.027V4.093h-2.918l-.401.88c-.939-.775-2.135-1.222-3.474-1.222-3.476 0-5.96 2.505-5.96 6.026 0 3.533 2.484 6.07 5.96 6.07zm.524-3.467c-1.467 0-2.545-1.108-2.545-2.593 0-1.475 1.07-2.583 2.545-2.583 1.467 0 2.545 1.108 2.545 2.583 0 1.485-1.078 2.593-2.545 2.593zm12.653 3.095V9.403c0-1.447.702-2.3 1.923-2.3.986 0 1.483.657 1.483 1.98v6.39h3.915V8.543c0-2.897-1.733-4.773-4.373-4.773-1.47 0-2.733.565-3.58 1.508l-.537-1.172h-2.747v11.369h3.916zm13.748 0v-4.808l2.848 4.808h4.616l-3.902-5.95 3.543-5.419h-4.397l-2.708 4.454V0h-3.916v15.474h3.916z"
                  />
                  <g fill="url(#a)">
                    <path d="M10.802 0L0 19.704h5.986L16.789 0z" />
                    <path
                      opacity=".5"
                      d="M18.171 0L7.368 19.704h5.986L24.157 0z"
                    />
                    <path
                      opacity=".15"
                      d="M25.539 0L14.737 19.704h5.986L31.525 0z"
                    />
                  </g>
                </g>
              </svg>
            </div>
            <div className="footer-social">
              <span>
                <img src={Facebook} alt="" />
              </span>
              <span>
                <img src={Youtube} alt="" />
              </span>
              <span>
                <img src={Twitter} alt="" />
              </span>
              <span className="hello_pint">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20">
                  <path
                    fill="#fff"
                    d="M10 0C4.478 0 0 4.477 0 10c0 4.237 2.636 7.855 6.356 9.312-.088-.791-.167-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.852 0 1.264.64 1.264 1.408 0 .858-.545 2.14-.828 3.33-.236.995.5 1.807 1.48 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.335.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.522 0 10-4.477 10-10S15.522 0 10 0z"
                  />
                </svg>
              </span>
              <span>
                <img src={Instagram} alt="" />
              </span>
            </div>
          </div>

          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blog</li>
          </ul>
          <ul>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        <div className="btnCopyright">
          <button>Request Invite</button>
          <p className="copyright">ⓒ Easybank. All Rights Reserved</p>
        </div>
      </div>
    </Footer>
  );
};

export default FooterBank;

let Footer = styled.div`
  background-color: hsl(233, 26%, 24%);
  color: hsl(0, 0%, 100%);
  text-align: center;
  padding: 40px 0;
  .hello_pint {
    svg {
      path {
        fill: green;
      }
      &:hover {
        path {
          fill: yellow;
        }
      }
    }
  }
  .footer-img {
    img {
      width: 200px;
    }
  }

  .footer-social {
    margin: 30px 0;
    span {
      img {
        width: 30px;
        margin: 0 12px;
      }
    }
  }
  ul {
    li {
      margin: 20px 0;

      &:hover {
        color: hsl(136, 65%, 51%);
      }
    }
  }

  .btnCopyright {
    button {
      padding: 15px 30px;
      border-radius: 26px;
      font-size: 16px;
      border: 1px;
      background-color: hsl(136, 65%, 51%);
      color: white;
      margin: 25px 0;

      &:hover {
        background-color: blue;
      }
    }
    .copyright {
      color: hsl(0, 0%, 98%) !important;

      &:hover {
        color: hsl(136, 65%, 51%) !important;
      }
    }
  }

  @media (min-width: 912px) {
    .footer {
      display: flex;
      justify-content: space-between;
    }

    .copyright {
      font-size: 12px;
    }
    .btnCopyright {
      width: 20%;
      text-align: end;
      button {
        padding: 10px 20px;
        border-radius: 26px;
        font-size: 10px;
      }
    }
    .footer-list {
      display: flex;
      justify-content: space-between;
      width: 50%;
      align-items: center;
    }
    li {
      font-size: 10px;
    }
    .footer-img img {
      width: 120px;
    }
    .footer-social span img {
      width: 20px;
    }
    .footer-social {
      margin-bottom: 0;
    }
  }
`;
