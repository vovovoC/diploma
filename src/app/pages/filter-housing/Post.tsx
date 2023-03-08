// @ts-nocheck
import React from "react";
import {duration} from '../../shared/filter';

const Post = ({ item }) => {
  return (
    <>
      <div className="container-fluid">
        <div className="row justify-content-center">
          {item.map((Val) => {
            return (
              <div
                className="col-md-4 col-sm-6 card my-3 py-3 border-0"
                key={Val.id}>
                    <b>City: </b>{Val.city}<br/>
                    <b>Location: </b> {Val.location}<br/>
                    <b>Price: </b>{Val.price}тг<br/>
                    <b>Category: </b>{Val.category}<br/>
                    <div><b>Amenities: </b>{Val.amenities.map((e) => {
                      return (<span key={e}>{e}, </span>)
                    })}</div>
                    <b>Duraction: </b>{Val.duraction}<br/>
                    <b>Rooms: </b>{Val.rooms}<br/>
                    <b>Gender: </b>{(Val.gender==1)?"Male":"Female"}<br/>
                    <b>Verified: </b>{String(Val.verified)}<br/>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Post;