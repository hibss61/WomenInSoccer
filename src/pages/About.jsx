import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";


import aboutImg from "../assets/all-images/slider-img/1.jpg"
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={aboutImg} alt="" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  
                </h2>

                <p className="section__description">
                We strive to keep you informed and up-to-date with the latest developments in women's soccer. Our team of passionate writers and journalists work tirelessly to bring you breaking news, match reports, exclusive interviews, and in-depth analysis of women's soccer events, leagues, and players from every corner of the globe.
                </p>

                <p className="section__description">
                Beyond being a news platform, Women in Soccer News aims to inspire and empower individuals, regardless of gender, to embrace their love for the sport and pursue their dreams within soccer. By showcasing the achievements of women in the game, we hope to encourage young talents to pursue their passion for soccer without limitations, and to promote equal opportunities for women within the sport.
                </p>

                <div className=" d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i class=""></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle"></h6>
                    <h4></h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <BecomeDriverSection />

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle"></h6>
              <h2 className="section__title"></h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
