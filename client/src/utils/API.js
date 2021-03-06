import axios from "axios";

export default {
  // Gets all characters
  getCharacters: function() {
    return axios.get("/api/characters");
  },
  getCharactersByClass: function() {
    return axios.get("/api/characters/sorted/class");
  },
  getCharactersByRace: function() {
    return axios.get("/api/characters/sorted/race");
  },
  getCharactersByName: function() {
    return axios.get("/api/characters/sorted/name");
  },
  getCharacter: function(id) {
    return axios.get("/api/characters/" + id);
  },
  getByUser: function(id) {
    return axios.get("/api/characters/user/" + id);
  },
  deleteCharacterById: function(id, head) {
    return axios.delete("/api/characters/" + id, { 'headers': { 'Authorization': head } })
  },
  createCharacter: function(newCharacter, head) {
    return axios.post("/api/characters",newCharacter, { 'headers': { 'Authorization': head } });
  },
  clearCharacter: function() {
    return axios.delete("/api/characters");
  },

  // Gets all users
  signup: function(userData) {
    return axios.post("/api/users/signup", userData)
  },
  login: function(userData){
    return axios.post("/api/users/login", userData)
  },
  getUser: function(userData){
    return axios.get("/api/users/getOne", {
      params: {
        _id: userData._id
      }
    })
  },
  getFavorites: function(id){
    return axios.get("/api/users/getFavorites" + id)
  }
};


  // Test data
  // // Gets all books
  // getBooks: function() {
  //   return axios.get("/api/books");
  // },
  // // Gets the book with the given id
  // getBook: function(id) {
  //   return axios.get("/api/books/" + id);
  // },
  // // Deletes the book with the given id
  // deleteBook: function(id) {
  //   return axios.delete("/api/books/" + id);
  // },
  // // Saves a book to the database
  // saveBook: function(bookData) {
  //   return axios.post("/api/books", bookData);
  // },
  