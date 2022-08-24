import "./footer.css";
import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <div class="footer__1">
          <h4>Xin chào bạn </h4> <p>Chúc bạn có một ngày tốt lành</p>
          <p>Good Luck!!</p>
        </div>
        <div class="footer__2">
          <ul class="links">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#">About Me</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/write">Write</a>
            </li>
          </ul>
        </div>
        <div class="footer__3">
          <h4>Contact</h4>
          <div>
            <p>
              <i class="fa-solid fa-location-pin"></i> Chicago, US
            </p>
            <p>
              <i class="fa-solid fa-mobile-screen-button"></i> Phone:{" "}
              <a href="+00 151515">+00 151515</a>
            </p>
            <p>
              <i class="fa-solid fa-envelope-circle-check"></i> Email:{" "}
              <a href="mailto:mail@mail.com">mail@mail.com</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
