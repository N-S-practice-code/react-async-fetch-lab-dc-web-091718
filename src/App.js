import React from 'react';
// import './App.css';


class App extends React.Component {

  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
      .then(response => response.json())
      .then(data => {
        this.setState({
          peopleInSpace: data.people
        })
      })
  }

  render() {
    return (
      <div className="App">

      </div>
    )
  }
}

export default App;
