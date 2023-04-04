import "./index.scss";
import CloseIcon from '@mui/icons-material/Close';

export const CnfDelete = () => {
  return (
      <div className="cnf-delete">
        <div className="cnf-card">
            <div className="cnf-card-header">
                <p>Confirmation</p>
                <button className="cnf-card-close" title="Close"><CloseIcon/></button>
            </div>
            <div className="cnf-card-body">
                <p>Are you sure you want to delete your account? </p>
                <p>Warning: this action cannot be undone once your account is deleted.</p>
            </div>
            <button className="cnf-card-footer" title="Delete">Delete my account</button>
        </div>
      </div>
    );
};
