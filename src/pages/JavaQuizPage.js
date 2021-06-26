import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Quiz.module.css";

export default class JavalQuizPage extends Component {
  state = {
    page: 1,
    rightAnswers: 0,
  };

  pageChanger = () => {
    this.setState({ page: this.state.page + 1 });

    this.props.history.replace({
      ...this.props.location,
      search: `?page=${this.state.page + 1}`,
    });
  };

  render() {
    const { page, rightAnswers } = this.state;

    return (
      <div className={styles.box}>
        {/* ТЕСТЫ */}

        {page === 1 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Что такое ООП?</h2>

            <ul className={styles.list}>
              <li className={styles.list_el}>
                <button
                  className={styles.button}
                  onClick={() => {
                    this.setState({
                      rightAnswers: this.state.rightAnswers + 1,
                    });
                    this.pageChanger();
                  }}
                >
                  Объектно-ориентированное программирование — методология
                  программирования, основанная на представлении программы в виде
                  совокупности объектов, каждый из которых является экземпляром
                  определенного класса, а классы образуют иерархию наследования.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Объектно-ориентированное программирование — так называют любой
                  тип программирования, в котором используются понятия высокого
                  уровня и, в отличие от Assembler, в котором не работают
                  напрямую с ячейками памяти ПК.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Объектно-ориентированное программирование — просто красивое
                  понятие. Если вдуматься, оно не несет дополнительной смысловой
                  нагрузки, просто программисты любят аббревиатуры, так области
                  их знаний выглядят сложнее.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Очень одинокий программист.
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 2 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Что такое класс в Java?</h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Уровень сложности программы. Все операторы делятся на классы в
                  зависимости от сложности их использования.
                </button>
              </li>
              <li className={styles.list_el}>
                <button
                  className={styles.button}
                  onClick={() => {
                    this.setState({
                      rightAnswers: this.state.rightAnswers + 1,
                    });
                    this.pageChanger();
                  }}
                >
                  Базовый элемент объектно-ориентирован­ного программирования в
                  языке Java.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Просто одно из возможных названий переменной.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Такое понятие есть только в C++, в Java такого понятия нет.
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 3 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Как объявить класс в коде?</h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  {"MyClass extends class {}"}
                </button>
              </li>
              <li className={styles.list_el}>
                <button
                  className={styles.button}
                  onClick={() => {
                    this.setState({
                      rightAnswers: this.state.rightAnswers + 1,
                    });
                    this.pageChanger();
                  }}
                >
                  {"class MyClass {}"}
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  {"new class MyClass {}"}
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  {"select * from class MyClass {}"}
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 4 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Для чего используется оператор NEW?</h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Для создания новой переменной.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Для объявления нового класса.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Это антагонист оператора OLD.
                </button>
              </li>
              <li className={styles.list_el}>
                <button
                  className={styles.button}
                  onClick={() => {
                    this.setState({
                      rightAnswers: this.state.rightAnswers + 1,
                    });
                    this.pageChanger();
                  }}
                >
                  Для создания экземпляра класса.
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}

        {page === 5 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              Что означает ключевое слово extends?
            </h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Что это дополнительный модуль класса, который расширяет его
                  свойства.
                </button>
              </li>
              <li className={styles.list_el}>
                <button
                  className={styles.button}
                  onClick={() => {
                    this.setState({
                      rightAnswers: this.state.rightAnswers + 1,
                    });
                    this.pageChanger();
                  }}
                >
                  Что данный класс наследуется от другого.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Что два класса делают одно и то же.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Что это самый большой класс в программе.
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 6 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              Что означает перегрузка метода в Java (overload).
            </h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Изменение поведения метода класса относительно родительского.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Изменение поведения метода класса относительно дочернего.
                </button>
              </li>
              <li className={styles.list_el}>
                <button
                  className={styles.button}
                  onClick={() => {
                    this.setState({
                      rightAnswers: this.state.rightAnswers + 1,
                    });
                    this.pageChanger();
                  }}
                >
                  Несколько методов с одинаковым названием, но разным набором
                  параметров.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Несколько разных классов с одинаковым методом.
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 7 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              Что означает переопределение метода в Java (override).
            </h2>

            <ul>
              <li className={styles.list_el}>
                <button
                  className={styles.button}
                  onClick={() => {
                    this.setState({
                      rightAnswers: this.state.rightAnswers + 1,
                    });
                    this.pageChanger();
                  }}
                >
                  Изменение поведения метода класса относительно родительского.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Изменение поведения метода класса относительно дочернего.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Несколько методов с одинаковым названием, но разным набором
                  параметров.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Несколько разных классов с одинаковым методом.
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 8 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              Чем отличаются static-метод класса от обычного метода класса.
            </h2>

            <ul>
              <li className={styles.list_el}>
                <button
                  className={styles.button}
                  onClick={() => {
                    this.setState({
                      rightAnswers: this.state.rightAnswers + 1,
                    });
                    this.pageChanger();
                  }}
                >
                  Обычный метод класса работает от объекта класса, а
                  static-метод от всего класса.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Поведение обычного метода класса можно изменить в
                  классе-наследнике, а поведение static-метода нельзя.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Обычный метод класса можно переопределить, а static-метод
                  нельзя.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Static-метод класса можно вызывать только внутри класса, а
                  обычный - в любой части кода.
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 9 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              Как вызвать static-метод внутри обычного?
            </h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Никак, static-метод можно вызвать только от объекта класса.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Можно, надо перед этим перегрузить обычный метод класса.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Можно, надо перед этим переопределить обычный метод класса.
                </button>
              </li>
              <li className={styles.list_el}>
                <button
                  className={styles.button}
                  onClick={() => {
                    this.setState({
                      rightAnswers: this.state.rightAnswers + 1,
                    });
                    this.pageChanger();
                  }}
                >
                  Можно, ничего дополнительно делать не надо.
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 10 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              Как вызвать обычный метод класса внутри static-метода?
            </h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Можно, надо перед этим перегрузить обычный метод класса.
                </button>
              </li>
              <li className={styles.list_el}>
                <button
                  className={styles.button}
                  onClick={() => {
                    this.setState({
                      rightAnswers: this.state.rightAnswers + 1,
                    });
                    this.pageChanger();
                  }}
                >
                  Никак, static-метод не работает с объектом класса.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Можно, надо перед этим переопределить обычный метод класса.
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Можно, ничего дополнительно делать не надо.
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}

        {page === 11 && (
          <div className={styles.box}>
            <button className={styles.button}>
              <Link to="/" className={styles.link}>
                Вернуться назад
              </Link>
            </button>
            <h2>Твой результат {rightAnswers * 10}%</h2>
          </div>
        )}

        {/* ТЕСТЫ */}
      </div>
    );
  }
}
