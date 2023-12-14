import React, { useEffect } from "react";
import styles from "./style.module.less";
import ReactEcharts from "echarts-for-react";
import { option, option1, option2 } from "./config";

export default function () {
  return (
    <div className={styles.digitalWrapper}>
      <div className="left">
        <div>
          <ReactEcharts
            option={option}
            notMerge={true}
            lazyUpdate={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div>
          <ReactEcharts
            option={option1}
            notMerge={true}
            lazyUpdate={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
        <div>
          <ReactEcharts
            option={option2}
            notMerge={true}
            lazyUpdate={true}
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
      <div className="center">
        <div></div>
        <div className="bottom">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div className="right">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}
