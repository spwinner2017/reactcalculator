import React, { Component } from 'react';
import ResultComponent from './components/resultComponent';
import KeyPadComponent from "./components/keypadComponent";
import './App.css';

class App extends Component {
  constructor(){
      super();

      this.state = {
          result: ""
      }
  }

  onBtnClick = (button) => {
    console.log('onBtnClick executed',button,this.state.result);
    switch(button){
      case "=":
      this.calculate();
      break;
      case "C":
      this.reset()
      break;
      case "CE":
      this.backspace()
      break;
      case "=":
      this.calculate();
      break;
      default:
      this.setState({
        result: this.state.result + button
    })
      break;
    }
  };
  calculate = () => {
      var checkResult = ''
      if(this.state.result.includes('--')){
          checkResult = this.state.result.replace('--','+')
      }
      else {
          checkResult = this.state.result
      }
      try {
          this.setState({
              // eslint-disable-next-line
              result: (eval(checkResult) || "" ) + ""
          })
      } catch (e) {
          this.setState({
              result: "Bhai input galat hai"
          });
      }
  };

  reset = () => {
      this.setState({
          result: ""
      })
  };

  backspace = () => {
      this.setState({
          result: this.state.result.slice(0, -1)
      })
  };

  render() {
      return (
          <div>
              <div className="calculator-body">                  
                  <ResultComponent result={this.state.result}/>
                  <KeyPadComponent onClickHandeler={this.onBtnClick}/>
              </div>
          </div>
      );
  }
}

export default App;
