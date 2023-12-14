import React, { useEffect, useState } from "react";
import { ForControl } from "@/common/control";
import styles from "./index.module.less";
import { useNavigate } from "react-router-dom";
import { items } from "./config";

export default function Footer() {
  const navigate = useNavigate();
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(location.pathname);
  }, []);

  const handleClick = (val: any) => {
    navigate(val.path);
    setPath(val.path);
  };
  return (
    <div className={styles.footerWrapper}>
      <ForControl
        list={items}
        children={(item: { name: string; path: string }, index: number) => (
          <div
            key={item.name + index}
            className={`footer-items ${item.path === path ? "active" : ""}`}
            onClick={() => handleClick(item)}
          >
            {item.name}
          </div>
        )}
      ></ForControl>
    </div>
  );
}
