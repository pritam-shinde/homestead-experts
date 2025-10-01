import Image from "next/image";
import HammerIcon from "../icons/HammerIcon";

const teamMembers = [
  {
    id: 1,
    name: "Seth Lefberg",
    designation: "Founder & CEO",
    img: "/assets/images/team/team-1-1.jpg",
    delay: "000ms",
  },
  {
    id: 2,
    name: "Heather Durbin",
    designation: "Senior Case Manager",
    img: "/assets/images/team/team-1-2.png",
    delay: "100ms",
  },
  {
    id: 3,
    name: "Melissa Rosen",
    designation: "Expert Witness Recruiter",
    img: "/assets/images/team/team-1-3.jpg",
    delay: "200ms",
  },

];

const socialLinks = [
  { href: "https://facebook.com", icon: "icon-facebook", label: "Facebook" },
  { href: "https://pinterest.com", icon: "icon-pinterest", label: "Pinterest" },
  { href: "https://twitter.com", icon: "icon-twitter", label: "Twitter" },
  { href: "https://youtube.com", icon: "icon-youtube", label: "Youtube" },
];

const Banner6Team = () => {
  return (
    <section className="team-one">
      <div className="container">
        <div className="sec-title text-center">
          <div className="sec-title__tagline bw-split-in-up-fast d-inline-flex align-items-center gap-2 text-white">
            <HammerIcon />
            Our Expertise
          </div>

          <h3 className="sec-title__title bw-split-in-up text-white">
            Meet Our Experienced <br /> <span>Attorney Lawyers</span>
          </h3>
        </div>

        <div
          className="team-one__carousel procounsel-owl__carousel procounsel-owl__carousel--basic-nav owl-carousel"
          data-owl-options='{
              "items": 1,
              "margin": 30,
              "loop": false,
              "smartSpeed": 700,
              "nav": false,
              "navText": ["<span className=\"fa fa-angle-left\"></span>","<span className=\"fa fa-angle-right\"></span>"],
              "dots": true,
              "autoplay": false,
              "responsive": {
                  "0": {"items": 1},
                  "768": {"items": 2},
                  "992": {"items": 3}
              }
          }'
        >
          {teamMembers.map((member) => (
            <div className="item" key={member.id}>
              <div
                className="team-card wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay={member.delay}
              >
                <div className="team-card__image bw-img-anim-left">
                  <div className="team-card__content">
                    <h3 className="team-card__title">
                      <a href="#">{member.name}</a>
                    </h3>
                    <p className="team-card__designation">{member.designation}</p>
                  </div>
                  <div className="team-card__hover">
                    <span className="team-card__hover__btn">
                      <i className="icon-plus"></i>
                    </span>
                    <div className="team-card__hover__social">
                      {socialLinks.map((social, index) => (
                        <a key={index} href={social.href}>
                          <i className={social.icon}></i>
                          <span className="sr-only">{social.label}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                  <Image src={member.img} alt={member.name} width={310} height={390} style={{ objectFit: "cover" }} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <a href="/our-team/" className="procounsel-btn text-uppercase">
            <i>View All</i>
            <span>View All</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Banner6Team;