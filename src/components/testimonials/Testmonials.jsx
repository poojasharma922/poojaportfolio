import React from "react";
import "./testimonial.css";
import Image1 from "../../assets/price-1.svg";
import Image2 from "../../assets/price-2.svg";
import Image3 from "../../assets/price-3.svg";

const Testmonials = () => {
  return (
    <div>
      <section className="more container section" id="moreinfo">
        <h2 className="section__title" style={{textAlign: 'center'}}>More About Me</h2>

        <div className="more__container grid">
          <div className="more__item">
            <img src={Image1} alt="" className="more__img" />
            <h3 className="more__plan">CoCurricular Activities</h3>
            <p className="more__title">
              <ul class="text-start ps-0">
              <li>Member of Bhangra team (XII)</li>
              <li> Kho-kho Team (won Bronze medal)- XII</li>
              <li>House Leader (2019)</li>
                <li>Rangoli making Competition ( 2nd position) -X</li>
                <li>Card making Competition ( 2nd position) -X</li>
                
              </ul>
            </p>
          </div>

          <div className="more__item best">
            <img src={Image2} alt="" className="more__img" />
            <h3 className="more__plan">Awards/Certificates</h3>
            <p className="more__title">
              <ul class="text-start ps-0">
                <li>Meritorious Award in Physics & Maths-XII</li>
                <li>Student of the Year Award - 2018</li>
                <li>Certificate of Merit - X</li>
              </ul>
            </p>
          </div>

          <div className="more__item">
            <img src={Image3} alt="" className="more__img" />
            <h3 className="more__plan">Strengths</h3>
            <p className="more__title">
              <li>Positive Attitude</li>
              <li>Problem Solving</li>
              <li>Time Management</li>
              <li>Good Listener</li>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testmonials;
