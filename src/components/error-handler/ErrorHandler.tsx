import { Alert, AlertTitle, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import type { FC } from "react";

const useStyles = makeStyles({
  root: {
    maxWidth: "40rem",
    fontFamily: "sans-serif",
    margin: "auto",
    display: "flex",
    height: "7rem",
  },
});

type ErrorHandlerProps = {
  message: string;
};

export const ErrorHandler: FC<ErrorHandlerProps> = ({ message }) => {
  const classes = useStyles();

  return (
    <Alert severity="error" className={classes.root} style={{}}>
      <AlertTitle>
        <Typography variant="h2" mt={3}>
          {message}
        </Typography>
      </AlertTitle>
    </Alert>
  );
};
