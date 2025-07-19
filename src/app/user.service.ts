import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {
    private apiUrl = 'http://localhost:5033/api/User';  

    constructor(private http: HttpClient) {}

    checkUserExists(username: string): Observable<boolean> {
        return this.http.get<boolean>(`${this.apiUrl}/Exists/${username}`);
    }

    addUser(username: string): Observable<any> {
        return this.http.post(this.apiUrl, { username });
    }
}
