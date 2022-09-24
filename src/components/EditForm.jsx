import React, { Component } from 'react';
import { Form, Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {editUser} from '../actions/usersActions';



class EditForm extends Component {
  constructor(props){
    super(props);
    this.state ={name: props.userInfo.name, 
      email: props.userInfo.email, 
      gen: props.userInfo.gen,
      id: props.userInfo.id,
    }
  }

  handleChange=(e)=>{
    e.preventDefault();
    this.setState({
      [e.target.name] : e.target.value
    });
  };

  handleSubmit=(e)=>{
    e.preventDefault();
    this.props.upDate ({id:this.state.id, name:this.state.name, email:this.state.email, gen:this.state.gen,});
    this.setState({name:"", email:"", gen: "",});
    this.props.closeModal();
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit} style={{border:"1px solid pink", backgroundColor: "pink", height: "350px"}}>
          <Form.Group style={{width: "300px", marginTop:"20px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text"  value={this.state.name} name="name" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" value={this.state.email} name="email" onChange={this.handleChange}/>
          </Form.Group>

          <Form.Group style={{width: "300px", marginLeft:"50px"}} className="mb-3" controlId="formBasicPassword">
            <Form.Label>Gen</Form.Label>
            <Form.Control type="number" value={this.state.gen} name="gen" onChange={this.handleChange}/>
          </Form.Group>
          
          <Button style={{marginTop:"15px", marginLeft: "150px", width: "100px"}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>  
    );
  }
}

const mapDispatchToProps = {
  upDate: editUser,
}

export default connect (null, mapDispatchToProps) (EditForm);