import React from 'react';
import './App.css';

// Components
import Button from './Components/Button';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Button List</h1>
        <Button className="btn btn-primary" />
        <Button className="btn btn-success" />
        <Button className="btn btn-warning" />
        <Button className="btn btn-danger" />
      </div>
    );
  }
}

export default App;
