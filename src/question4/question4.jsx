import React from "react";

function question4() {
  return (
    <div>
      Components are independent and reusable bits of code. They serve the same
      purpose as JavaScript functions, but work in isolation and return HTML.
      Components come in two types, Class components and Function components,
      {/* difference */}
      The most obvious one difference is the syntax. A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element.

A class component requires you to extend from React.Component and create a render function which returns a React element. This requires more code
    </div>
  );
}

export default question4;
