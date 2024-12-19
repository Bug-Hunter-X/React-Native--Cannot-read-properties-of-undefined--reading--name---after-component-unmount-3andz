# React Native: Asynchronous Operation Error after Component Unmount

This repository demonstrates a common error in React Native applications where asynchronous operations (e.g., network requests, timers) complete *after* a component has unmounted, leading to errors like `Cannot read properties of undefined (reading 'name')`.

The `bug.js` file contains the problematic code, illustrating how trying to update the state after unmounting leads to errors.

The `bugSolution.js` file provides a solution using the `isMounted` check (or the preferred approach using React's lifecycle methods like `componentWillUnmount`) to prevent this error.

## How to Reproduce

1. Clone this repository.
2. Run `npm install` or `yarn install` to install dependencies.
3. Run the app on your React Native environment.  You may need to adjust the API endpoint in the code to match your setup.
4. Observe the error in the console or app behavior when the component unmounts before the data request completes. 

## Solution

The solution addresses the issue by checking if the component is still mounted before attempting to update the state, preventing any errors. This ensures clean handling of data arrival after unmounting.