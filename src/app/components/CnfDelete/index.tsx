import "./index.scss";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  handleDelete: () => void;
}
export const CnfDelete = ({ handleDelete }: Props) => {
  return (
    <div className="cnf-card">
      <div className="cnf-card-header">
        <p>Confirmation</p>
        <button className="cnf-card-close" title="Close">
          <CloseIcon />
        </button>
      </div>
      <div className="cnf-card-body">
        <p>Are you sure you want to delete your account? </p>
        <p>
          Warning: this action cannot be undone once your account is deleted.
        </p>
      </div>
      <button
        className="cnf-card-footer"
        title="Delete"
        onClick={() => handleDelete()}
      >
        Delete my account
      </button>
    </div>
  );
};
