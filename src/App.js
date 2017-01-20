import Inferno from 'inferno'; import Component from 'inferno-component'; import
Logo from './logo'; import './App.css';

class App extends Component {
  changeName = (newName) => {
    const greeting = document.getElementById('greet')
    greeting.innerHTML = newName
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Logo width="80" height="80"/>
          <h2>Welcome to Inferno</h2>
        </div>
        <NewThing
          name="Brett"
          changeName={this.changeName} />
      </div>
    );
  }
}

class NewThing extends Component {
  constructor() {
    super()
    this.state = {
      inputName: ''
    }
  }

handleChange = (e) => {
  this.setState({
    inputName: e.target.value
  })
}

  render () {
    return (
      <div>
        <h1>Hello, <span id="greet">{this.props.name}</span>!</h1>
        <input
          type="text"
          placeholder="Enter Name"
          onInput={this.handleChange} />
        <button onClick={() => this.props.changeName(this.state.inputName)} type="submit">Change Name</button>
      </div>

    )
  }
}

export default App;
