import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserInfo } from '../domain';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MyService {
    constructor(private http: HttpClient){

    }

    user(){
        return this.http.get<UserInfo>(`${environment.baseUrl}/user`,
        {params: {id: '1'}});
    }
}