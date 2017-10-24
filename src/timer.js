import React, { Component } from 'react';
import './App.css';


class Timer extends Component{

	render(){
		return(

			<div className="cuntdwn__timer">
		      <span className="cuntdwn__days"> 127 days </span>
		      <span className="cuntdwn__hours"> 2 Hours</span>
		      <span className="cuntdwn__minutes"> 23 Minutes</span>
		      <span className="cuntdwn__secends"> 09 Seconds</span>
		    </div>
		)
	}
}

export default Timer;