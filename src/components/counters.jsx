import React, { Component } from "react";
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id : 'A', value : 0},
            {id : 'B', value : 0},
            {id : 'C', value : 0},
            {id : 'D', value : 0},
        ]
    };
    handleDelete = counterId => {
        //console.log("Event handle called" , counterId);
        const counters=this.state.counters.filter(c => c.id!== counterId);
        this.setState({counters});
    };
   /* handleIncrement = (counter) => {
        const counters=[...this.state.counters];
        const index=counters.indexOf(counter);
        counters[index]={...counters};
        counters[index].value++;
        this.setState({counters});
    };*/
    
    render() { 
        return ( 
        <div>
            <h3>First Project</h3>
            { this.state.counters.map(counter => (<Counter key={counter.id} 
            onDelete={this.handleDelete}
            counter={counter}>
                <h4>Counter {counter.id}</h4>
            </Counter>
            ))};
        </div>
        );
    }
}
 
export default Counters;