import { lazy } from "react";

export const urls = {
  home: "/",
  pythonQuiz: "/pythonQuiz",
  javaQuiz: "/JavaQuiz",
  CsharpQuiz: "/CsharpQuiz",
};

export const routes = [
  {
    path: urls.home,
    exact: true,
    component: lazy(() => import("./pages/HomePage")),
  },
  {
    path: urls.pythonQuiz,
    exact: true,
    component: lazy(() => import("./pages/PythonQuizPage")),
  },
  {
    path: urls.CsharpQuiz,
    exact: true,
    component: lazy(() => import("./pages/CsharpQuizPage")),
  },
  {
    path: urls.htmlQuiz,
    exact: true,
    component: lazy(() => import("./pages/JavaQuizPage")),
  },
];
