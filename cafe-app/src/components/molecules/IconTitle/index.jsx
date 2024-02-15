import React from "react";
import GoalIcon from "@mui/icons-material/FlagOutlined";
import ResultIcon from "@mui/icons-material/FlagOutlined";
import ProblemIcon from "@mui/icons-material/ErrorOutline";
import SolutionIcon from "@mui/icons-material/LightbulbOutlined";
import DesignIcon from "@mui/icons-material/PaletteOutlined";
import ProcessIcon from "@mui/icons-material/ChecklistOutlined";
import { COLOURS } from "styles/variables";
import Typography from "components/atoms/Typography";
import styles from "./styles.module.scss";

const Result = ({color}) => (
    <div className={styles.title}>
      <ResultIcon sx={{
        fontSize: {
          xs: "44px",
          md: "50px"
        }
      }} />
      <Typography.CardTitle1 text="Result" color={color || COLOURS.whiteGreen} />
    </div>
);

const Goal = ({color}) => (
    <div className={styles.title}>
      <GoalIcon sx={{
        fontSize: {
          xs: "44px",
          md: "50px"
        }
      }} />
      <Typography.CardTitle1 text="Goal" color={color || COLOURS.whiteGreen} />
    </div>
);

const Problem = ({color}) => (
    <div className={styles.title}>
      <ProblemIcon sx={{
        fontSize: {
          xs: "44px",
          md: "50px"
        }
      }} />
      <Typography.CardTitle1 text="Problem" color={color || COLOURS.whiteGreen} />
    </div>
);

const Solution = ({color}) => (
    <div className={styles.title}>
      <SolutionIcon sx={{
        fontSize: {
          xs: "44px",
          md: "50px"
        }
      }} />
      <Typography.CardTitle1 text="Solution" color={color || COLOURS.whiteGreen} />
    </div>
);

const DesignChoice = ({color}) => (
    <div className={styles.title}>
      <DesignIcon sx={{
        fontSize: {
          xs: "44px",
          md: "50px"
        }
      }} />
      <Typography.CardTitle1 text="Design Choice" color={color || COLOURS.whiteGreen} />
    </div>
);

const Process = ({color}) => (
    <div className={styles.title}>
      <ProcessIcon sx={{
        fontSize: {
          xs: "44px",
          md: "50px"
        }
      }} />
      <Typography.CardTitle1 text="Process" color={color || COLOURS.whiteGreen} />
    </div>
);

export default {
    Goal,
    Result,
    Problem,
    Solution,
    DesignChoice,
    Process,
};