import React from 'react';

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: ''
        };
    }

    handleInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // Here you can handle the form submission logic
    }

    render() {
        return (
            <div id="contact">
                <h2>Contact Me</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" onChange={this.handleInputChange} />
                    </label>
                    <label>
                        Message:
                        <textarea name="message" onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

export default Contact;