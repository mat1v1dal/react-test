import React, { Children } from "react";

type Props = {
  children: string;
};

function Button({ children }: Props) {
  const [isLoading, setIsLoading] = React.useState(false);

  return (
    <button
      type="button"
      disabled={isLoading}
      onClick={() => {
        setIsLoading(!isLoading);
      }}
      className={`btn btn-${!isLoading ? "primary" : "secondary"}`}
    >
      {children}
    </button>
  );
}

export default Button;
