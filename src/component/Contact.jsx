import styles from "./contact.module.css";

export default function Contact() {
  return (
    <div className={styles.container}>
      <h2>Contact At</h2>
      <ul>
        <li>
          <a href="mailto:youremail@example.com">Gmail</a>{" "}
          dipakrajpandey31@gmail.com
        </li>
        <li>
          <a href="tel:+977-9862460349">Phone</a>+977-9862460349
        </li>
        <li>
          <a
            href="https://github.com/DipakRajPandey"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dipak-raj-pandey-19224a239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <footer className={styles.footer}>
        <p>
          &copy; {new Date().getFullYear()} Dipak Raj Pandey. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
}
