//@ts-nocheck
import { useState } from "react";
import { NoData } from "src/app/components/NoData";
import { PostDetail } from "../../../entities/detail-post/ui";
import { useQuery } from "react-query";
import { ErrorBoundary } from "../../../app/components/ErrorBoundary";
import { Loader } from "../../../app/components/Loader";
import { useParams } from "react-router-dom";
import { getRoommatePostId } from "../../../shared/model";

export const RoommateDetailContent = () => {
  const [open, setOpen] = useState(false);
  const params = useParams();
  const { isLoading, isError, data, error } = useQuery(
    "POST_DETAIL",
    async () => await getRoommatePostId(params.id!),
    { enabled: !!params.id }
  );

  console.log(data);

  if (isError) {
    return <ErrorBoundary error={error} />;
  }
  if (isLoading) {
    return <Loader />;
  }
  return (
    <>
    { data?.length > 0 
      ? <PostDetail
        open={open}
        setOpen={setOpen}
        data={data?.length > 0 ? data[0] : {}}
      />
      : <NoData />
    }
    </>
    
  );
};
