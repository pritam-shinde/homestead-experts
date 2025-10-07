
const Banner8Contact = () => {
  return (
    <>
      <section className="contact-one">
        {/* <div className="tailored-redline" style={{ position: "unset" }}></div> */}
        <div style={{ transform: "rotateY(180deg)", width: "100%", position: "relative", marginBottom: "20px", marginTop: "8px" }}>
          <div className="tailored-redline" style={{ position: "unset", height: "14px" }}></div>
        </div>
        <div className="contact-one__bg" style={{ background: "#0B1A22" }}></div>
        <div className="contact-one__overlay"></div>
        <div className="container">
          <div className="contact-one__wrapper">
            <div className="row">
              <div className="col-xl-6">
                <div className="sec-title text-left">
                  <h2 className="sec-title__title bw-split-in-up">
                    <span className="text-white">Get Matched With</span>{" "}
                    <br />
                    <span> Your Expert</span>{" "}
                  </h2>

                  <p className="contact-one__info__text text-white"> Just a few details will get us started.</p>

                </div>

                <div className="contact-one__content">
                  {/* <div
                    className="contact-one__content__bg bw-img-anim-left"
                    style={{
                      backgroundImage:
                        "url(assets/images/resources/contact-1-1.jpg)",
                    }}
                  ></div> */}
                  <ul className="list-unstyled contact-one__info">
                    <li className="contact-one__info__item">
                      <div className="contact-one__info__icon">
                        <i className="icon-telephone-call-1"></i>
                        <span className="contact-one__info__icon__zoom">
                          <i className="icon-telephone-call-1"></i>
                        </span>
                      </div>
                      <div className="contact-one__info__content">
                        <div className="contact-one__info__text ">
                          <p className="main-footer__info__text">
                            <a href="tel:+18772443703" aria-label="Call us at (877) 244-3703" className="text-white">
                              (877) 244-3703
                            </a>
                          </p>
                          <p className="main-footer__info__text">
                            <a href="tel:+2195550114" aria-label="Call us at +21 9555-0114" className="text-white">
                              +21 9555-0114
                            </a>
                          </p>
                        </div>
                      </div>
                    </li>
                    <li className="contact-one__info__item">
                      <div className="contact-one__info__icon">
                        <i className="icon-glove"></i>
                        <span className="contact-one__info__icon__zoom">
                          <i className="icon-glove"></i>
                        </span>
                      </div>

                      <div className="contact-one__info__content">
                        <p
                          className="contact-one__info__text"
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            gap: 0,
                          }}
                        >
                          <a
                            href="mailto:info@homesteadexperts.com"
                            className="text-white"
                          >
                            info@homesteadexperts.com
                          </a>
                          {/* <br /> */}
                          <a
                            href="https://homesteadexperts.com/"
                            className="text-white"
                          >
                            https://homesteadexperts.com/
                          </a>
                        </p>
                      </div>
                    </li>
                    <li className="contact-one__info__item">
                      <div className="contact-one__info__icon">
                        <i className="icon-map-pin"></i>
                        <span className="contact-one__info__icon__zoom">
                          <i className="icon-map-pin"></i>
                        </span>
                      </div>
                      <div className="contact-one__info__content">
                        <p className="contact-one__info__text text-white">
                          259 Nassau St. Suite 2 #552
                          <br /> Princeton, NJ 08542
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
                <form
                  className="contact-one__form contact-form-validated form-one"
                  action="inc/sendemail.php"
                >
                  <div className="contact-one__form__bg-one"></div>
                  <div className="contact-one__form__bg-two"></div>
                  <div className="form-one__group">
                    <div className="form-one__control form-one__control--full">
                      <input
                        id="firstname"
                        type="text"
                        name="firstname"
                        placeholder="First Name"
                      />
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <input
                        id="lastname"
                        type="text"
                        name="lastname"
                        placeholder="Last Name"
                      />
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                      />
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <input
                        id="casename"
                        type="text"
                        name="casename"
                        placeholder="Case Name"
                      />
                    </div>

                    <div className="form-one__control form-one__control--full">
                      <a href="#" className="procounsel-btn text-uppercase">
                        <i>Case Details</i>
                        <span>Case Details</span>
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div style={{ transform: "rotateY(180deg)", width: "100%", position: "relative", }}>
          <div className="tailored-redline"></div>
        </div>
        {/* <div className="tailored-redline" style={{ position: "unset", }}></div> */}
      </section>
    </>
  );
};

export default Banner8Contact;