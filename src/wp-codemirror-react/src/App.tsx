import React, { Component } from 'react';
import './App.css';

class AppProps {
  lang: string;
  line: number;
  codeBlock: string;
}

class App extends Component {

  static defaultProps: Partial<AppProps> = {
    lang: '',
    line: 1,
    codeBlock: ''
  };

  constructor(props: AppProps) {
    super(props);
  }

  render() {
    return (
      <div/>
    );
  }
}

export default App;
