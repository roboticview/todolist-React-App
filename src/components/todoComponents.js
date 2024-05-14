import React, { Component } from 'react';
import ChildComponent from './childComponent';

class TODO extends Component {
    constructor(){
        super();
        this.state = {
            items : [],
            text : ""
        }
    }
    render() { 
        return (
                <div>
                    <h3>TODO App</h3>
                    <form>
                        <div class="mb-3">
                            <label htmlFor="new-task" className="form-label">
                                What needs to be dome
                            </label>
                            <input type="text" className="form-control" id="new-task"/>
                            <button className='m-2 btn btn-primary'> Add </button>
                        </div>
                    </form>
                </div>
    
        );
    }
}
 
export default TODO;