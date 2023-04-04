import React from "react";

interface Props {
  openedDescription: any;
  index: any;
  openDescription: any;
  point: any;
}
export const InnerLayout = ({
  openedDescription,
  index,
  openDescription,
  point,
}: Props) => {
  if (openedDescription !== index) {
    return (
      <div>
        <input
          type="button"
          onClick={() => {
            openDescription(index);
          }}
          value="Подробнее"
        />
      </div>
    );
  }
  return <div>{point.title}</div>;
};
