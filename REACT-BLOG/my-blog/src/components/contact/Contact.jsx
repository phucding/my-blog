import React from "react";
import "./contact.css";

export default function Contact() {
  return (
    <section id="contact">
      <div class="contact__container">
        <aside class="contact__aside">
          <div class="aside__img">
            <img src="" alt="" />
          </div>
          <h2>Contact Me</h2>
          <p>Hãy liên hệ cho tôi nếu bạn cần</p>
          <ul class="contact__detail">
            <li>
              <i class="fa fa-phone"></i>
              <a href="+00 151515">+00 151515</a>
            </li>
            <li>
              <i class="fa fa-envelope"></i>
              <a href="mailto:mail@mail.com">mail@mail.com</a>
            </li>
            <li>
              <i class="fa fa-compass"></i>
              <h5>Ha Noi, Viet Nam</h5>
            </li>
          </ul>
          <ul class="contact__social">
            <li>
              <a href="/#">
                <i class="fab fa-facebook social-share-icon"></i>
              </a>
            </li>
            <li>
              <a href="/#">
                <i class="fab fa-instagram social-share-icon"></i>
              </a>
            </li>
            <li>
              {" "}
              <a href="/#">
                <i class="fab fa-twitter social-share-icon"></i>
              </a>
            </li>
          </ul>
        </aside>

        <form
          action="https://formspree.io/f/xeqdjpzz"
          class="contact__form"
          method="POST"
        >
          <div class="first__name">
            <label for="first__name">First Name</label>
            <input
              autocomplete="off"
              type="text"
              name="First Name:"
              placeholder="Enter your first name"
            />
          </div>
          <div class="last__name">
            <label for="first__name">Last Name</label>
            <input
              autocomplete="off"
              type="text"
              name="Last Name:"
              placeholder="Enter your last name"
            />
          </div>
          <div class="email">
            <label for="email">Email Address</label>
            <input
              autocomplete="off"
              type="text"
              name="Email Address:"
              placeholder="Enter your email address"
            />
          </div>
          <div class="message">
            <label for="message">Message</label>
            <textarea
              name="Message"
              rows="5"
              placeholder="Title"
              required
            ></textarea>
          </div>
          <button type="submit" class="submit__btn">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
