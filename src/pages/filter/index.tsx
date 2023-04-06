import { createTheme } from "@mui/material";
import Layout from "../../app/components/Layout";
import { RoomPostListContent, RoommatePostListContent} from "../../features";
import { RoomCategoryContent, RoommateCategoryContent } from "../../features";
interface Props {
  type: string;
}
export const FilterPage = ({ type }: Props) => {
  const theme = createTheme();
  //condition if click acc show acc posts, if click room show room
  return (
    <Layout theme={theme}>
        {type == "renter" 
            ?
            (<div className="wrapper">
                <RoommateCategoryContent />
                <RoommatePostListContent />
            </div>)
            :          
            (<div className="wrapper">
                <RoomCategoryContent />
                <RoomPostListContent />
            </div>)
          }
    </Layout>
  );
};
