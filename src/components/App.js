import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { routes } from "../router";
import { Suspense } from "react";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} {...route} />
            ))}
          </Switch>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
