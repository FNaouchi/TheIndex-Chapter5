import React, { Component } from "react";

// Components
import SearchBar from "./SearchBar";
import BookRow from "./BookRow";
import BookTable from "./BookTable";
class Books extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredBooks: this.props.books
    };
    this.filterBooks = this.filterBooks.bind(this);
  }

  filterBooks(query) {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book => {
      return `${book.title} ${book.color}`.toLowerCase().includes(query);
    });
    this.setState({ filteredBooks });
  }
  render() {
    let books = this.state.filteredBooks;
    if (this.props.match.params.bookColor) {
      books = books.filter(
        book => book.color === this.props.match.params.bookColor
      );
    }

    return (
      <div>
        <SearchBar changeHandler={this.filterBooks} />
        <h3>Books</h3>
        <BookTable books={books} />
      </div>
    );
  }
}

export default Books;
