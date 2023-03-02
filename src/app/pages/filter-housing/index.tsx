// @ts-nocheck
import "./index.scss";
import React, { useState } from "react";
import Data from "./Data";
import Post from "./Post";
import Buttons from "./Buttons";
import { render } from "@testing-library/react";

interface IProps {
  children?: number | string | React.ReactNode | Array<any>;
}


const FilterHousingPage = () => {
  const [item, setItem] = useState(Data);

  function check(post:any, obj:any): boolean{
    let keys = Object.keys(obj);
    let res = true;
    keys.forEach((key) => {
      if(post[key] !== obj[key] && obj[key] !== undefined){
        res = false;
      }     
    });
    return res;
  }

  const filter = (obj:any) => {
    const newItem = Data.filter((newVal) => {
      return check(newVal, obj);
    });
    setItem(newItem);
  };
  return (
    <>
      <div className="container-fluid">
        <div className="row m-3" >
          <Buttons
            filter={filter}
            setItem={setItem}
          />
          <Post item={item}/>
        </div>
      </div>
    </>
  );
}

export default FilterHousingPage;