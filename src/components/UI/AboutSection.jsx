import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/marta.jpg";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
             
              <p className="section__description">
              Welcome to Women in Soccer News, your ultimate source for the latest updates and insights on women's soccer around the world. Our passion for the beautiful game drives us to shine a spotlight on the remarkable achievements, inspiring stories, and groundbreaking progress made by women in this sport.
              At Women in Soccer News, we are dedicated to promoting and celebrating the incredible accomplishments of female soccer players, coaches, referees, administrators, and all individuals involved in the women's soccer community. Our mission is to provide a platform that highlights the strength, skill, and determination of women athletes, breaking barriers and challenging stereotypes in the world of soccer.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class=""></i> 
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class=""></i> 
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class=""></i> 
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class=""></i> 
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
