import { Injectable } from '@angular/core';
import { TestBed, inject } from '@angular/core/testing';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DataService {
  constructor(private http: Http) {
    var obj;
    this.getData().subscribe(data => obj = data, error => console.log(error));
  }

  public getData(): Observable<any> {
    return this.http.get("file.json")
      .map((res: any) => res.json())
      .catch((error:any)=>{console.log(error);
      return Observable.of(undefined)} );

  }

}
