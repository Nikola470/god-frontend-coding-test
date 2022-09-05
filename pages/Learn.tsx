import { Spinner, View } from "vcc-ui";
import { makeStyles } from "@mui/styles";
import type { FC } from "react";
import { useRouter } from "next/router";

const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "15rem",
    width: "100%",
  },
});

type LearnProps = {
  text?: string;
};

export const Learn: FC<LearnProps> = ({ text }) => {
  const router = useRouter();
  router.asPath;
  const classes = useStyles();

  return (
    <View className={classes.root}>
      <Spinner size={48} />
      <h4 style={{ paddingLeft: 10 }}>{text}</h4>
    </View>
  );
};
