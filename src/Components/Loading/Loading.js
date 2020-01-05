import React from "react";
import { SyncLoader } from "react-spinners";

const loadingStyle = {
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};

const Loading = () => {
  return <SyncLoader size={18} color={"coral"} css={loadingStyle} />;
};

export default Loading;
