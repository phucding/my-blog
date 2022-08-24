import "./about.css";
import React from "react";

export default function About() {
  return (
    <div className="about">
      <div className="aboutItem">
        <div>
          <span className="aboutTitle">Vài điều về tớ</span>
        </div>
        <img
          src="https://burst.shopifycdn.com/photos/house-plant-in-white-pot.jpg?width=373&format=pjpg&exif=1&iptc=1"
          alt=""
        />
        <p>
          <ul>
            <li>Xin chào bạn đã đến với Blog của mình.</li>
            <li>
              Chào cậu. Cậu có biết rằng cậu rất tuyệt vời không.
              <li>
                Đúng vậy cậu không nhìn nhầm đâu, cậu rất tuyệt vời.
                <li>Hãy luôn như thế nhé !!!</li>
                <li>Và tớ là Pudding rất vui được chia sẻ với bạn</li>
              </li>
            </li>
          </ul>
        </p>
      </div>
      <div className="aboutItem">
        <div className="aboutSocial">
          <div>
            <a href="https://www.facebook.com/pucding3102/" target={"_blank"}>
              <i className="aboutIcon fa-brands fa-square-facebook"> </i>
            </a>
          </div>
          <div>
            <a href="https://twitter.com/pudding31_02" target={"_blank"}>
              <i className="aboutIcon fa-brands fa-square-twitter"> </i>
            </a>
          </div>
          <div>
            <a
              href="https://www.pinterest.com/phucdinhtrong1/"
              target={"_blank"}
            >
              <i
                className="aboutIcon fa-brands fa-square-pinterest"
                target={"_blank"}
              >
                {" "}
              </i>
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/pudding31.02/">
              <i
                className="aboutIcon fa-brands fa-square-instagram"
                target={"_blank"}
              >
                {" "}
              </i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
