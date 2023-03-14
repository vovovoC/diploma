import Data from "../../../../app/pages/filter-housing/Data";
import { Post } from "../../../../app/components/Post";
import { useState } from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "../../../../app/assets/style/index.scss";

export const PostList = () => {
  const [item, setItem] = useState(Data);
  return (
    <div className="wrapper">
      <div className="post-list">
        {item.map((value: any) => (
          <Post item={value} />
        ))}
      </div>
      <Stack spacing={2}>
          <Pagination count={10} color="primary" sx={{m: "2rem auto 3rem"}} />
      </Stack>
    </div>
    
  );
};
