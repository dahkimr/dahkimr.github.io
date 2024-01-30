import React from 'react';
import styles from "./styles.module.scss";

const ListItem = ({text, color}) => {
  return (
    <li style={{color}} className={styles.listItem}>{text}</li>
  )
};

export default ListItem;