import { CategoryBar } from "../../entities/category/ui";
import { PostList } from "../../entities/post-list/ui";

export const FilterContent = () => {
  return (
    <div className="wrapper">
      <CategoryBar />
      <PostList />
    </div>
  );
};
