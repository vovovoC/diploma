import "./index.scss";
import user from "../../../../app/assets/images/user1.png";
import CommentIcon from "@mui/icons-material/Comment";
import FavoriteIcon from "@mui/icons-material/FavoriteBorderOutlined";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
interface Props {
  data: any;
  fn: () => void;
}
export const RoommatePostDetail = ({ data, fn }: Props) => {
  return (
    <div className="user-anketa roommate-detail">
      <div className="user-anketa-right roommate-post-right">
        <div className="right-anketa-header">
          <div className="anketa-header-title roomate-anketa-header-title">
            Hi, I’m Madina Alzhan
          </div>
          <div className="anketa-header-age">
            24 <div>.</div> Female
          </div>
        </div>
        <div className="anketa-body user-anketa-body">
          <table>
            <tbody>
              <tr>
                <th>About</th>
                <td>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it
                </td>
              </tr>
              <tr>
                <th>Work</th>
                <td>Project Engineer</td>
              </tr>
              <tr>
                <th>Lifestyle</th>
                <td className="anketa-lifestyle">
                  <ul>
                    <li>extroverted</li>
                    <li>artist/creative</li>
                    <li>health/wealness</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
          <p className="post-detail-roommate-title">
            <b>I'm looking for a room</b>
          </p>
          <table>
            <tbody>
              <tr>
                <th>Target date</th>
                <td>Jun 29, 2022 - Flexible</td>
              </tr>
              <tr>
                <th>Max budget</th>
                <td>50000 tg</td>
              </tr>
              <tr>
                <th>Location</th>
                <td>Almaty</td>
              </tr>
              <tr>
                <th>Layout</th>
                <td>Shared Room</td>
              </tr>
              <tr>
                <th>Amenities</th>
                <td className="anketa-lifestyle">
                  <ul>
                    <li>Wifi included</li>
                    <li>Security camera</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="user-anketa-left">
        <button className="post-close" title="Close" onClick={() => fn()}>
          <CloseIcon sx={{ backgroundColor: "transparent" }} />
        </button>
        <div className="user-anketa-left-card">
          <img src={user} alt="Author" />
          <div className="roommate-post-action">
            <button className="post-author-chat">
              <CommentIcon sx={{ color: "white", mr: "2px", width: "18px" }} />
              Start a chat
            </button>
            <IconButton
              aria-label="add to favorites"
              sx={{
                border: "1px solid #C7C7C7",
                p: "6px 5px 4px",
                width: "30px",
              }}
            >
              <FavoriteIcon sx={{ color: "#5681FB", mr: "5px" }} /> Save Post
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
