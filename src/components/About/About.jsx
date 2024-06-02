import React from "react";
import aboutImg from "../../assets/images/about.png";
import aboutCardImg from "../../assets/images/about-card.png";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="container About">
      <div className="flex justify-between gap-[50px] lg:gap-[130px] xl:gap-0 flex=col lg:flex-row">
        <div className="relative w-3/4 lg:w-[650px] order-2 lg:order-1">
          <img src={aboutImg} alt="" />
          <div className="absolute z-20 bottom-4 w-[200px] md:w[30px] right [-30%] md;right-[-7%] lg:right-[22%]">
            <img src={aboutCardImg} alt="" />
          </div>
        </div>

        <div
          style={{
            fontFamily: "TimesNewRoman",
            fontSize: "90px",
            textAlign: "left",
            marginLeft: "200px",
          }}
        >
          <h2
            className="heading  "
            style={{
              fontFamily: "TimesNewRoman",
              fontSize: "62px",
              textAlign: "left",
            }}
          >
            Proud to be one of the nations best
          </h2>
          <p
            className="text-[16px] leading-[30px] w-[900px] font-[350] text-textColor mt-[16px]"
            style={{
              fontFamily: "cursive",
              fontSize: "20px",
              fontWeight: "bold",
              padding: "10px",
              color: "#e5eaf5",
              textAlign: "left",
            }}
          >
            Nationally Ranked: Top public hospital for 30 years by U.S. News
            World Report.Texas Finest #1 public hospital in Texas for excellence
            in patient care.Trusted Recognition: Decades of consistent quality
            healthcare delivery. Your Choice for Health. Experience the best
            public hospital care in Texas. Committed to Excellence: 30 years
            strong, serving our community with pride.
          </p>
          <p
            className="text-[16px] leading-[30px] w-[900px] font-[350] text-textColor mt-[16px]"
            style={{
              fontFamily: "cursive",
              fontSize: "20px",
              fontWeight: "bold",
              padding: "1px",
              color: "#e5eaf5",
              textAlign: "left",
            }}
          >
            Our best is something we strive for each day, caring for our
            patients-not looking back at what we accomplished but towards what
            we can do tomorrow. Providing the best lorem ipsum dolor sit amet,
            consectur adpisicing elit. aliq, mod
          </p>

          <Link to="/">
            <button className="btn">Learn More</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
