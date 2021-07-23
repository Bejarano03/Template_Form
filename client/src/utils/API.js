/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all books
  getMembers: function () {
    return axios.get("/api/member");
  },
  // Gets the book with the given id
  getMember: function (id) {
    return axios.get("/api/member/" + id);
  },
  // Deletes the book with the given id
  deleteMember: function (id) {
    return axios.delete("/api/member/" + id);
  },
  // Saves a book to the database
  saveMember: function (memberData) {
    return axios.post("/api/member", memberData);
  },
};
