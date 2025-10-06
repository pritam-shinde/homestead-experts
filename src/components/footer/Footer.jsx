import Image from "next/image";

const Footer = () => {
    const footerLinks = [
        {
            title: "Services",
            delay: "200ms",
            links: [
                { label: "What We Offer", href: "#" },
                { label: "Our Story", href: "#" },
                { label: "Latest News", href: "#" },
                { label: "Help Center", href: "#" },
            ],
        },
        {
            title: "Quick Links",
            delay: "100ms",
            links: [
                { label: "About Us", href: "#" },
                { label: "Meet the Lawyer", href: "#" },
                { label: "Expert Witness", href: "#" },
                { label: "Contact", href: "#" },
            ],
        },

    ];

    const contactInfo = [
        {
            icon: "icon-telephone-call-1",
            content: (
                <a
                    href="tel:+18772443703"
                    aria-label="Call us at (877) 244-3703"
                >
                    (877) 244-3703
                </a>
            ),
        },
        {
            icon: "icon-mail",
            content: (
                <a href="mailto:info@homesteadexperts.com">
                    info@homesteadexperts.com
                </a>
            ),
        },
    ];

    const socialLinks = [
        { href: "https://facebook.com", icon: "icon-facebook", label: "Facebook" },
        { href: "https://pinterest.com", icon: "icon-pinterest", label: "Pinterest" },
        { href: "https://twitter.com", icon: "icon-twitter", label: "Twitter" },
        { href: "https://youtube.com", icon: "icon-youtube", label: "Youtube" },
    ];

    return (
        <footer className="main-footer">
            <div className="main-footer__bg" style={{ backgroundImage: "url('/assets/images/backgrounds/footer-bg.png')" }}></div>
            <div className="main-footer__top">
                <div className="container">
                    <div className="row">
                        {/* Logo + About */}
                        <div className="col-md-6 col-xl-4 wow fadeInUp" data-wow-delay="00ms">
                            <div className="footer-widget footer-widget--about">
                                <a href="#" className="footer-widget__logo">
                                    <Image src="/assets/images/logos/homestead-experts-logo-light.png" width={250} height={40}
                                        alt="Homestead Logo" />
                                </a>
                                <p className="footer-widget__text">
                                    Discover a unique approach with our dedicated attorneys,
                                    committed effective legal solutions.
                                </p>
                            </div>
                        </div>

                        {/* Dynamic Link Sections */}
                        {footerLinks.map((section, index) => (
                            <div key={index} className="col-md-6 col-xl-2 wow fadeInUp" data-wow-delay={section.delay}>
                                <div className="footer-widget footer-widget--links">
                                    <h2 className="footer-widget__title">{section.title}</h2>
                                    <ul className="list-unstyled footer-widget__links">
                                        {section.links.map((link, idx) => (
                                            <li key={idx}>
                                                <a className="text-white" href={link.href}>{link.label}</a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}

                        {/* Newsletter */}
                        <div className="col-md-6 col-xl-4 wow fadeInUp" data-wow-delay="300ms">
                            <div className="footer-widget footer-widget--mail">
                                <h2 className="footer-widget__title">
                                    Signup for our latest news
                                    <br /> & articles
                                </h2>
                                <form action="#" data-url="MAILCHIMP_FORM_URL" className="footer-widget__newsletter mc-form">
                                    <input type="text" name="EMAIL" placeholder="Email Address" />
                                    <button type="submit">
                                        <i className="icon-right-arrow-2"></i>
                                        <span className="sr-only">submit</span>
                                    </button>
                                </form>
                                <div className="footer-widget__check">
                                    <input type="checkbox" name="save-data" id="save-data" />
                                    <label htmlFor="save-data">
                                        I agree to the <a href="#">Privacy Policy.</a>
                                    </label>
                                </div>
                                <div className="mc-form__response"></div>
                            </div>
                        </div>
                    </div>

                    {/* Contact + Social */}
                    <div className="main-footer__info">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="main-footer__info__inner">
                                    <div className="main-footer__info__pin">
                                        <i className="icon-pin"></i>
                                    </div>
                                    <div className="main-footer__info__location text-white">
                                        <a href="https://maps.app.goo.gl/awwKM26kMFcT6YcRA" 
                                            target="_blank" rel="noopener noreferrer" className="text-white address-link">
                                            259 Nassau St. Suite 2 #552 <br />
                                            Princeton, NJ 08542
                                        </a>
                                    </div>
                                    <ul className="list-unstyled main-footer__info__list">
                                        {contactInfo.map((item, idx) => (
                                            <li key={idx} className="main-footer__info__item">
                                                <div className="main-footer__info__icon">
                                                    <i className={item.icon}></i>
                                                </div>
                                                <div className="main-footer__info__content">
                                                    <p className="main-footer__info__text text-white">
                                                        {item.content}
                                                    </p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            <div className="col-lg-4">
                                <div className="main-footer__info__social">
                                    {socialLinks.map((social, idx) => (
                                        <a key={idx} href={social.href}>
                                            <i className={social.icon}></i>
                                            <span className="sr-only">{social.label}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="main-footer__bottom wow fadeInUp" data-wow-delay="00ms">
                <div className="container">
                    <div className="main-footer__bottom__inner">
                        <p className="main-footer__copyright text-white">
                            &copy; Copyright <span className="dynamic-year"></span> by
                            Homestead Experts.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

// import Image from "next/image";

// const Footer = () => {
//     const footerLinks = [
//         {
//             title: "Links",
//             delay: "100ms",
//             links: [
//                 { label: "About Us", href: "#" },
//                 { label: "Meet the Lawyer", href: "#" },
//                 { label: "Expert Witness", href: "#" },
//                 { label: "Contact", href: "#" },
//             ],
//         },
//         {
//             title: "Explore",
//             delay: "200ms",
//             links: [
//                 { label: "What We Offer", href: "#" },
//                 { label: "Our Story", href: "#" },
//                 { label: "Latest News", href: "#" },
//                 { label: "Help Center", href: "#" },
//             ],
//         },
//     ];

//     const contactInfo = [
//         {
//             icon: "icon-telephone-call-1",
//             content: (
//                 <a
//                     href="tel:+18772443703"
//                     aria-label="Call us at (877) 244-3703"
//                 >
//                     (877) 244-3703
//                 </a>
//             ),
//         },
//         {
//             icon: "icon-mail",
//             content: (
//                 <a href="mailto:info@homesteadexperts.com">
//                     info@homesteadexperts.com
//                 </a>
//             ),
//         },
//     ];

//     const socialLinks = [
//         { href: "https://facebook.com", icon: "icon-facebook", label: "Facebook" },
//         { href: "https://pinterest.com", icon: "icon-pinterest", label: "Pinterest" },
//         { href: "https://twitter.com", icon: "icon-twitter", label: "Twitter" },
//         { href: "https://youtube.com", icon: "icon-youtube", label: "Youtube" },
//     ];

//     return (
//         <footer className="main-footer">
//             <div className="main-footer__bg" style={{ backgroundImage: "url('/assets/images/backgrounds/footer-bg.png')" }}></div>
//             <div className="main-footer__top">
//                 <div className="container">
//                     <div className="row">
//                         {/* Logo + About */}
//                         <div className="col-md-6 col-xl-4 wow fadeInUp" data-wow-delay="00ms">
//                             <div className="footer-widget footer-widget--about">
//                                 <a href="#" className="footer-widget__logo">
//                                     <Image src="/assets/images/logos/homestead-experts-logo-light.png" width={250} height={40}
//                                         alt="Homestead Logo" />
//                                 </a>
//                                 <p className="footer-widget__text">
//                                     Discover a unique approach with our dedicated attorneys,
//                                     committed effective legal solutions.
//                                 </p>
//                             </div>
//                         </div>

//                         {/* Dynamic Link Sections */}
//                         {footerLinks.map((section, index) => (
//                             <div key={index} className="col-md-6 col-xl-2 wow fadeInUp" data-wow-delay={section.delay}>
//                                 <div className="footer-widget footer-widget--links">
//                                     <h2 className="footer-widget__title">{section.title}</h2>
//                                     <ul className="list-unstyled footer-widget__links">
//                                         {section.links.map((link, idx) => (
//                                             <li key={idx}>
//                                                 <a className="text-white" href={link.href}>{link.label}</a>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>
//                         ))}

//                         {/* Newsletter */}
//                         <div className="col-md-6 col-xl-4 wow fadeInUp" data-wow-delay="300ms">
//                             <div className="footer-widget footer-widget--mail">
//                                 <h2 className="footer-widget__title">
//                                     Signup for our latest news
//                                     <br /> & articles
//                                 </h2>
//                                 <form action="#" data-url="MAILCHIMP_FORM_URL" className="footer-widget__newsletter mc-form">
//                                     <input type="text" name="EMAIL" placeholder="Email Address" />
//                                     <button type="submit">
//                                         <i className="icon-right-arrow-2"></i>
//                                         <span className="sr-only">submit</span>
//                                     </button>
//                                 </form>
//                                 <div className="footer-widget__check">
//                                     <input type="checkbox" name="save-data" id="save-data" />
//                                     <label htmlFor="save-data">
//                                         I agree to the <a href="#">Privacy Policy.</a>
//                                     </label>
//                                 </div>
//                                 <div className="mc-form__response"></div>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Contact + Social */}
//                     <div className="main-footer__info">
//                         <div className="row">
//                             <div className="col-lg-8">
//                                 <div className="main-footer__info__inner">
//                                     <div className="main-footer__info__pin">
//                                         <i className="icon-pin"></i>
//                                     </div>
//                                     <div className="main-footer__info__location text-white">
//                                         <a href="https://maps.app.goo.gl/awwKM26kMFcT6YcRA"
//                                             target="_blank" rel="noopener noreferrer" className="text-white">
//                                             259 Nassau St. Suite 2 #552 <br />
//                                             Princeton, NJ 08542
//                                         </a>
//                                     </div>
//                                     <ul className="list-unstyled main-footer__info__list">
//                                         {contactInfo.map((item, idx) => (
//                                             <li key={idx} className="main-footer__info__item">
//                                                 <div className="main-footer__info__icon">
//                                                     <i className={item.icon}></i>
//                                                 </div>
//                                                 <div className="main-footer__info__content">
//                                                     <p className="main-footer__info__text text-white">
//                                                         {item.content}
//                                                     </p>
//                                                 </div>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 </div>
//                             </div>

//                             <div className="col-lg-4">
//                                 <div className="main-footer__info__social">
//                                     {socialLinks.map((social, idx) => (
//                                         <a key={idx} href={social.href}>
//                                             <i className={social.icon}></i>
//                                             <span className="sr-only">{social.label}</span>
//                                         </a>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Footer Bottom */}
//             <div className="main-footer__bottom wow fadeInUp" data-wow-delay="00ms">
//                 <div className="container">
//                     <div className="main-footer__bottom__inner">
//                         <p className="main-footer__copyright text-white">
//                             &copy; Copyright <span className="dynamic-year"></span> by
//                             Homestead Experts.
//                         </p>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;