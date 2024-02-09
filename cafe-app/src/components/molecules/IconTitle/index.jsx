import React from "react";
import GoalIcon from "@mui/icons-material/FlagOutlined";
import ProblemIcon from "@mui/icons-material/ErrorOutline";
import SolutionIcon from "@mui/icons-material/LightbulbOutlined";
import DesignIcon from "@mui/icons-material/PaletteOutlined";
import { COLOURS } from "styles/variables";
import Typography from "components/atoms/Typography";
import styles from "./styles.module.scss";

const Goal = () => (
    <div className={styles.title}>
      <GoalIcon sx={{ fontSize: 50 }} />
      <Typography.CardTitle1 text="Goal" color={COLOURS.whiteGreen} />
    </div>
);

const Problem = () => (
    <div className={styles.title}>
      <ProblemIcon sx={{ fontSize: 50 }} />
      <Typography.CardTitle1 text="Problem" color={COLOURS.whiteGreen} />
    </div>
);

const Solution = () => (
    <div className={styles.title}>
      <SolutionIcon sx={{ fontSize: 50 }} />
      <Typography.CardTitle1 text="Solution" color={COLOURS.whiteGreen} />
    </div>
);

const DesignChoice = () => (
    <div className={styles.title}>
      <DesignIcon sx={{ fontSize: 50 }} />
      <Typography.CardTitle1 text="Design Choice" color={COLOURS.whiteGreen} />
    </div>
);

export default {
    Goal,
    Problem,
    Solution,
    DesignChoice
};