import React, { useState, useEffect } from "react";
import Jumbotron from "../../components/Jumbotron/";
import API from "../../utils/API";
import Card from "../../components/Card/card"
import TheCardBody from "../../components/CardBody/cardBodyCopy";
import TheSaveBtn from "../../components/SaveBtn/saveBtnCopy"
import TheViewBtn from "../../components/ViewBtn/viewBtnCopy"
import { Col, Row, Container } from "../../components/Grid/";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form/form";


import "../../pages/Search/styles.css"

function Search() {
  // Set component's initial state
  const [books, setBooks] = useState([])
  const [searchTerm, setSearchTerm] = useState("")

  // Loading & seting to books
  function loadBooks() {
    API.getBooksByTitle(searchTerm)
      .then(res => {
        setBooks(res)
        }
      )
      .catch(err => console.log(err));
  };

  //  updating component state when the user types into the input field
  function handleInputChange(event) {
    const { value } = event.target;
    setSearchTerm( value.replace(/\s/g, '') );
  };

  // prevent page refresh
  function handleSearchSubmit(event) {
    event.preventDefault();
    if (searchTerm) {
      loadBooks();
    }
  };
  
  function handleSaveSubmit(bookData) {
    API.saveBook({
      _id : bookData.id,
      title: bookData.title,
      authors: bookData.authors,
      description: bookData.description,
      image: bookData.image,
      link: bookData.link
    })
  };

    return (
      <Container fluid>
        <Row>
          <div className="hero">
            <Jumbotron>
              <h1>Google Books Search</h1>
              <h5>from Google Books API</h5>
            </Jumbotron>
          </div>
          <Col size="md-12">
            <form className="d-flex">
              <Input
                onChange={handleInputChange}
                name="title"
                style={{ textAlign: "center", backgroundColor: "rgb(232,240,254)" }}
                placeholder='Enter your search here'
              />
              <FormBtn
                style={{ textAlign: "center", backgroundColor: "rgb(232,240,254)" }}
                onClick={handleSearchSubmit}
              >
                <i className="fas fa-search"></i>
              </FormBtn>
            </form>
          </Col>
          <Col size="md-12">
            <Card>
              <h4 className="text-center">Search Results</h4>
              {books.length >0? (
              <List>
                {books.map(book => (
                  <ListItem key={book.id}>
                      <Card>
                      <TheSaveBtn
                          handleSaveSubmit={handleSaveSubmit}
                          bookData={book}
                        >
                          <i className="far fa-heart"></i>
                        </TheSaveBtn>
                        <TheViewBtn
                          link={book.link}
                        />
                        <TheCardBody
                          key={book.id}
                          title={book.title}
                          authors={book.authors}
                          image={book.image}
                          description={book.description}
                        />
                      </Card>
                  </ListItem>
                ))}
              </List>
            ) : (
              <p className="display-message text-center mt-5">No Results to Display</p>
            )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }


export default Search;
