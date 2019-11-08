import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Globals} from '../../app.globals';
import {API as routes} from './routes';
import {User} from '../../models/user.model';
import {UserService} from '../user-service/user.service';
import {Storage} from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;

  constructor(private httpClient: HttpClient,
              private userService: UserService,
              private storage: Storage) {

    this.currentUserSubject = new BehaviorSubject<User>(null);
  }

  login(username: string, password: string) {
    return this.httpClient.post(routes.post.login(), { username, password })
      .subscribe((res: Response) => {

        let accessToken: string = res.headers.get('Authorization');
        this.storage.set(Globals.ACCESS_TOKEN, accessToken);

        this.userService.getMe().subscribe(user => {
          this.currentUserSubject.next(user);
        })
      });
  }

  logout() {
    this.storage.remove(Globals.ACCESS_TOKEN);
    this.storage.remove(Globals.USER);
    this.currentUserSubject.next(null);
  }

  isLoggedIn() {
    return this.getCurrentUser() != null && this.getAccessToken() != null;
  }

  getCurrentUser() {
    return this.currentUserSubject.value;
  }

  getAccessToken() {
    return this.storage.get(Globals.ACCESS_TOKEN);
  }
}
