import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";

const UserHeader = () => {
  const [title, setTitle] = React.useState("Minhas Fotos");
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav setTitle={setTitle} />
    </header>
  );
};

export default UserHeader;
