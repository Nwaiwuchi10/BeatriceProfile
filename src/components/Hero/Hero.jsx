import React from "react";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import whatsapp from "../../assets/whatsapp.png";
import { IoCall } from "react-icons/io5";
import { SiGmail } from "react-icons/si";
import "./Hero.css";
const Hero = () => {
  const phoneNumber = "+16462720134";
  const WhatsappClick = () => {
    const url = `https://wa.me/${phoneNumber}`;
    window.open(url, "_blank");
  };
  return (
    <section className={`paddings ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        <div className={css.upperElements}>
          <motion.span
            className="primaryText"
            variants={fadeIn("right", "tween", 0.2, 1)}
          >
            Hey There,
            <br />
            I'm Beatrice Charlotte Lee.
          </motion.span>
          <motion.span
            // className={css.sec}
            className="secondaryText"
            // style={{ width: "55%" }}
            variants={fadeIn("left", "tween", 0.4, 1)}
          >
            Beatrice Charlotte Lee is an investment advisor with over 15 years
            of experience,
            <br />
            dealing and investing in crypto currency and other related financial
            markets.
            <br />
            She is a very professional stock broker who executes financial
            transactions to registered securities broker.
          </motion.span>
        </div>
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={css.person}
        >
          <div className={css.personwhy}>
            <motion.img
              variants={slideIn("up", "tween", 0.5, 1.3)}
              src="./hdc.jpeg"
              // src="/bety.jpeg"
              alt=""
              className={css.personimgdiv}
            />
          </div>
        </motion.div>
        <br />

        <div className={css.number}>+16462720134</div>

        {/* <br /> */}

        <a className={css.email} href="mailto:beatricecharlottelee@gmail.com">
          {/* <span>
            {" "}
            <SiGmail style={{ color: "black" }} />
          </span>{" "} */}
          beatricecharlottelee@gmail.com
        </a>
        <div className={css.lowerElements}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={css.experience}
          >
            <div className="primaryText">15</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={css.certificate}
          >
            <img src="./certificate.png" alt="" />
            <span>CERTIFIED FINANCIAL CONSULTANT</span>
            <span></span>
          </motion.div>
        </div>
      </motion.div>
      <div className="whatsapp-img-div">
        <div className="whatsapp-img-size" onClick={WhatsappClick}>
          <img src={whatsapp} alt="whatsapp" className="whatsapp-img" />
        </div>{" "}
      </div>
    </section>
  );
};

export default Hero;
