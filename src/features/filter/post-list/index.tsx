import { CategoryBar } from "../../../entities/category/ui";
import { PostList } from "../../../entities/post/ui";
import "../../../app/assets/style/index.scss"

export const FilterContent = () => {
  return (
    <div className="wrapper">
      <CategoryBar />
      <PostList />
    </div>
  );
};
