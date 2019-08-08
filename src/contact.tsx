import React from 'react'
import { string } from 'prop-types';

class Contact extends React.Component<any, any>{
    private res: any = "Hello";
    constructor(props:any){
        super(props);
        this.state = {
            salutation: 'Mr',
            name: string,
            email: string,
            message: string,
            response: string
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSalutationChange = this.handleSalutationChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handleMessageChange = this.handleMessageChange.bind(this);
    }

    handleSubmit = (event: any) => {
        const proxyurl = "https://cors-anywhere.herokuapp.com/";
        const url = "https://website-backend-anil.azurewebsites.net/api/contact";
        fetch(proxyurl+url,
        {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin':'*'
            },
            body: JSON.stringify(this.state)
          })
        .then((resp) => resp.json())
        .then((data) => {
            this.setState({
                response: data
            });
        });
        this.resetForm();
        event.preventDefault();
    }

    resetForm = () => {
        this.setState({
            salutation: '',
            name: '',
            email: '',
            message: ''
        });
    }

    handleNameChange = (event: any) => {
        this.setState({
            name: event.target.value
        });
    }

    handleSalutationChange = (event: any) => {
        this.setState({
            salutation: event.target.value
        });
    }
    handleEmailChange = (event: any) => {
        this.setState({
            email: event.target.value
        });
    }
    handleMessageChange = (event: any) => {
        this.setState({
            message: event.target.value
        });
    }
    

    render(){
        return(
            <div className="paragraph-home">
                <form onSubmit={this.handleSubmit}>
                    <select value={this.state.salutation} onChange={this.handleSalutationChange}>
                        <option value="Mr">Mr</option>
                        <option value="Ms">Ms</option>
                    </select>
                    <p>Enter Name: </p>
                    <input type="text" value={this.state.name} onChange={this.handleNameChange}></input>
                    <p>Enter email: </p>
                    <input type="text" value={this.state.email} onChange={this.handleEmailChange}></input>
                    <p>Enter message: </p>
                    <textarea value={this.state.message} onChange={this.handleMessageChange}></textarea>
                    <p></p>
                    <input type="submit" value="Submit"></input>
                    <p>{this.state.response}</p>
                </form>
            </div>
        );
    }
}

export default Contact;