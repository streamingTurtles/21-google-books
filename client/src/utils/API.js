import axios from "axios";

// google books api key
const apiKey = "AIzaSyCyG_qBeit_4b5tfm0mjC4l3Tt7SetX6BU"

  // Send request to google books to find searched book
  export default {
    getBooksByTitle: function(title) {
        return new Promise((resolve, reject) => {
        axios
            .get("https://www.googleapis.com/books/v1/volumes?q=$" + title + "&key=" + apiKey)
            .then(res => {
            const bookResults = res.data.items;
            const results = bookResults.map(book => {
                const { imageLinks = null } = book.volumeInfo

                const thumbnail = imageLinks ? imageLinks.thumbnail : null
                return {
                    id: book.id,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    description: book.volumeInfo.description,
                    image: thumbnail,
                    link: book.volumeInfo.previewLink
                };
            });
            resolve(results);
            })
            .catch(err => reject(err));
        });
    },
  // get all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // get the book with specific id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // delete book with specific id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // save the book to the googlebooks db
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  }
};
