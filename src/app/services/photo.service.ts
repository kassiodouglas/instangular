import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Photos } from '../models/photo';
import { environment } from 'src/environments/environment';
import { Response } from '../models/response';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/photos`

  constructor(private http: HttpClient) { }
   

  createPhoto(formData: FormData): Observable<FormData>
  {
    return this.http.post<FormData>(this.apiUrl, formData)
  }

  getAllPhotos(): Observable<Response<Photos[]>>
  {
    return this.http.get<Response<Photos[]>>(this.apiUrl)
  }

  getUserPhotos(login: string): Observable<Response<Photos[]>>
  {
    const url = `${this.apiUrl}/user/${login}`;    
    return this.http.get<Response<Photos[]>>(url)
  }


}
