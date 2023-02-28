import "./index.scss";
import React from "react";

interface IProps {
  children?: number | string | React.ReactNode | Array<any>;
}
/* eslint-disable react/prefer-stateless-function */

class AuthPage extends React.PureComponent<IProps> {
  render() {
    const { children } = this.props;
    return (
      <div>
        {children}
        <p>login page </p>
      </div>
    );
  }
}

export default AuthPage;
