import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {API as routes} from './routes';
import {User} from '../../models/user.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  getMe(): Observable<User> {
    return this.http.get<User>(routes.get.me());
  }
}
