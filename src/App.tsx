// @ts-nocheck
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { compose } from "redux";
import AuthPage from "./app/pages/auth/index";
import FilterHousingPage from "./app/pages/filter-housing/index";
import { NotFoundPage } from "./app/pages/not-found/index";
import injectReducer from "./app/utils/injectReducer";

import { routes } from "./app/routes/index";

// const renderRoutes = (routesRender: any) =>
//   routesRender.map((route: { [x: string]: any; type: any }) => {
//     const { type: Component, ...otherProps } = route;
//     return <Component key={otherProps.path} {...otherProps} />;
//   });

// const routesPaths = (routesPath: any) =>
//   routesPath.map((route: { path: any }) => route.path);
// const App = () => {
//   const publicPaths = routesPaths(routes);
//   return (
//     <Router>
//       <Routes>
//         <Route exact path={publicPaths}>
//           <AuthPage>{renderRoutes(routes)}</AuthPage>
//         </Route>
//         <Route path="*">
//           <NotFoundPage />
//         </Route>
//       </Routes>
//     </Router>
//   );
// };

// const withReducer = injectReducer({
//   key: "app",
//   reducer: {},
// });

// export default compose(withRouter, withReducer)(App);
const App: React.FunctionComponent = () => {
  return (
    <div>
      <FilterHousingPage/>
    </div>
  );
};

export default App;