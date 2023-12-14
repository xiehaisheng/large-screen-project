import React from "react";

export const ErrorComponent = (props: { message: string }) => {
  const message =
    props.message.indexOf("Cannot find module") !== -1 ? "404" : "error";

  console.error(props.message);

  return <div>{message}</div>;
};
