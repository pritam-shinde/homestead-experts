import { sliderData } from "@/constants/sliderData";
import Link from "next/link";

export default function Banner1() {
  return (
    <section className="main-slider-one" id="home" style={{ minHeight: "100vh", height: "100%", position: "relative" }}    >
      <div
        className="main-slider-one__carousel procounsel-owl__carousel owl-carousel"
        data-owl-options={`{
          "loop": true,
          "animateOut": "fadeOut",
          "animateIn": "fadeIn",
          "items": 1,
          "autoplay": false,
          "autoplayTimeout": 7000,
          "smartSpeed": 1000,
          "nav": false,
          "navText": ["<span class='icon-arrow-left'></span>","<span class='icon-arrow-right'></span>"],
          "dots": true,
          "margin": 0
        }`}
      >
        {sliderData.map((slide, index) => (
          <div className="item" key={index}>
            <div className="main-slider-one__item">
              <div className="main-slider-one__bg" style={{ backgroundImage: `url(${slide.bg})` }}></div>

              <div className="main-slider-one__overlay-one"></div>
              {/* <div className="main-slider-one__overlay-two"></div> */}

              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="main-slider-one__content">
                      <h1 className="main-slider-one__title">{slide.title}</h1>
                      <p className="main-slider-one__text">{slide.text}</p>

                      {/* <div className="main-slider-one__btn"> */}
                      <a href="#" className="procounsel-btn">
                        <i> Discover More</i>
                        <span> Discover More</span>
                      </a>
                      {/* </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="feature-one ">
        <div className="container featured-position" 
          style={{ maxWidth: "1250px", width: "100%", zIndex: 10, backgroundColor: "#0E222A", padding: "40px 40px 0", boxShadow: "0 4px 12px rgba(0,0,0,0.9)", position: "absolute", margin: "0 auto", left: "50%", transform: "translateX(-50%)", top: "100%" }}
        >
          <div className="feature-one__inner">
            <div className="row gutter-y-0">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                <div className="feature-one__item ">
                  <div className="feature-one__item__icon text-white">
                    <i className="icon-calendar"></i>
                  </div>
                  <h3 className="feature-one__item__title">
                    <Link href="#" className="text-white">Find Your <br /> Expert Witness </Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                <div className="feature-one__item feature-one__item--border-left justify-content-center">
                  <div className="feature-one__item__icon text-white">
                    <i className="icon-payment"></i>
                  </div>
                  <h3 className="feature-one__item__title">
                    <Link href="#" className="text-white"> Get a Free <br /> Case Assessment</Link>
                  </h3>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="00ms">
                <div className="feature-one__item feature-one__item--border-left justify-content-end">
                  <div className="feature-one__item__icon text-white">
                    <i className="icon-advice"></i>
                  </div>
                  <h3 className="feature-one__item__title">
                    <Link href="#" className="text-white"> Join Our Expert <br /> Network</Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
