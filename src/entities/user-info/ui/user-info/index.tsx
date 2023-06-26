import "./index.scss";
import {Rating} from 'src/app/components/Rating/index';
import img from 'src/app/assets/images/default_pfp.png';

interface Props {
  data: Record<any, string| number>;
  edit: any;
  isLoading: boolean;
  rate: number;
  setRate: any;
}

export const UserInfo = ({ data, edit, isLoading, rate, setRate }: Props) => {
console.log(rate);

  return (
    <div className="user-info">
      <div className="user-data">
        <img
            src={ (data.image) ? `http://159.223.21.6/images/${data.image}` : img}
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
