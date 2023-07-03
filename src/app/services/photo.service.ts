import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { Photos } from '../interfaces/photo';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}api/photos`

  constructor(private http: HttpClient) { }

  createPhoto(formData: FormData): Observable<FormData>
  {
    return this.http.post<FormData>(this.apiUrl, formData)
  }


}
