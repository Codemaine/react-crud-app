import React from 'react';
import 'minimatch'
import './App.css';

class Books extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      books: [
        {
          name: 'Harry Potter',
          author: 'Micheal',
          description: 'This is the book based on the Harry Potter movie'
        },
        {
          name: 'BFG',
          author: 'Roald Dalph',
          description: 'This book is amazing.'
        }
      ],
      name: '',
      author: '',
      description: ''
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
      author: this.state.author,
      description: this.state.description
    }
   this.setState({
     books: [...this.state.books, newbook],
     name: '',
     author: '',
     description: ''
   })
   
  }

  render() {
    return (
      <div style={{margin: '2rem'}}>
        <form onSubmit={this.handleSubmit}>
          <div style={{display: 'flex', flexDirection: 'column', width: '34vh'}}>
            <label>Name</label>
          <input type="text" name="name" onChange={this.handleChange} />
          <label>Author</label>
          <input type="text" name="author" onChange={this.handleChange} />
          <label>Description</label>
          <textarea name="description" onChange={this.handleChange} ></textarea>
          </div>
          <button class="button" type="submit">Submit</button>
                  </form>
                  <table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Author</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    {this.state.books.map ((books, id) => {
      return (
       <tr>
         <td>{books.name}</td>
         <td>{books.author}</td>
      <td>{books.description}</td>
       </tr>
      )
    })}
  </tbody>
</table>
      </div>
    )
  }
}

export default Books;
