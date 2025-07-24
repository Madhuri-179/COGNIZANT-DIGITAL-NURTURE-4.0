import React from 'react';
import './App.css';

class CountPeople extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };
  }

  UpdateEntry = () => {
    this.setState(prevState => ({
      entrycount: prevState.entrycount + 1
    }));
  };

  UpdateExit = () => {
    this.setState(prevState => ({
      exitcount: prevState.exitcount + 1
    }));
  };

  render() {
    return (
      <div className="mall-counter">
        <h2>🛍️ Welcome to the Mall!</h2>
        <p><strong>Entry Count:</strong> {this.state.entrycount}</p>
        <p><strong>Exit Count:</strong> {this.state.exitcount}</p>
        <div className="button-group">
          <button onClick={this.UpdateEntry}>Login</button>
          <button onClick={this.UpdateExit}>Exit</button>
        </div>
      </div>
    );
  }
}

export default CountPeople;
