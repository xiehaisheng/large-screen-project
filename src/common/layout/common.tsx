import React, { useState } from "react";
import styles from "./index.module.less";
import Header from "./common/Header";
import Footer from "./common/Footer";

export const LayoutCommon = (props: { children: React.ReactElement }) => {
  const [active, setActive] = useState(1);

  return (
    <div className={styles.common}>
      <div className="header">
        <Header />
      </div>
      <div className="body">{props.children}</div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};
