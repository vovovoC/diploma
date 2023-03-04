// @ts-nocheck
import React, { useState } from "react";
import Data from "./Data";
import Category from "./filter-inputs/category-input";
import Amenities from "./filter-inputs/amenities-input";
import City from "./filter-inputs/city-input";
import Gender from "./filter-inputs/gender-input";
import Duration from "./filter-inputs/duration-input";
import Verified from "./filter-inputs/verified-input";
import Price from "./filter-inputs/price-input";
import Rooms from "./filter-inputs/rooms-input";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

let filterItem = {};
const Buttons = ({filter, setItem}) => {
  const [filterElem, setfilterElem] = useState(filterItem);

  const changeFilterItem = (obj) => {
    const newFilterElem = filterElem;
     Object.entries(obj).map(([key, value]) => {
        newFilterElem[key] = value;
      });
      setfilterElem(newFilterElem);
      filter(newFilterElem);
      
  };
  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        <City changeFilterItem={changeFilterItem}/>
        <Category changeFilterItem={changeFilterItem}/>
        <Price changeFilterItem={changeFilterItem}/>
        <Gender changeFilterItem={changeFilterItem}/>
        <Duration changeFilterItem={changeFilterItem}/>
        <Verified changeFilterItem={changeFilterItem}/>
        <Amenities/>
        <Rooms changeFilterItem={changeFilterItem}/>
        <Box sx={{ '& button': { m: 1 } }}>
          <Button variant="contained"  onClick={() => setItem(Data)}>All</Button>
        </Box>
        
      </div>
    </>
  );
};
export default Buttons;



