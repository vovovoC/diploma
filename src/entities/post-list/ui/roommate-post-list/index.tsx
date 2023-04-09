import * as React from "react";
import { RoommatePost } from "../../../../app/components/RoommatePost";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Backdrop from '@mui/material/Backdrop';
import {  RoommatePostDetail } from "../../../../entities/detail-post/ui/post-detail-roommate";

import "./index.scss";
interface Data {
  created_date: string;
  description: string;
  image: string[];
  location: string;
  price: number;
  title: string;
}
interface Props {
  data: {
    lastPage: number;
    data: Data[];
  };
  setPage: (p: number) => {};
}
export const RoommatePostList = ({ data, setPage }: Props) => {
  const [openRoommateDetail, setOpenRoommateDetail] = React.useState(false);
  const handleToggleOpenRoommateDetail = () => {
    setOpenRoommateDetail(!openRoommateDetail);
  };
  const handleCloseRoommateDetail = () => {
    setOpenRoommateDetail(false);
  };
  return (
    <div className="wrapper">
      <div className="post-list">
        {Array.isArray(data?.data) &&
          data?.data?.map((value: any, index: number) => (
            <div key={index}>
                <Backdrop 
                  sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: "rgba(217, 217, 217, 0.1);", width: "100vw", height: "100vh"}}
                  open={openRoommateDetail}
                >
                  <div>
                    <RoommatePostDetail fn={handleCloseRoommateDetail}/>
                  </div>
              </Backdrop>
              <RoommatePost item={value} fn={handleToggleOpenRoommateDetail}/>
            </div>
          ))}
      </div>
      <Stack spacing={2}>
        <Pagination
          count={data?.lastPage || 1}
          color="primary"
          sx={{ m: "2rem auto 3rem" }}
          onChange={(_e, p) => {
            setPage(p);
          }}
        />
      </Stack>
    </div>
  );
};
