import { strategySteps } from "@/constants/strategySteps";

const Banner4CaseStrategy = () => {
  return (
    <>
      <section style={{ backgroundColor: "#0B1A22", color: "#fff", padding: "60px 20px 60px 170px", }} className="case-strategy">
        <div className="container-fluid case-strategy-container">
          <div className="row mb-5 p-0">
            <h2
              className="sec-title__title p-0 mb-2"
              style={{ fontWeight: "700", color: "#fff" }}
            >
              End-to-End Support for <br /> Your Case Strategy
            </h2>
            {/* <h5 style={{ color: "#fff", fontWeight: "400", marginBottom: "20px" }} className="mt-2 p-0">
                            Compelling Subheadline Can Go Here
            </h5> */}

            <div className="col-12 col-lg-7 p-0">
              <p style={{ color: "#cfd2d4", lineHeight: "1.7", fontWeight:400 }}>
                From expert selection to courtroom support, Homestead is built
                to serve your firm at every stage. We don’t just match you with
                a qualified expert, we manage the process with precision,
                insight, and discretion.
                <br />
                <br />
                Our team goes beyond static directories, actively sourcing the
                right experts, handling coordination, and ensuring every detail
                is buttoned up so you can stay focused on winning the case, not
                chasing down logistics.
              </p>

              <div className="row" style={{ maxWidth: "680px", width: "100%" }}>
                {strategySteps.map((step, index) => (
                  <div className="col-12 col-md-12 mt-4 pe-0" key={index}>
                    <div
                      className="case-strategy-cards"
                      style={{ display: "flex", gap: "30px", justifyContent: "center", alignItems: "center", }}                    >
                      <div
                        style={{
                          width: "80px",
                          height: "80px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          borderRadius: "8px",
                        }}
                      >
                        <img
                          src={step.img}
                          alt={step.alt}
                          width="80"
                          height="80"
                        />
                      </div>
                      <div>
                        <h5 style={{ fontWeight: "600", fontSize: "clamp(18px,4vw,20px)", marginBottom: "10px", color: "#fff", }}>
                          {step.title}
                        </h5>
                        <p style={{ color: "#cfd2d4", fontWeight: 400, fontSize: "clamp(15px,4vw,16px)" }}>
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-12 col-lg-5 d-none d-md-block" style={{
              backgroundImage: "url('/assets/images/backgrounds/bg-support.png')", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "left",
            }}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner4CaseStrategy;
