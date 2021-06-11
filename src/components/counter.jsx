import React, { Component } from 'react';

class Counter extends Component {
    state = { 
        count : 0
        //imageUrl : "https://picsum.photos/500"
     };

     /*handleIncrement = () => {
        //console.log("incremented"); 
        this.setState({ count : this.state.count+1 });
    }*/
    handleIncrement = () =>{
        this.setState({count : this.state.count+1});
    }
    handleDecrement = () => {
        this.setState({count : this.state.count-1});
    }

     styles = {
            fontSize : 30,
            fontWeight : 'bold'
     };
    render() { 
        //let classes = ;
        return (
            <div>
            {this.props.children}
            <span style={this.styles} className={this.getBadgeClasses()}> {this.formatCount()} </span>
            <button onClick={this.handleIncrement} style={this.styles} className="btn btn-secondary btn-sm"> +</button>
            <button onClick={this.handleDecrement} style={this.styles} className="btn btn-primary btn-sm m-2"> - </button>
            <button onClick={() => this.props.onDelete(this.props.counter.id)} style={this.styles} className="btn btn-danger btn-sm m-4">Delete</button>
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        //const { value }=this.props.counter;
        return this.state.count===0 ? "Zero" : this.state.count;
    }
}
 


export default Counter;