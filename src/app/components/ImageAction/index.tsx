import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { StyledEngineProvider } from "@mui/material/styles";

import "./index.scss";
import { FC } from "react";
import { Stack } from "@mui/system";

const ImageAction: FC<any> = ({ src, className, onRemove }) => {
  return (
    <div className="image-container">
      <div>
        <img src={src} alt="Roommate" className={className} />
      </div>
      <div className="image-container__actions">
        <div className="d-flex gap-3">
          <StyledEngineProvider injectFirst>
            <IconButton className="w-auto h-auto" onClick={onRemove}>
              <DeleteIcon className="" color="error" />
            </IconButton>
          </StyledEngineProvider>
        </div>
      </div>
    </div>
  );
};

export default ImageAction;
