import React, { useEffect, useState } from "react";
import { RoommatePost } from "../../../../app/components/RoommatePost";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import Backdrop from "@mui/material/Backdrop";
import { RoommatePostDetail } from "../../../../entities/detail-post/ui/post-detail-roommate";

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
  open: (id: number | string) => void;
}
export const RoommatePostList = ({ data, setPage, open }: Props) => {
  const [openDetail, setOpenDetail] = useState(false);

  useEffect(() => {
    // if(openDetail){
    //   open(data?.id)
    // }
  }, [openDetail, data]);
  return (
    <div className="wrapper">
      <div className="post-list">
        {Array.isArray(data?.data) &&
          data?.data?.map((value: any, index: number) => (
            <div key={index}>
              <Backdrop
                sx={{
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                  backgroundColor: "rgba(217, 217, 217, 0.1);",
                  width: "100vw",
                  height: "100vh",
                }}
                open={openDetail}
              >
                <div>
                  <RoommatePostDetail
                    data={{}}
                    fn={() => {
                      setOpenDetail(false);
                    }}
                  />
                </div>
              </Backdrop>
              <RoommatePost
                item={value}
                fn={() => {
                  setOpenDetail(true);
                }}
              />
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
