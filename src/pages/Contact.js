import React from "react";
import axios from 'axios';
// import hero, nav, footer etc. 

class Contact extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        name: '',
        email: '',
        message: ''
      }
    }

    handleSubmit(e){
        e.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        axios({
            method: "POST", 
            url:"http://localhost:3002/send", 
            data: {
                name: name,   
                email: email,  
                messsage: message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        })
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }
  
  render() {
   return(
     <div className="App">
     <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
    <div className="form-group">
        <label for="name">Name</label>
        <input type="text" className="form-control" id="name" />
    </div>
    <div className="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" />
    </div>
    <div className="form-group">
        <label for="message">Message</label>
        <textarea className="form-control" rows="5" id="message"></textarea>
    </div>
    <button type="submit" className="btn btn-primary">Submit</button>
</form>
      </div>
   );
  }
  
    onNameChange(event) {
      this.setState({name: event.target.value})
    }
  
    onEmailChange(event) {
      this.setState({email: event.target.value})
    }
  
    onMessageChange(event) {
      this.setState({message: event.target.value})
    }
  
  handleSubmit(event) {
  }
  }
  
  export default Contact;