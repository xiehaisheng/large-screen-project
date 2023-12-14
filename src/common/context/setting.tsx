import { useState } from "react";
import { createStore } from "hatom";

export const SettingContext = createStore(() => {
  const [data, setData] = useState({
    theme: "light",
  });

  return {
    data,
    setTheme() {
      setData({
        theme: "dark",
      });
    },
  };
});
