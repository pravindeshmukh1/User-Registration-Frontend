import { Injectable } from '@angular/core';
import { HttpService } from '../http.service/http.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpService: HttpService) {}

  register(registerData) {
    return this.httpService.post('/register', registerData);
  }
}
