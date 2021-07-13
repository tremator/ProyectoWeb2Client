import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const AUTH_API = 'https://localhost:5001/api/news/';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getNews(){
    return this.http.get(AUTH_API);
  }

  getNew(id: number){
    return this.http.get(AUTH_API+id);
  }
  postNew(info: any){
    return this.http.post(AUTH_API,info,httpOptions);
  }
  deleteNew(id: number){
    return this.http.delete(AUTH_API+id,httpOptions);
  }
  updateNew(id: number, info:any){
    return this.http.put(AUTH_API+id,info,httpOptions);
  }
  filterByCtegory(userId:number,categoryId:number){
    return this.http.get(AUTH_API+"filter/"+userId+"/"+categoryId);
  }


}
