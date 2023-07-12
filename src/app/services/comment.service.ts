import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable} from 'rxjs';
import { Response } from '../models/response';

export interface CommentsPhoto{
  id:number,		
  created_at:	string,    
  updated_at:	string,    
  deleted_at: string,    
  comment: string,    
  user_id:	number,    
  photo_id:	number,
}

@Injectable({
  providedIn: 'root'
})

export class CommentService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/comments`

  constructor(
    private http: HttpClient
  ) { }

  store(formData: FormData):Observable<FormData>{
    return this.http.post<FormData>(this.apiUrl, formData)
  }

  getAllCommentsPhoto(id: number):Observable<Response<CommentsPhoto[]>>{
    const apiUrl = `${this.apiUrl}/photo/${id}`
    return this.http.get<Response<CommentsPhoto[]>>(apiUrl)
  }
  
}
