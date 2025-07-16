import { memo } from "react";
const MemoizedComponent = memo(({ data }) => {
  console.log("Rendered with", data);
  return <div>{data.value}</div>;
});
export default MemoizedComponent;
