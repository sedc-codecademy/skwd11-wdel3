import { Injectable } from '@angular/core';
import { LoginUser, RegisterUser, User } from '../interfaces/user.interface';
import { BehaviorSubject, Observable, catchError, finalize, of, tap } from 'rxjs';
import { AuthApiService } from './auth-api.service';
import { LoggerService } from 'src/app/core/services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isFetching: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  currentUser$: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);

  constructor(
    private readonly authApisService: AuthApiService,
    private readonly loggerService: LoggerService
    ) { }

  login = (loginData: LoginUser) => {
    this.isFetching.next(true);

    return this.authApisService.login(loginData).pipe(
      tap((user) => {
        if (user) {
          this.currentUser$.next(user);
          this.currentUser$.subscribe(res => console.log(res))
        }
      }),
      catchError((error) => this.handleError(error, null)),
      finalize(() => this.isFetching.next(false))
    )
  }

  register (registerData: RegisterUser) {}

  private handleError(error: any, returnValue: any): Observable<any> {
    this.loggerService.error(error);
    return of(returnValue);
  }
}
