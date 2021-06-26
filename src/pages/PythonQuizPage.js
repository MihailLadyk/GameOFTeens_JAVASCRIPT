import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from "./Quiz.module.css";

export default class PythonQuizPage extends Component {
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
            <h2 className={styles.text}>Какая библиотека отвечает за время?</h2>

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
                  time
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  localtime
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  clock
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Time
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 2 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Что будет результатом этого кода?</h2>
            <p className={styles.text}>
              {"x = 23 num = 0 if x > 10 else 11 print(num)"}
            </p>
            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  23
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
                  0
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  11
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Ошибка
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 3 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Где правильно создана переменная?</h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  int num = 2
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Нет подходящего варианта
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  var num = 2
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
                  num = float(2)
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 4 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              Какая функция выводит что-либо в консоль?
            </h2>

            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  write();
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  log();
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
                  print();
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  out();
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}

        {page === 5 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Какие ошибки допущены в коде ниже?</h2>
            <p className={styles.text}>
              def factorial(n): if n == 0: return 1 else: return n * factorial(n
              - 1) print(factorial(5))
            </p>
            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Функция не может вызывать сама себя
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
                  В коде нет никаких ошибок
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Необходимо указать тип возвращаемого значения
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Функция всегда будет возвращать 1
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 6 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Что будет показано в результате?</h2>
            <p className={styles.text}> name = "John" print('Hi, %s' % name)</p>
            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  "Hi, name"
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  "Hi, "
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
                  "Hi, John"
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Ошибка
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 7 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              Сколько библиотек можно импортировать в один проект?
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
                  Неограниченное количество
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Не более 3
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Не более 10
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Не более 23
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 8 && (
          <div className={styles.box}>
            <h2 className={styles.text}>
              Как получить данные от пользователя?
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
                  Использовать метод input()
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Использовать метод get()
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Использовать метод cin()
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Использовать метод read()
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 9 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Что покажет этот код?</h2>
            <p className={styles.text}>
              for j in 'Hi! I\'m mister Robert': if j == '\'': print("Найдено")
              break else: print ("Готово")
            </p>
            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Ошибку, так как i не присвоена
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Числа: 1, 3 и 5
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Числа: 0, 2 и 4
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
                  Числа: 1 и 3
                </button>
              </li>
            </ul>
            {page < 11 && <h1 className={styles.text}>{page}/10</h1>}
          </div>
        )}
        {page === 10 && (
          <div className={styles.box}>
            <h2 className={styles.text}>Что покажет этот код?</h2>
            <p className={styles.text}>
              {" "}
              for i in range(5): if i % 2 == 0: continue print(i)
            </p>
            <ul>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  Ошибку в коде
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
                  "Найдено"
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  "Найдено" и "Готово"
                </button>
              </li>
              <li className={styles.list_el}>
                <button className={styles.button} onClick={this.pageChanger}>
                  "Готово"
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
