import createRequest from './api/createRequest';

export default class TicketService {
  constructor() {
    this.baseUrl = 'http://localhost:7070/';
  }

  async list(callback) {
    const data = await createRequest({ url: `${this.baseUrl}?method=allTickets`, method: 'GET' });
    callback(data);
  }

  async get(id, callback) {
    const data = await createRequest({ url: `${this.baseUrl}?method=ticketById&id=${id}`, method: 'GET' });
    callback(data);
  }

  async create(data, callback) {
    const response = await createRequest({ url: `${this.baseUrl}?method=createTicket`, method: 'POST', data });
    callback(response);
  }

  async update(id, data, callback) {
    const response = await createRequest({ url: `${this.baseUrl}?method=updateById&id=${id}`, method: 'POST', data });
    callback(response);
  }

  async delete(id, callback) {
    const response = await createRequest({ url: `${this.baseUrl}?method=deleteById&id=${id}`, method: 'GET' });
    callback(response);
  }
}
