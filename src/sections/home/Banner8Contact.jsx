import HammerIcon from '../icons/HammerIcon'

const Banner8Contact = () => {
    return (
        <>
            <section className="contact-one">
                <div className="contact-one__bg" style={{ background: "#1B2748" }}></div>
                <div className="contact-one__overlay"></div>
                <div className="container">
                    <div className="contact-one__wrapper">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="sec-title text-left">
                                    <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-1 text-white">
                                        <HammerIcon />
                                        <div>Get Matched</div><br />
                                        <span> With Your Expert</span>{" "}
                                    </div>

                                    <h3 className="sec-title__title bw-split-in-up">
                                        <span className="text-white">Just a few details</span>  <br />
                                        <span> will get us started.</span>{" "}
                                    </h3>
                                </div>

                                <div className="contact-one__content">
                                    <div className="contact-one__content__bg bw-img-anim-left" style={{ backgroundImage: "url(assets/images/resources/contact-1-1.jpg)" }}
                                    ></div>
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
                                                        <a href="tel:+18772443703" aria-label="Call us at (877) 244-3703" className="text-white">(877) 244-3703</a>
                                                    </p>
                                                    <a href="tel:+2195550114" aria-label="Call us at (877) 244-3703" className="text-white">+21 9555-0114</a>
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
                                                <p className="contact-one__info__text" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 0 }}>
                                                    <a href="mailto:info@homesteadexperts.com" className='text-white'>
                                                        info@homesteadexperts.com
                                                    </a>
                                                    {/* <br /> */}
                                                    <a href="https://homesteadexperts.com/" className='text-white'>https://homesteadexperts.com/</a>
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
                                                <p className="contact-one__info__text text-white" >
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
                                            <input id="casename" type="text" name="casename" placeholder="Case Name" />
                                        </div>

                                        <div className="form-one__control form-one__control--full">
                                            <a href="#" className="procounsel-btn">
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
            </section>
        </>
    )
}

export default Banner8Contact

// import HammerIcon from '../icons/HammerIcon'

// const Banner8Contact = () => {
//     return (
//         <>
//             <section className="contact-one">
//                 <div className="contact-one__bg" style={{ backgroundImage: "url('/assets/images/backgrounds/contact-1-bg.jpg')" }}></div>
//                 <div className="contact-one__overlay"></div>
//                 <div className="container">
//                     <div className="contact-one__wrapper">
//                         <div className="row">
//                             <div className="col-xl-6">
//                                 <div className="sec-title text-left">
//                                     <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
//                                       <HammerIcon/>
//                                         Contact With Us
//                                     </div>

//                                     <h3 className="sec-title__title bw-split-in-up">
//                                         Feel Free to <br />
//                                         <span> Write Us Anytime</span>{" "}
//                                     </h3>
//                                 </div>
//                                 <div className="contact-one__content">
//                                     <div className="contact-one__content__bg bw-img-anim-left"
//                                         style={{
//                                             backgroundImage: "url('/assets/images/resources/contact-1-1.jpg')",
//                                         }} ></div>
//                                     <ul className="list-unstyled contact-one__info">
//                                         <li className="contact-one__info__item">
//                                             <div className="contact-one__info__icon">
//                                                 <i className="icon-telephone-call-1"></i>
//                                                 <span className="contact-one__info__icon__zoom">
//                                                     <i className="icon-telephone-call-1"></i>
//                                                 </span>
//                                             </div>
//                                             <div className="contact-one__info__content">
//                                                 <p className="contact-one__info__text">
//                                                     <a href="tel:+18772443703" aria-label="Call us at (877) 244-3703">(877) 244-3703</a>
//                                                     <br />
//                                                     {/* <a href="tel:+2195550114">+21 9555-0114</a> */}
//                                                 </p>
//                                             </div>
//                                         </li>
//                                         <li className="contact-one__info__item">
//                                             <div className="contact-one__info__icon">
//                                                 <i className="icon-glove"></i>
//                                                 <span className="contact-one__info__icon__zoom">
//                                                     <i className="icon-glove"></i>
//                                                 </span>
//                                             </div>
//                                             <div className="contact-one__info__content">
//                                                 <p className="contact-one__info__text" style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 0 }}>
//                                                     <a href="mailto:info@homesteadexperts.com" className='fs-15'>
//                                                         info@homesteadexperts.com
//                                                     </a>
//                                                     {/* <br /> */}
//                                                     <a href="https://homesteadexperts.com/" className='fs-15'>https://homesteadexperts.com/</a>
//                                                 </p>
//                                             </div>
//                                         </li>
//                                         <li className="contact-one__info__item">
//                                             <div className="contact-one__info__icon">
//                                                 <i className="icon-map-pin"></i>
//                                                 <span className="contact-one__info__icon__zoom">
//                                                     <i className="icon-map-pin"></i>
//                                                 </span>
//                                             </div>
//                                             <div className="contact-one__info__content">
//                                                 <p className="contact-one__info__text">
//                                                     259 Nassau St. Suite 2 #552
//                                                     <br /> Princeton, NJ 08542
//                                                 </p>
//                                             </div>
//                                         </li>
//                                     </ul>
//                                 </div>
//                             </div>
//                             <div className="col-xl-6 wow fadeInUp" data-wow-delay="200ms">
//                                 <form
//                                     className="contact-one__form contact-form-validated form-one"
//                                     action="inc/sendemail.php"
//                                 >
//                                     <div className="contact-one__form__bg-one"></div>
//                                     <div className="contact-one__form__bg-two"></div>
//                                     <div className="form-one__group">
//                                         <div className="form-one__control form-one__control--full">
//                                             <input
//                                                 id="name"
//                                                 type="text"
//                                                 name="name"
//                                                 placeholder="Name"
//                                             />
//                                         </div>
//                                         {/* <!-- /.form-one__control form-one__control--full --> */}
//                                         <div className="form-one__control form-one__control--full">
//                                             <input
//                                                 id="email"
//                                                 type="email"
//                                                 name="email"
//                                                 placeholder="Email Address"
//                                             />
//                                         </div>
//                                         {/* <!-- /.form-one__control form-one__control--full --> */}
//                                         <div className="form-one__control form-one__control--full">
//                                             <input
//                                                 id="phone"
//                                                 type="text"
//                                                 name="phone"
//                                                 placeholder="Phone"
//                                             />
//                                         </div>
//                                         {/* <!-- /.form-one__control form-one__control--full --> */}
//                                         <div className="form-one__control form-one__control--full">
//                                             <input
//                                                 id="subject"
//                                                 type="text"
//                                                 name="subject"
//                                                 placeholder="Subject"
//                                             />
//                                         </div>
//                                         {/* <!-- /.form-one__control form-one__control--full --> */}
//                                         <div className="form-one__control form-one__control--full">
//                                             <textarea
//                                                 id="message"
//                                                 name="message"
//                                                 placeholder="Message"
//                                             ></textarea>
//                                             {/* <!-- /# --> */}
//                                         </div>
//                                         {/* <!-- /.form-one__control --> */}
//                                         <div className="form-one__control form-one__control--full">
//                                             <button type="submit" className="procounsel-btn">
//                                                 <i>Send Message</i>
//                                                 <span>Send Message</span>
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     )
// }

// export default Banner8Contact