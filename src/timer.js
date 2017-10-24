import React, { Component } from 'react';
import './App.css';


class Timer extends Component{

	constructor(props){
		super(props);
		this.state = {
			days: 0,
			hours:0,
			minutes: 0,
			seconds: 0

		}
	}

	componentWillMount(){
		this.getSetDate(this.props.endPoint);
	}

	componentDidMount(){
		setInterval(()=> this.getSetDate(this.props.endPoint),1000)
	}


	getSetDate(endPoint){
		const time = Date.parse(endPoint) - Date.parse(new Date());		
		const seconds = Math.floor((time/1000)%60);
		const minutes = Math.floor((time/1000/60)%60);
		const hours = Math.floor((time/(1000*60*60))%24);
		const days = Math.floor(time/(1000*60*60*24));

		this.setState({days,hours,minutes,seconds})
	}

	leading0(num){
		return num < 10 ? '0' + num : num;
	}

	render(){
		return(

			<div className="cuntdwn__timer">
		      <span className="cuntdwn__days"> {this.leading0(this.state.days)} days </span>
		      <span className="cuntdwn__hours"> {this.leading0(this.state.hours)} Hours</span>
		      <span className="cuntdwn__minutes"> {this.leading0(this.state.minutes)} Minutes</span>
		      <span className="cuntdwn__seconds"> {this.leading0(this.state.seconds)} Seconds</span>
		    </div>
		)
	}
}

export default Timer;