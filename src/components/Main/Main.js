import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "../../routes";
import { MainLayout } from "../../components";

const Main = () => {
  return (
    <div>
      <Switch>
        {routes.map((route) => {
          return (
            <Route
              path={route.path}
              exact={route.exact}
              component={(props) => {
                const Comp = route.component;
                return <MainLayout title={route.title} routerProps={props} componentProps={route.componentProps}>{Comp}</MainLayout>;
              }}
            />
          );
        })}
      </Switch>
    </div>
  );
};

export default Main;
