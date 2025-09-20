import HammerIcon from "../icons/HammerIcon";

const testimonialsData = [
    {
        id: 1,
        img: "assets/images/resources/testi-1-1.jpg",
        alt: "Alen Martin",
        name: "Alen Martin",
        designation: "Customer",
        desc: "Incredibly responsive and quick turnaround when I need it the most.  Sometimes I can speak with an expert the same day",
        delay: "000ms",
    },
    {
        id: 2,
        img: "assets/images/resources/testi-1-2.jpg",
        alt: "Hena Wiano",
        name: "Hena Wiano",
        designation: "Customer",
        desc: "Homestead Experts find and provide quality experts fast.  Their staff is friendly, responsive, and wants to learn about the types of experts I want to work with.",
        delay: "100ms",
    },
    {
        id: 3,
        img: "assets/images/resources/testi-1-3.jpg",
        alt: "Keli Wiliam",
        name: "Keli Wiliam",
        designation: "Customer",
        desc: "Will absolutely use you again. Really like the way you guys operate.",
        delay: "200ms",
    },
    {
        id: 4,
        img: "assets/images/resources/testi-1-1.jpg",
        alt: "Alice Genesis",
        name: "Alice Genesis",
        designation: "Customer",
        desc: "There are many variations passages to luck of Loem Ipsum available to but the majority have live by injected humour, suffered alteration in",
        delay: "300ms",
    },
    {
        id: 5,
        img: "assets/images/resources/testi-1-2.jpg",
        alt: "Alen Martin",
        name: "Alen Martin",
        designation: "Customer",
        desc: "There are many variations passages to luck of Loem Ipsum available to but the majority have live by injected humour, suffered alteration in",
        delay: "000ms",
    },
    {
        id: 6,
        img: "assets/images/resources/testi-1-3.jpg",
        alt: "Hena Wiano",
        name: "Hena Wiano",
        designation: "Customer",
        desc: "There are many variations passages to luck of Loem Ipsum available to but the majority have live by injected humour, suffered alteration in",
        delay: "100ms",
    },
];

const Banner7Testimonial = () => {
    return (
        <>
            <section className="testimonials-one" id="testimonial">
                <div className="testimonials-one__bg"
                    style={{ backgroundImage: "url('/assets/images/shapes/testimonials-1-bg.png')", }}></div>
                <div className="container">
                    <div className="sec-title text-center">
                        <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2">
                            <HammerIcon/>
                            Testimonials
                        </div>

                        <h3 className="sec-title__title bw-split-in-up">
                            See What They Are <br /> <span>Talking About?</span>
                        </h3>
                    </div>

                    <div
                        className="testimonials-one__carousel procounsel-owl__carousel  procounsel-owl__carousel--basic-nav owl-carousel"
                        data-owl-options='{
              "items": 1,
              "margin": 30,
              "loop": false,
              "smartSpeed": 700,
              "nav": false,
              "navText": ["<span>Prev</span>","<span>Next</span>"],
              "dots": false,
              "autoplay": false,
              "responsive": {
                "0": { "items": 1 },
                "768": { "items": 2 },
                "992": { "items": 3 }
              }
            }'>
                        {testimonialsData.map((item) => (
                            <div className="item" key={item.id}>
                                <div className="testimonials-card wow fadeInUp" data-wow-duration="1500ms" data-wow-delay={item.delay}    style={{
                    minHeight: "340px", // ✅ fixed height for equal boxes
                    padding: "20px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                  }}>
                                    <div className="testimonials-card__top">
                                        <div className="testimonials-card__image bw-img-anim-right">
                                            <img src={item.img} alt={item.alt} />
                                        </div>
                                        <div className="testimonials-card__content">
                                            <div className="testimonials-card__quote">
                                                <i className="icon-quote"></i>
                                                <i className="icon-quote"></i>
                                            </div>
                                            <h3 className="testimonials-card__name">{item.name}</h3>
                                            <p className="testimonials-card__designation">
                                                {item.designation}
                                            </p>
                                            <div className="testimonials-card__rating">
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                                <i className="icon-star"></i>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="testimonials-card__desc">{item.desc}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner7Testimonial;