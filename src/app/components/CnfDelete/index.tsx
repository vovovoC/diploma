import "./index.scss";
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from "react-router-dom";

export const CnfDelete = () => {
  const navigate = useNavigate();
  return (
      <div className="cnf-card">
          <div className="cnf-card-header">
              <p>Confirmation</p>
              <button className="cnf-card-close" title="Close"><CloseIcon/></button>
          </div>
          <div className="cnf-card-body">
              <p>Are you sure you want to delete your account? </p>
              <p>Warning: this action cannot be undone once your account is deleted.</p>
          </div>
          <button className="cnf-card-footer" title="Delete" onClick={() => navigate("/login")}>Delete my account</button>
      </div>
    );
};
