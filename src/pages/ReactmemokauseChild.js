import { memo } from "react";

const ReactmemokauseChild = memo(({name}) => {
      console.log("Child rendered");
  return (
    <>{name}</>
  )
})

export default ReactmemokauseChild
