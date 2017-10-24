import React, { Component } from 'react';
import './App.css';

import Timer from './timer';

class App extends Component{

  constructor(props){
    super(props);

    this.state = {
      endPoint: '03 November 2018',
      setDate: ''
    }
  }

  onSetDate(){
    this.setState({endPoint: this.state.setDate});
  }


  render(){
    return(

      <section className="cuntdwn__App">
        <div className="container">
          <div className="row">

            <div className="col-md-12">
              <h2 className="text-center">CountDown</h2>

              <div className="cuntdwn__point">
                <span>End Point:</span> {this.state.endPoint}
              </div>

              <Timer/>

            </div> { /* Col-md-12 */}

            <div className="clearfix"></div>

            <div className="col-md-12">

              <div className="set__date">
                <input onChange={ event => this.setState({setDate: event.target.value })} type="text" className="form-control" placeholder="Set Date" />
                
                <button onClick={()=> this.onSetDate() } className="btn btn-default">Submit</button>
              
              </div>

            </div> { /*Col-md-12 */}

          </div> { /*End Row */}
        </div>
      </section>

    )
  }
}

export default App;
