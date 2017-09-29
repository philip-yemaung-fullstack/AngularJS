import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Http, Response, RequestOptionsArgs, RequestOptions, Headers } from '@angular/http';

@Injectable()
export class DbService {

  getRealEstateData() {
    return this.http.get('https://realestatesvc.herokuapp.com')
      .map((res: Response) => res.json());
  }

  findRealEstateData(id) {
    return this.http.get('https://realestatesvc.herokuapp.com/search/' + id)
      .map((res: Response) => res.json());
  }

  updateRealEstateData(body) {
    /* this.http.post('https://realestatesvc.herokuapp.com/update', body)
    .subscribe(); */
    return this.http.post('https://realestatesvc.herokuapp.com/update', body)
      .map((res: Response) => res.json());
  }

  insertRealEstateData(body) {
    return this.http.post('https://realestatesvc.herokuapp.com/add', body)
      .map((res: Response) => res.json());
  }

  deleteRealEstateData(id) {
    return this.http.get('https://realestatesvc.herokuapp.com/remove/' + id)
      .map((res: Response) => res.json());
  }
}
