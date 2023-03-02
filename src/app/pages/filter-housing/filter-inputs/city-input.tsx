// @ts-nocheck
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const city = [
    { name: 'Almaty' },
    { name: 'Astana' },
    { name: 'Aktau' },
    { name: 'Taraz' },
    { name: 'Aktobe' },
    { name: 'Shymkent' },
    { name: 'Karaganda' },
    { name: 'Oskemen' },
    { name: 'Semey' },
    ];


export default function City({changeFilterItem}) {
    const options = city.map((option) => {
        const firstLetter = option.name[0].toUpperCase();
        return {
          firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
          ...option,
        };
      });
      
      
      function addCityFilter(e) {
        let newFilter = {city: undefined};
        newFilter.city = e.target.innerText;

        
        changeFilterItem(newFilter);
      }
    return (
        <Autocomplete id="city"
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.name}
        sx={{ width: 150}}
        size="small"
        onChange={addCityFilter}
        renderInput={(params) => <TextField {...params}  label="City"/>}
        />
    );
};


  
