import React from "react";

const Spinner = ({ small }) => {
  const cls = ["spinner-border", small && "spinner-border-sm"];
  return (
    <>
      <div className={cls.join(' ')} role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </>
  );
};

export default Spinner;
