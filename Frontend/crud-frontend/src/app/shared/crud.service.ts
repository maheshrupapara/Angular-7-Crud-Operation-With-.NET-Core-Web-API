import { Injectable } from '@angular/core';
import { CrudTable } from './crud.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
  })
export class CrudServices{
    public formData:CrudTable = new CrudTable;
    readonly rootURL = 'http://localhost:61486/api';
    list: CrudTable[];
    
    constructor(private http:HttpClient) { }

    refreshList(){
        this.http.get(this.rootURL + '/Crud')
        .toPromise()
        .then(res => this.list = res as CrudTable[]);
    }
    postDetail() {
        return this.http.post(this.rootURL + '/Crud', this.formData);
      }
      putDetail() {
        return this.http.put(this.rootURL + '/Crud/'+ this.formData.Id, this.formData);
      }
      deleteDetail(id) {
        return this.http.delete(this.rootURL + '/Crud/'+ id);
      }
}