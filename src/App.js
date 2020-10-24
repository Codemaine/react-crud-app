import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import CreateUser from './components/CreateUser';
import Users from './components/Users'

class Books extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      users: [
        {
          name: 'Jermaine',
          email: 'jermaine.antwi@icloud.com',
          gen: 15,
          id: '094345'

        },
        {
          name: 'Ricardo Brant',
          email: 'ricardo@gmail.com',
          gen: 1,
          id: '556456'
        },
        {
          name: 'Ahmed Zaky',
          email: 'ahmed@gmail.com',
          gen: 12,
          id: '443534'
        }
      ],
      name: '',
      email: '',
      gen: '',
      id: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newbook = {
      name: this.state.name,
      description: this.state.description
    }
   this.setState({
     books: [...this.state.books, newbook],
     name: '',
     author: '',
     description: ''
   })

  }

   deleteUser = (id) => {
     let user = this.state.users.filter((user) => user.id !== id);
     this.setState({
       users: user,
     });
   };

   addNewUser = (user) => {
      user.id = Math.random().toString();
     this.setState({
       users: [...this.state.users, user]
     });
   };

   editUser = (id, updatedUser) => {
     this.setState({
       users: this.state.users.map((user) =>
       user.id === id ? updatedUser : user
     ),
   });
 };

  render() {
    return (
        <Container fluid style={{ marginTop: "2rem" }}>
          <Row>
            <Col md="4">
              <h4>ADD USERS</h4>
              <br/>
              <CreateUser addUser={this.addNewUser} />
            </Col>
            <Col>
            <h4>ALL CODETRAIN USERS</h4>
            <br/>
              <Users userData={this.state.users} deleteUser={this.deleteUser} editUser={this.editUser} />
            </Col>
          </Row>
        </Container>
    )
  }
}

export default Books;
