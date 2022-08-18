import axios from 'axios'

class AddressbookService{
    baseUrl ="http://localhost:8080/AddressBookService"

    addPerson(data) {
      return axios.post(`${this.baseUrl}/insert`, data);
    }

  getAll() {
      return axios.get(`${this.baseUrl}/getContacts`);
    }

  getPersonById(personId) {
      return axios.get(`${this.baseUrl}/getContact/${personId}`);
    }

  updatePerson(personId,data) {
      return axios.put(`${this.baseUrl}/updateContact/${personId}`, data);
    }

  delete(personId) {
      return axios.put(`${this.baseUrl}/delete/${personId}`);
    }

  sortByCity() {
      return axios.get(`${this.baseUrl}/sortByCity`);
    }
  sortByState() {
      return axios.get(`${this.baseUrl}/sortByState`);
    }

}

export default new AddressbookService();