import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable} from 'rxjs';
import { Response } from '../models/response';
import { Users } from '../models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/users`


  constructor(private http: HttpClient) { }


  getAllUsers(): Observable<Response<Users[]>>{
    return this.http.get<Response<Users[]>>(this.apiUrl)
  }

  getUser(login:string): Observable<Response<Users[]>>{
    const url = `${this.apiUrl}/${login}`;  
    return this.http.get<Response<Users[]>>(url);
  }

  store(formData:FormData): Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl,formData);
  }


}
