import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { BehaviorSubject, Observable } from "rxjs";
import { USER_STORAGE_KEY } from "src/app/shared/constants/constant";
import { User, UserCredentials } from "@supabase/gotrue-js";



@Injectable({ providedIn: 'root' })

export class AuthService {
    signIn(credentials: UserCredentials): void {
      throw new Error('Method not implemented.');
    }
    signUp(credentials: UserCredentials) {
      throw new Error('Method not implemented.');
    }
    
    
    private userSubject = new BehaviorSubject<User | null>(null);


    constructor() {
        
        this.setUser();
    }

    get user$(): Observable<User | null> {
        return this.userSubject.asObservable();
    }

    



    private setUser(): void {
        const session = localStorage.getItem(USER_STORAGE_KEY) as unknown as User;
        this.userSubject.next(session);
    }
}
