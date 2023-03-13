import './App.css';
import React,{Component} from 'react';
class App extends Component {


 
    constructor(props) {
      super(props);
      this.state = {
        value: "",
      };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({ value: event.target.value });
    }
  
    render() {
      return (
        <div>
        <form>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
        </form>
        <h1>Hello {this.state.value}!</h1>
        </div>
      );
    }
  }

export default App;
