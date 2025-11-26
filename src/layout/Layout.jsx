import Styles from "../layout/Layout.module.css";

function Layout({ children }) {
  return (
    <div>
      <header className={Styles.header}>
        <h1>Contact App</h1>
        <p>
          <a href="https://botostart.ir">Botostart</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={Styles.footer}>
        <p>Developed By Alireza Ebrahimi</p>
      </footer>
    </div>
  );
}

export default Layout;
