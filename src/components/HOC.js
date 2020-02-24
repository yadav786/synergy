import React from "react";
export default function HOC(OldComponent) {
  // eslint-disable-next-line react/prefer-stateless-function
  return class extends React.Component {
    // For now, authorization is removed
    render() {
      return <OldComponent />;
    }
  };
}
