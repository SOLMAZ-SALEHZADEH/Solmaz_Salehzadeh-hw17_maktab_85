import React from 'react'

function question1() {
  return (
    <div>
        {/* part1 */}
JS frameworks and JS libraries are both pieces of code authored by others to solve everyday problems. They are, nonetheless, distinct.

JS libraries give developers predefined methods and classes to help them work faster and more efficiently. On the other hand, the JS framework acts as a framework for developers to construct apps for specific platforms.

The term "inversion of control" describes the technical distinction between a framework and a library. You have complete control over the application's flow when you use a library. You get to decide when and where you want to call the library. While when using a framework, the flow is controlled by the framework itself. It gives you various locations to plug in your code, but it only calls the code you've plugged in when it's needed.

{/* part2 */}
It does not provide the complete “eco-system” to develop an application not even provide a design system.

It lacks a lot of built-in features and heavily depends on third-party packages, like for routing you need to use react-router, to deal with forms you need to select one package among Redux-Forms, Formiq, or Final-Form, etc., for making API calls you need to decide whether to use AXIOS or fetch API and thus, it makes React confusing and time-consuming.

Also, there is no “right” way to do something in React, not even style guides are present, which means every project can look totally different.

So, it is our responsibility to develop an opinion about how to build a project in React and especially what other libraries we gonna use with it as mentioned above. Of course, we need to use third-party libraries to tackle lots of problems like dealing with forms, routing, styles, API calls, etc., and without them React is incomplete.

React is referred to as “unopinionated” because of there are lots of options to do something and we have to choose our tools (packages) carefully and create a proper design system for a specific project.

That is why React is called a library, not a framework!

A framework provides you a proper eco-system to do something which means you cannot write or place anything anywhere, everything is built according to a design pattern.
    </div>
  )
}

export default question1