import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
    root: {
      "& .MuiOutlinedInput-input": {
        color: "#000000",
        fontFamily: 'poppins400',
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.115em", 
      },
      "& .MuiInputLabel-root": {
        color: "#000000",
        fontFamily: 'poppins400',
        fontSize: "16px",
        lineHeight: "24px",
        letterSpacing: "0.115em",    
      },
      "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        border: "0px solid #E0E5FC",
        borderRadius: "0px",
        borderRight: "2px solid #E0E5FC"
        
      },
      "&:hover .MuiOutlinedInput-input": {
        color: "#69A3F9"
      },
      "&:hover .MuiInputLabel-root": {
        color: "#69A3F9",
      },
      "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#69A3F9",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
        color: "#69A3F9",
      },
      "& .MuiInputLabel-root.Mui-focused": {
        color: "#69A3F9",
      },
      "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: "#69A3F9",
        border: "1px solid #E0E5FC",
        borderRadius: "5px",
      }
    }
  });