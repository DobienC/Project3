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
  getCharacter: function(id) {
    return axios.get("/api/characters/" + id);
  },
  createCharacter: function(newCharacter) {
    return axios.post("/api/characters", newCharacter);
  },
  clearCharacter: function() {
    return axios.delete("/api/characters");
  },

  // Gets all users
  getUsers: function() {
    return axios.get("/api/users");
  },
  createUser: function(userData) {
    return axios.post("/api/users", userData)
  }
};
