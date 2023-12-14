//异步休眠
export const sleep = (time: number = 5000) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};

// 生成类名
export const classNames = (
  names: Array<string | null | boolean | undefined>
) => {
  return names
    .filter((item) => typeof item === "string" && item.trim())
    .join(" ");
};

//hooks中要用callback包裹
export const throttle = (fn: (...args: any[]) => any, wait: number) => {
  let timer = null as any;
  let args = [] as any[];

  return (...arr: any[]) => {
    //保证最新的参数
    args = arr;

    if (!timer) {
      timer = setTimeout(function () {
        fn(...args);
        timer = null;
      }, wait);
    }
  };
};

export const debounce = (fn: (...args: any[]) => any, wait: number = 300) => {
  let timer = null as any;
  return function (...args: any[]) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(...args);
    }, wait);
  };
};
//获得唯一key
export const getUniqueKey = (() => {
  let index = 1000;

  return () => {
    index += 1;

    return "uuid" + index;
  };
})();

//转化百分比
export const toPercent = (num: number) => {
  const number = parseFloat(String(num)) || 0;
  return parseFloat((number * 100).toFixed(2));
};

// 获取日期
export const getCurrentDate = () => {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month = currentTime.getMonth() + 1; // 月份从0开始，因此需要加1
  const day = currentTime.getDate();

  return `${year}年${month}月${day}日`
}

// 获取星期
export const getCurrentWeekday = () => {
  const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
  const today = new Date();
  const weekday = today.getDay();
  return weekdays[weekday];
}