import axios from "axios";
// this is calling the api for a random user through randopm user generator
export default {
  getEmployee: function() {
    return axios.get("https://randomuser.me/api/")
  },
};
