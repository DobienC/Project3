import axios from "axios";

export default {
  // Gets all books
  getBooks: function() {
    return axios.get("/api/books");
  },
  // Gets the book with the given id
  getBook: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the book with the given id
  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function(bookData) {
    return axios.post("/api/books", bookData);
  },
  // Gets all characters
  getCharacters: function() {
    return axios.get("/api/characters");
  },
  createCharacter: function(){
    return axios.post("/api/characters");
  },
  clearCharacter: function(){
    return axios.delete("/api/characters");
  }
};
