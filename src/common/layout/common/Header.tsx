import React, { useEffect, useState } from "react";
import styles from "./index.module.less";
import { useLocation } from "react-router-dom";
import { items } from "./config";
import { getCurrentDate, getCurrentWeekday } from "@/common/utils/helper";

export default function Header() {
  const location = useLocation();
  let pagePath = location.pathname;
  const [title, setTitle] = useState("");

  useEffect(() => {
    const res = items.filter((el) => el.path === pagePath)[0];
    setTitle(res.name);
  }, [pagePath]);

  return (
    <div className={styles.headerWrapper}>
      <div>{`${getCurrentDate()} ${getCurrentWeekday()}`}</div>
      <div className="title">{title}</div>
    </div>
  );
}
