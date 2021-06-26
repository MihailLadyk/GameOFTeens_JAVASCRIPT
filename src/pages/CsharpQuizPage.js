import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Quiz.module.css";

export default class CsharpQuizPage extends Component {
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
            <h2 className={styles.text}>Где правильно создана переменная?</h2>

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
                  char symbol = 'A';
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  $x = 10;
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  int num = "1";
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  x = 0;
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 2 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Какие циклы существуют в языке C#?</h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  for, while
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
                  for, while, do while, foreach
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  for, while, do while
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  for, while, foreach
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 3 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              Где верно происходит вывод данных в консоль?
            </h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Console.write("Hi");
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  сonsole.log("Hi");
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  print("Hi");
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
                  Console.WriteLine("Hi");
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 4 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              При каком условии результат будет равен значению true?
            </h2>
            <p className={styles.text}>int a = 1, b = 5; bool some = false;</p>
            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  {"  (some && a != 2) || b > 5"}
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  {"(b <= 5 || a == 3) && some"}
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
                  {"(b > 5 && a <= 3) || (!some || a < 1)"}
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  {"some || a == 4 || b < 3"}
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}

        {page === 5 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Что делает try-catch?</h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Работает с файлами
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
                  Работает с исключениями
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Работает с базой данных
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Работает с классами
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 6 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Где правильно создан массив?</h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  int arr[] = {(2, 5)};
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  int arr = {(2, 5)};
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
                  int[] arr = new int [2] {(2, 5)};
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  int arr = [2, 5];
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 7 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Какие типы переменных существуют?</h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  int, char, bool, float, double
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  int, char, bool, string
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  int, char, bool, float, double, uint, short
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
                  Все перечисленные
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 8 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Что такое перегрузка методов?</h2>

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
                  Использование одного имени для разных методов
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Передача слишком больших данных в функцию
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Передача слишком большого файла через return
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Использование слишком многих методов
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 9 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              Для чего можно использовать язык C#?
            </h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Для создания веб сайтов
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Для создания программ под ПК
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Для написания игр
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
                  Всё перечисленное
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 10 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              В чем отличие между break и continue?
            </h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Нет отличий
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
                  Continue пропускает итерацию, break выходит из цикла
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Continue работает только в циклах, break дополнительно в
                  методах
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Break используется в Switch case, а continue в циклах
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

            {rightAnswers === 10 && (
              <h2>
                Ти попав в яблучко - цей напрямок ідеально підходить для тебе
              </h2>
            )}

            {rightAnswers === 8 && (
              <h2>
                Ти майже впорався. Відчуваєш це твоє? Обирай цей курс! Маєш
                сумніви - спробуй інший напрямок
              </h2>
            )}
            {rightAnswers === 9 && (
              <h2>
                Ти майже впорався. Відчуваєш це твоє? Обирай цей курс! Маєш
                сумніви - спробуй інший напрямок
              </h2>
            )}
            {rightAnswers < 8 && (
              <h2>
                Схоже цей напрямок тобі не по душі. Обирай іншу категорію і
                спробуй свої сили в чомусь новому
              </h2>
            )}
          </div>
        )}

        {/* ТЕСТЫ */}
      </div>
    );
  }
}
