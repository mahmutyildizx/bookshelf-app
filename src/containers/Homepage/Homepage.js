import React from "react";
import {connect} from "react-redux";
import {Books, FilterSortBar} from "../../components";
import {getBooks} from "../../state/ducks/books/action";
import {Container} from "reactstrap";

class Homepage extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount() {
      this.props.getBooks();
  }

  render(){
    if(this.props.loading){
      return <h1>BOOKS ARE LOADING...</h1>
    }
    const allBooks = this.props.books;
    let filteredBooks = [];
    /// Categorye gore filter
    if(this.props.filter){
      filteredBooks = allBooks.filter((book) => {
        return book.category === this.props.filter
      })
    }else{
      filteredBooks = allBooks;
    }

    /// Searchteme gore filter
    if(this.props.searchTerm){
      if(this.props.searchType === "title"){
        filteredBooks = filteredBooks.filter((book) => {
          return book.title.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1
        })
      } else{
        filteredBooks = filteredBooks.filter((book) => {
          return book.author.toLowerCase().indexOf(this.props.searchTerm.toLowerCase()) > -1
        })
      }
      
    }

    // Sorting
    let sortedBooks = [];
    if(this.props.sortTerm){
      sortedBooks = [...filteredBooks].sort((book1, book2) => {
         console.log(book1, book2, this.props.sortTerm);
          return parseInt(book2[this.props.sortTerm]) - parseInt(book1[this.props.sortTerm])
      });
    }else{
      sortedBooks = filteredBooks;
    }


    let books = "";
    if(sortedBooks.length < 1){
      books = <h2>NO BOOKS HERE</h2>
    }else{
      books = <Books items={sortedBooks}/>;
    }
    return <div>
      <FilterSortBar />
      <Container>
        <div className="books-holder">
          {books}
        </div>
      </Container>
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    books: state.books.data,
    loading: state.books.loading,
    filter: state.books.filter,
    searchTerm: state.books.searchTerm,
    sortTerm: state.books.sortTerm,
    searchType: state.books.searchType
  }
};

const mapDispatchToProps = {
  getBooks
};

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
