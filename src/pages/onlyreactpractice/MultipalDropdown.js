import { useState } from "react";

const MultipalDropdown = () => {
  const [dropdowns, setDropdowns] = useState();
  const UlList = ["mainul1", "mainul2", "mainul3"];
  const LiList = [
    ["ul1li1", "ul1li2", "ul1li3"],
    ["ul2li1", "ul2li2", "ul2li3", "ul2li4"],
    ["ul3li1", "ul3li2", "ul3li3"],
  ];
  return (
    <>
      {UlList.map((ulitem, index) => {
        return (
          <div key={index}>
            <button onClick={() => setDropdowns(dropdowns === index ? null : index)}>
              {ulitem}
            </button>
            {dropdowns === index && (
              <ul>
                {LiList[index].map((liItem, liIndex) => (
                  <li key={liIndex}>{liItem}</li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </>
  );
};

export default MultipalDropdown;
