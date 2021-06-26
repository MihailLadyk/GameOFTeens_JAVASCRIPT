import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";

import React, { Component } from "react";

export default class HomePage extends Component {
  componentDidMount() {}
  render() {
    return (
      <div className={styles.box}>
        <h1>Test your skills!</h1>
        <button className={styles.button}>
          <Link to="/pythonQuiz" className={styles.link}>
            Python
          </Link>
        </button>
        <hr />
        <button className={styles.button}>
          <Link to="/CsharpQuiz" className={styles.link}>
            C#
          </Link>
        </button>
        <hr />
        <button className={styles.button}>
          <Link to="/JavaQuiz" className={styles.link}>
            Java
          </Link>
        </button>
      </div>
    );
  }
}
