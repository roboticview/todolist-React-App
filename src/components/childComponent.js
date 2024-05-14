import React, { Component } from 'react';

class ChildComponent extends Component {
    state = {  } 
    render() { 
        return (
            <ul>
                {this.props.items.map( item => (
                    <li key={item.id} >
                         {item.food}
                    </li>
                ))}
            </ul>
        );
    }
}
 
export default ChildComponent;