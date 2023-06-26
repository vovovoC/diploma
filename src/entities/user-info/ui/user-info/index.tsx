import "./index.scss";
import {Rating} from 'src/app/components/Rating/index';

interface Props {
  data: Record<any, string| number>;
  edit: any;
  isLoading: boolean;
  rate: number;
  setRate: any;
}

export const UserInfo = ({ data, edit, isLoading, rate, setRate }: Props) => {
  return (
    <div className="user-info">
      <div className="user-data">
        <img
            src={`http://159.223.21.6/images/${data.image}`}
            alt=""
            className="user-img"
        />
        <div className="user-text">
          <p className="user-name">{data.fullname}</p>
          <p className="user-job">{data.email}</p>
          <Rating onChange={setRate} max={5} initialValue={rate}/>
        </div>
      </div>
    </div>
  );
};
