import React, {Component} from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            price: 0,
            imgurl: ''
        }
    }
    //methods - handlge change for each input/ post new data to database/ clear input boxes

    render() {
        return (
            <div>Form</div>
        )
    }
}

export default Form