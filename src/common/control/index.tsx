import React from "react";

export const IfControl = (props: {
  when: boolean;
  children: JSX.Element;
}): JSX.Element => {
  if (props.when) {
    return props.children;
  }

  return null as any as JSX.Element;
};
export const IfElseControl = (props: {
  when: boolean;
  children: JSX.Element;
  else: JSX.Element;
}): JSX.Element => {
  if (props.when) {
    return props.children;
  }

  return props.else;
};

export const ForControl = <I extends any>(props: {
  list: I[];
  children: (item: I, index: number) => React.ReactNode;
}): JSX.Element => {
  return props.list.map((item, index) => {
    return props.children(item, index);
  }) as any;
};
