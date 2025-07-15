import logo from "../assets/images/dipak3.jpg";
import styles2 from "./aboutme.module.css";
import styles from "./home.module.css";
export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.leftcontainer}>
          <h3>Hey i'm </h3>
          <h4>Dipak Raj Pandey</h4>
          <p> Software Engineer / Student / Learner</p>
          <div className={styles2.container}>
            <h2>About Me</h2>
            <p>
              Hello! I'm Dipak Raj Pandey, a passionate software engineer,
              student, and lifelong learner. I enjoy solving real-world problems
              using technology, especially in java and web systems.
            </p>
            <p>
              I'm currently exploring full-stack development using React.js,
              Spring Boot, and modern tools. I love building clean, functional
              apps that make an impact.
            </p>
          </div>
        </div>
        <div className={styles.rightcontainer}>
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
}
