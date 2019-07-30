import React, { component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Books from './components/Books';
import Cart from './components/Cart';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      books: [],
      isLoaded: false,
      order: []
    }
    this.addToOrder = this.addToOrder.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.searchBooks = this.searchBooks.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8082/api/books')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          books: json,
        })
      });
  }

  addToOrder(selectedBook) {
    console.log(selectedBook);
    // how come that by the time the clg below is executed there already is a book in order? (the one just added)
    console.log(this.state.order);
    let newOrder = this.state.order;
    newOrder.push(selectedBook);
    this.setState({
      order: newOrder
    })
    console.log(this.state.order);
  }
  removeFromOrder(selectedBook) {
    //why is this undefined?
    console.log(selectedBook);
    let newOrder = this.state.order;
    // newOrder.splice(selectedBook);
    console.log(newOrder);

    let filtered = newOrder.filter((book) => {
      return book.title != selectedBook;
    });

  
    this.setState({
      order: filtered
    })

  }
  searchBooks(searchValue) {
    let books = this.state.books;
    let searchedBooks = books.filter((book) => {
      return(
        book.title.toLowerCase().includes(searchValue) || book.author.toLowerCase().includes(searchValue)
        );
    });
    this.setState({ books: searchedBooks});
  }
  render() {
    var { isLoaded, books } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="App container-fluid">
          <Header handleSearch={this.searchBooks}/>
          <div className="row content">
            <Books handleBook={this.addToOrder} books={this.state.books} />
            <Cart handleRemove={this.removeFromOrder} currentBooks={this.state.order}/>
          </div>
        </div>
      );
    }
  }
}

export default App;