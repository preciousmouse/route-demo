import React, { useCallback, useEffect, useState } from 'react';
import { HashRouter, withRouter, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import { rootRouteConfig } from './route';
import { routeConfig, routePathEnum } from './types/types';

interface SwitchRouterProps extends RouteComponentProps {
  rootRoute: routeConfig,
}
const SwitchRoute = (props: SwitchRouterProps) => {
  const { rootRoute, history, location, match, staticContext, ...rest } = props;
  const [children, setChildren] = useState<(React.ReactElement | React.FunctionComponent)[]>([]);

  const buildChildren = useCallback((route: routeConfig, parentPath = "") => {
    if (!route) return [];

    const { indexRoutePath, component: Component, path, exact, childRoutes } = route;
    let children: (React.ReactElement | React.FunctionComponent)[] = [];
    const absolutePath = `${parentPath}/${path.trim()}`.replace(/\/+/g, "/");
    if (indexRoutePath) {
      const toPath = `${absolutePath}/${indexRoutePath}`.replace(/\/+/g, "/");
      children.push(<Redirect key={absolutePath} exact from={absolutePath} to={toPath} />);
    } else if (Component) {
      children.push(
        <Route
          key={absolutePath}
          path={absolutePath}
          exact={exact}
          render={props => <Component {...props} {...rest} />}
        />
      );
    }

    if (childRoutes) {
      children = childRoutes
        .map(childRoute => buildChildren(childRoute, absolutePath))
        .reduce((prev, cur) => prev.concat(cur), children);
    }
    return children;
  }, [rest]);

  useEffect(() => {
    let childrenNodes = buildChildren(rootRoute);
    childrenNodes.push(//匹配404，展示错误页
      <Redirect key={'404'} to={routePathEnum.ERROR} />
    );
    setChildren(childrenNodes);
  }, [buildChildren, rootRoute]);

  return (
    <Switch>{children}</Switch>
  );
}

const SwitchRouteWithRouter = withRouter(SwitchRoute);
export const App = () => {
  return (
    <HashRouter hashType="noslash">
      <SwitchRouteWithRouter rootRoute={rootRouteConfig} />
    </HashRouter>
  );
}

export default App;
