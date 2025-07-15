import mart from "../assets/images/mart.png"; // Assuming you have an image for the project
import sms from "../assets/images/sms.png"; // Assuming you have an image for the project
import styles from "./projectsection.module.css";
export default function ProjectSection() {
  return (
    <>
      <div div className={styles.container}>
        <h2>My Projects</h2>
        <div className={styles.projectCard}>
          <img src={mart} alt="Student Management System |August 2024|" />
          <div>
            <h3>Hamro Mart (E-commerce Platform) |February 2025| </h3>
            <p>
              <p>Core Technologies Used : Spring Boot, JSE, MySQL</p>
              Built an e-commerce platform inspired by Daraz, leveraging Spring
              Boot for the backend and MySQL for data management. Implemented
              features like product listing, user authentication, add to cart
              and checkout. Ensured a dynamic shopping experience with a
              responsive user interface.
            </p>
            <a
              href="https://github.com/DipakRajPandey/Hamro_mart"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className={styles.projectCard}>
          <img src={sms} alt="Student Management System |August 2024|" />
          <div>
            <h3>Student Management System |August 2024|</h3>
            <p>
              <p>Core Technologies Used:JSE, Java Swing, MySQL</p> Developed a
              Student Management System using JSE, Java Swing, and MySQL.
              Features include adding, updating, deleting, and viewing student
              records. Utilized Java Swing for GUI development and JDBC for
              database integration, reinforcing skills in desktop application
              development
            </p>
            <a
              href="https://github.com/DipakRajPandey/StudentManagementStsytem"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
        <h3>
          For more github{" "}
          <a
            href="https://github.com/DipakRajPandey"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </h3>
      </div>
    </>
  );
}
