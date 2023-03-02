import "./index.scss";
import React from "react";

interface IProps {
  children?: number | string | React.ReactNode | Array<any>;
}
/* eslint-disable react/prefer-stateless-function */

class FilterHousingPage extends React.PureComponent<IProps> {
  render() {
    return (
      <div className="filter">
        <input type="text" />
      </div>
    );
  }
}

export default FilterHousingPage;