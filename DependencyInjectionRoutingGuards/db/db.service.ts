import { Injectable } from '@angular/core';

@Injectable()
export class DbService {
  students = [
    { id: '1', name: 'Asaad Saad', stuID: '00001', email: 'asaad@mum.edu' },
    { id: '2', name: 'John', stuID: '00002', email: 'John@mum.edu' },
    { id: '3', name: 'David', stuID: '00003', email: 'David@mum.edu' },
    { id: '4', name: 'Ramsey', stuID: '00004', email: 'Ramsey@mum.edu' },
    { id: '5', name: 'Karim', stuID: '00005', email: 'Karim@mum.edu' }]
  constructor() { }
  getData(): Object[] {
    return this.students;
  }

  getDataById(id): Object {
    let obj = this.students.filter(s => s.id === id);
    return obj.length > 0 ? obj[0] : null;
  }
}
