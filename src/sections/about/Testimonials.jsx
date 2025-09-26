"use client";
import { useEffect } from "react";
import HammerIcon from "../icons/HammerIcon";

// const testimonials = [
//   {
//     id: 1,
//     img: "assets/images/resources/testi-3-1.jpg",
//     name: "Haley S",
//     designation: "Customer",
//     text: "Highly recommend for your expert needs!",
//     delay: "000ms",
//   },
//   {
//     id: 2,
//     img: "assets/images/resources/testi-3-2.jpg",
//     name: "Michael Karikomi",
//     designation: "Founder",
//     text: "I have worked with Homestead Medical Experts on several cases, and they are the best in the business. Very prompt and professional communication and they excel at finding great experts. Very highly recommended!",
//     delay: "100ms",
//   },
//   {
//     id: 3,
//     img: "assets/images/resources/testi-3-3.jpg",
//     name: "D C",
//     designation: "Customer",
//     text: "Homestead and its professionals do an outstanding job. They work hard to identify and screen experts and then coordinate and follow through on every aspect of the expert's work. As a practicing trial lawyer with 25 years' experience in personal injury litigation, I can say without reservation this is the best experience I have ever had with the process from finding and retaining, to workup, to disclosure, and beyond.",
//     delay: "200ms",
//   },
//   {
//     id: 4,
//     img: "assets/images/resources/testi-3-4.jpg",
//     name: "Hena Wiano",
//     designation: "Co Founder",
//     text: "There are many variations of passages of Lorem Ipsum avalab but the majority have suffered alteration in some form, by injected humour, or randomised",
//     delay: "300ms",
//   },
// ];


const testimonials = [
  {
    id: 1,
    img: "assets/images/resources/testi-3-1.jpg",
    name: "Alen Martin",
    designation: "Customer",
    text: "There are many variations of passages of Lorem Ipsum avalab but the majority have suffered alteration in some form, by injected humour, or randomised",
    delay: "000ms",
  },
  {
    id: 2,
    img: "assets/images/resources/testi-3-2.jpg",
    name: "Hena Wiano",
    designation: "Founder",
    text: "There are many variations of passages of Lorem Ipsum avalab but the majority have suffered alteration in some form, by injected humour, or randomised",
    delay: "100ms",
  },
  {
    id: 3,
    img: "assets/images/resources/testi-3-3.jpg",
    name: "Alen Martin",
    designation: "Customer",
    text: "There are many variations of passages of Lorem Ipsum avalab but the majority have suffered alteration in some form, by injected humour, or randomised",
    delay: "200ms",
  },
  {
    id: 4,
    img: "assets/images/resources/testi-3-4.jpg",
    name: "Hena Wiano",
    designation: "Co Founder",
    text: "There are many variations of passages of Lorem Ipsum avalab but the majority have suffered alteration in some form, by injected humour, or randomised",
    delay: "300ms",
  },
];

const Testimonials = () => {
  useEffect(() => {
    const scriptUrls = [
      "/assets/vendors/jquery/jquery-3.7.1.min.js",
      "/assets/vendors/owl-carousel/js/owl.carousel.min.js",
    ];

    const loadScript = (src) =>
      new Promise((resolve) => {
        const script = document.createElement("script");
        script.src = src;
        script.async = false; // preserve order
        script.onload = resolve;
        document.body.appendChild(script);
      });

    (async () => {
      // Load scripts sequentially
      for (const src of scriptUrls) {
        await loadScript(src);
      }

      // Now jQuery and Owl Carousel are ready
      const $ = window.jQuery;
      const carousel = $(".procounsel-owl__carousel");
      if (carousel.length && typeof $.fn.owlCarousel === "function") {
        carousel.each(function () {
          const elm = $(this);
          const options = elm.data("owl-options");
          elm.owlCarousel(
            typeof options === "object" ? options : JSON.parse(options)
          );
        });
      }
    })();
  }, []);

  return (
    <section className="testimonials-three" id="testimonial">
      <div className="testimonials-three__bg" style={{ backgroundImage: "url(assets/images/shapes/testimonial-bg-3.png)" }}></div>

      <div className="container">
        <div className="testimonials-three__top">
          <div className="sec-title text-left">
            <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2 text-white">
              <HammerIcon />
              Testimonial
            </div>
            <h3 className="sec-title__title bw-split-in-up text-white">
              See What They Are <br />
              <span>Talking About?</span>
            </h3>
          </div>

          <div className="testimonials-three__info">
            <div className="testimonials-three__info__rating">
              <h3 className="testimonials-three__info__rating-value text-white">
                4.6
              </h3>
              <span className="testimonials-three__info__stars">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="icon-star"></i>
                ))}
              </span>
            </div>
            <div className="testimonials-three__info__content">
              <h4 className="testimonials-three__info__title text-white">
                Average Ratings
              </h4>
              <p className="testimonials-three__info__text text-white">
                (5k+) Customer <br /> reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="container-fluid">
        <div
          className="testimonials-three__carousel procounsel-owl__carousel procounsel-owl__carousel--with-shadow procounsel-owl__carousel--basic-nav owl-carousel"
          data-owl-options={`{
              "items": 1,
              "margin": 30,
              "loop": true,
              "smartSpeed": 700,
              "nav": false,
              "dots": false,
              "autoplay": true,
              "responsive": {
                "0": { "items": 1 },
                "575": { "items": 2 },
                "768": { "items": 2 },
                "992": { "items": 3 },
                "1200": { "items": 4 }
              }
          }`}
        >
          {testimonials.map((t) => (
            <div className="item" key={t.id}>
              <div
                className="testimonials-card-three wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay={t.delay}
              >
                <div className="testimonials-card-three__top">
                  <div className="testimonials-card-three__rating">
                    {[...Array(5)].map((_, i) => (
                      <i key={i} className="icon-star"></i>
                    ))}
                  </div>
                  <div className="testimonials-card-three__quote">
                    <i className="icon-double-quote"></i>
                  </div>
                </div>

                <div className="testimonials-card-three__text">{t.text}</div>

                <div className="testimonials-card-three__author">
                  <div className="testimonials-card-three__author-img">
                    <img src={t.img} alt={t.name} />
                  </div>
                  <div className="testimonials-card-three__author-info">
                    <h3 className="testimonials-card-three__name">{t.name}</h3>
                    <p className="testimonials-card-three__designation">
                      {t.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
