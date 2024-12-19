```javascript
// bugSolution.js
import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    this.mounted = false;
  }

  componentDidMount() {
    this.mounted = true; 
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        if (this.mounted) {
          this.setState({ data });
        }
      });
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  render() {
    if (this.state.data === null) {
      return <Text>Loading...</Text>;
    }
    return <Text>{this.state.data.name}</Text>;
  }
}

export default MyComponent;
```