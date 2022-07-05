import axios from "axios";

const headers = {
  headers: {
    Authorization: `Bearer ${localStorage.getItem("jwt_access_token")}`,
  },
};

export default class StudentService {
  getResultById() {
    return axios.get(
      "https://localhost:7247/api/Admission/GetResultById/GetResultById?id=1",
      headers
    );
  }
  getImportantDates() {
    return axios.get(
      "https://localhost:7247/api/Admission/GetImportantDates/GetAllImportantDates",
      headers
    );
  }
  
}
