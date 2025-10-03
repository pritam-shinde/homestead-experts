import { sliderData } from "@/constants/sliderData";

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
          "autoplay": true,
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
              <div className="main-slider-one__bg" style={{ backgroundImage: `url(${slide.bg})`}}></div>

              <div className="main-slider-one__overlay-one"></div>
              <div className="main-slider-one__overlay-two"></div>

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
    </section>
  );
}

// import { sliderData } from "@/constants/sliderData";

// export default function Banner1() {
//   return (
//     <section
//       className="main-slider-one"
//       id="home"
//       style={{ minHeight: "100vh", height: "100%", position: "relative" }}
//     >
//       <div
//         className="main-slider-one__carousel procounsel-owl__carousel owl-carousel"
//         data-owl-options={`{
//           "loop": true,
//           "animateOut": "fadeOut",
//           "animateIn": "fadeIn",
//           "items": 1,
//           "autoplay": false,
//           "autoplayTimeout": 7000,
//           "smartSpeed": 1000,
//           "nav": false,
//           "navText": ["<span class='icon-arrow-left'></span>","<span class='icon-arrow-right'></span>"],
//           "dots": true,
//           "margin": 0
//         }`}
//       >
//         {sliderData.map((slide, index) => (
//           <div className="item" key={index}>
//             <div className="main-slider-one__item">
//               <div
//                 className="main-slider-one__bg"
//                 style={{ backgroundImage: `url(${slide.bg})` }}
//               ></div>

//               <div className="main-slider-one__overlay-one"></div>
//               <div className="main-slider-one__overlay-two"></div>

//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="main-slider-one__content">
//                       <h2 className="main-slider-one__title">{slide.title}</h2>
//                       <p className="main-slider-one__text">{slide.text}</p>

//                       <div className="main-slider-one__btn">
//                         <a href="#" className="procounsel-btn text-uppercase">
//                           <i> Discover More</i>
//                           <span> Discover More</span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// "use client"
// import React, { useEffect } from "react";

// const Banner1 = () => {
//   const slides = [
//     {
//       id: 1,
//       bgImage: "/assets/images/backgrounds/slider-1.jpg",
//       title: (
//         <>
//           The Expert Witness <br />
//           company That Helps <br /> You Fight ALL Cases
//         </>
//       ),
//       text: (
//         <>
//           Homestead Medical Experts specializes in expert witness services for attorneys and <br /> insurance carriers.
//         </>
//       ),
//       btnText: "Discover More",
//       btnLink: "#",
//     },
//     // {
//     //   id: 2,
//     //   bgImage: "/assets/images/backgrounds/slider-2.jpg",
//     //   title: (
//     //     <>
//     //       The Legal <br />
//     //       Defense Team <br />
//     //       You Truly Deserve
//     //     </>
//     //   ),
//     //   text: (
//     //     <>
//     //       All the Lorem Ipsum generators on the Internet tend
//     //       to repeat predefined <br />
//     //       chunks as necessary
//     //     </>
//     //   ),
//     //   btnText: "Discover More",
//     //   btnLink: "#",
//     // },
//     // {
//     //   id: 3,
//     //   bgImage: "/assets/images/backgrounds/slider-3.jpg",
//     //   title: (
//     //     <>
//     //       The Legal <br />
//     //       Defense Team <br />
//     //       You Truly Deserve
//     //     </>
//     //   ),
//     //   text: (
//     //     <>
//     //       All the Lorem Ipsum generators on the Internet tend
//     //       to repeat predefined <br />
//     //       chunks as necessary
//     //     </>
//     //   ),
//     //   btnText: "Discover More",
//     //   btnLink: "#",
//     // },
//   ];

//   useEffect(() => {
//     const scriptUrls = [
//       "/assets/vendors/jquery/jquery-3.7.1.min.js",
//       "/assets/vendors/owl-carousel/js/owl.carousel.min.js",
//     ];

//     const loadScript = (src) =>
//       new Promise((resolve) => {
//         const script = document.createElement("script");
//         script.src = src;
//         script.async = false; // preserve order
//         script.onload = resolve;
//         document.body.appendChild(script);
//       });

//     (async () => {
//       // Load scripts sequentially
//       for (const src of scriptUrls) {
//         await loadScript(src);
//       }

//       // Now jQuery and Owl Carousel are ready
//       const $ = window.jQuery;
//       const carousel = $(".procounsel-owl__carousel");
//       if (carousel.length && typeof $.fn.owlCarousel === "function") {
//         carousel.each(function () {
//           const elm = $(this);
//           const options = elm.data("owl-options");
//           elm.owlCarousel(
//             typeof options === "object" ? options : JSON.parse(options)
//           );
//         });
//       }
//     })();
//   }, []);

//   return (
//     <section className="main-slider-one" id="home">
//       <div className="main-slider-one__carousel procounsel-owl__carousel owl-carousel"
//         data-owl-options='{ "loop": true, "animateOut": "fadeOut", "animateIn": "fadeIn", "items": 1,
//           "autoplay": true,
//            "smartSpeed": 1000, "nav": false, "navText": ["<span className=\"icon-arrow-left\"></span>", "<span className=\"icon-arrow-right\"></span>"], "dots": true, "margin": 0 }'
//       >
//         {slides.map((slide) => (
//           <div className="item" key={slide.id}>
//             <div className="main-slider-one__item">
//               <div
//                 className="main-slider-one__bg"
//                 style={{ backgroundImage: `url(${slide.bgImage})` }}
//               ></div>
//               <div className="main-slider-one__overlay-one"></div>
//               <div className="main-slider-one__overlay-two"></div>
//               <div className="container">
//                 <div className="row">
//                   <div className="col-md-12">
//                     <div className="main-slider-one__content">
//                       <h2 className="main-slider-one__title">{slide.title}</h2>
//                       <p className="main-slider-one__text">{slide.text}</p>
//                       <div className="main-slider-one__btn">
//                         <a href={slide.btnLink} className="procounsel-btn">
//                           <i>{slide.btnText}</i>
//                           <span>{slide.btnText}</span>
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Banner1;
