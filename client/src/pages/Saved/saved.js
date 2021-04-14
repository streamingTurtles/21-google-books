import React, { useEffect, useState } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import CardBody from "../../components/CardBody/cardbody";
import Card from "../../components/Card/card";
import DeleteBtn from "../../components/DeleteBtn/deleteBtn"
import ViewBtn from "../../components/ViewBtn/viewBtn"

function Search() {
  // Set the components initial state
  const [books, setBooks] = useState([])

  // getBooks books from database
  useEffect(() => {
    API.getBooks()
    .then(res => 
        setBooks(res.data)
      )
      .catch(err => console.log(err));
  }, [])

  // Deletes a book from the database with a specific id, and reloads books from the db
  function handleDeleteSubmit(id) {
    API.deleteBook(id)
     // when the current book id doesn't match the id that we're deleting, leave it in the db
    setBooks(books.filter((book) => {
        return book._id != id;
    }))
  }

    return (
      <Container fluid>
        <Row>
          <div className="hero">
            <Jumbotron>
              <h1>React Google Books Search</h1>
              <h5>Your Searched and Saved Books of Interest</h5>
            </Jumbotron>
          </div>
          <Col size="md-12">
            <Card>
              {books.length >0? (
              <List> 
                {books.map(book => (
                  <ListItem key={book.id}>
                      <Card>
                      <DeleteBtn
                          handleDeleteSubmit={handleDeleteSubmit}
                          id={book._id}
                        />
                        <ViewBtn
                          link={book.link}
                        />
                        <CardBody
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
              <p className="display-message text-center mt-5">You don't have any books saved yet!</p>
            )}
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }


export default Search;