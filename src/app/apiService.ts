import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Organizationts } from './organizations';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  getOrgs() {
    return this.http
      .get<any>('assets/orgs.json')
      .toPromise()
      .then((res) => <Organizationts[]>res.data)
      .then((data) => {
        return data;
      });
  }
  getData() {
    return this.http
      .get<any>('assets/data.json')
      .toPromise()
      .then((res) => <any[]>res.data)
      .then((data) => {
        return data;
      });
  }
  getTargetData() {
    return this.http
      .get<any>('assets/targetdata.json')
      .toPromise()
      .then((res) => <any[]>res.data)
      .then((data) => {
        return data;
      });
  }
}
