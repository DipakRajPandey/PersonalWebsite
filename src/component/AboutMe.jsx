import botstraplogo from "../assets/images/bootstraplogo.jpeg";
import css from "../assets/images/csslogo.jpeg";
import gitlogo from "../assets/images/githublogo.png";
import html from "../assets/images/htmllogo.png";
import java from "../assets/images/javalogo.png";
import javascript from "../assets/images/javascriptlogo.png";
import react from "../assets/images/reactlogo.png";
import spring from "../assets/images/springlogo.png";
import sql from "../assets/images/sqllogo.png";
import styles from "./aboutme.module.css";

export default function AboutMe() {
  const tech = [
    botstraplogo,
    css,
    gitlogo,
    html,
    java,
    javascript,
    react,
    spring,
    sql,
  ];
  return (
    <>
      <div className={styles.sliderContainer}>
        <h2>Technologies I Know</h2>
        <div className={styles.sliderWrapper}>
          <div className={styles.slider}>
            {tech.concat(tech).map((logo, index) => (
              <img src={logo} alt="tech-logo" key={index} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
