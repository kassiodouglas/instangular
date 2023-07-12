import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response';
import { Users } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/auth`

  constructor(private http: HttpClient) { }

  authentication(formData: FormData): Observable<Response<Users>>{
    return this.http.post<Response<Users>>(this.apiUrl, formData)
  }

}
