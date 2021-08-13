import React from "react";
import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      Im some other page! <Link to="/">Go Back</Link>
    </div>
  );
};
