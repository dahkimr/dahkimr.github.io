import React from "react";
import ToolIcon from "@mui/icons-material/HandymanOutlined";
import ProcessIcon from "@mui/icons-material/FlagOutlined";
import ResultIcon from "@mui/icons-material/InventoryOutlined";
import { COLOURS } from "styles/variables";
import Typography from "components/atoms/Typography";
import styles from "./styles.module.scss";

const Tools = () => (
    <div className={styles.title}>
      <ToolIcon sx={{ fontSize: 50 }} />
      <Typography.CardTitle1 text="Tools" color={COLOURS.whiteGreen} />
    </div>
);

const Process = () => (
    <div className={styles.title}>
      <ProcessIcon sx={{ fontSize: 50 }} />
      <Typography.CardTitle1 text="Process" color={COLOURS.whiteGreen} />
    </div>
);

const Result = () => (
    <div className={styles.title}>
      <ResultIcon sx={{ fontSize: 50 }} />
      <Typography.CardTitle1 text="Result" color={COLOURS.whiteGreen} />
    </div>
);

export default {
    Tools,
    Process,
    Result
};