import React, { Component } from 'react';
import './Progressbar.component.style.scss';

export default class ProgressBar extends Component {
    constructor(props) {
      super(props);
      this.state = {
        stepKeys :Object.keys(this.props.allSteps),
        
      };
    }
    
  
  
  
    render() {
      const lastStep =this.state.stepKeys.length -1
      let currStepIndex = 0;
  
      const MyCurrentState=()=>{
        
      for (let i = 0; i < lastStep + 1; i++) {
        if (this.props.currentStep === this.state.stepKeys[i]) {
          currStepIndex = i;
        }
      }
    }
    function capitalizeFirstLetter(str) {
  
      
      const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  
      return capitalized;
  }
      return (
        <div className="myProgressBar">
          <div className="myLine primary">
            <div></div>
          </div>      
          {
  
        
      this.state.stepKeys.map((step, i) => {
        MyCurrentState();
        if (i === lastStep) {
          return;
        }
        return (
          <>
            <div
              key={step}
              className={i <= currStepIndex ? "myStep primary" : "myStep grey"}
            >
              <div className="Circle">
                {i < currStepIndex ? <p className="right">✓</p>: <p>{i + 1}</p>}
              </div>
              <p className="stepText">{capitalizeFirstLetter(step.split("_")[0].toLowerCase())}</p>
            </div>
            <div className={i < currStepIndex ? "myLine primary" : "myLine grey"}>
              <div></div>
            </div>
          </>
        );
      })
          }
        </div>
        
      );
    }
  }
  