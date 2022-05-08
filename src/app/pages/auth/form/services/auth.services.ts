import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ApiError, createClient, Session, SupabaseClient, User, UserCredentials } from "@supabase/supabase-js";
import { BehaviorSubject, Observable } from "rxjs";
import { USER_STORAGE_KEY } from "src/app/shared/constants/constant";

type supabaseResponse = User | Session | ApiError | null;

@Injectable({ providedIn: 'root' })

export class AuthService {
    private supabaseClient: SupabaseClient;
    private userSubject = new BehaviorSubject<User | null>(null);


    constructor() {
        this.supabaseClient = createClient(environment.supabase.supabaseUrl, environment.supabase.supabaseKey);
        this.setUser();
    }

    get user$(): Observable<User | null> {
        return this.userSubject.asObservable();
    }

    async signIn(credentials: UserCredentials): Promise<supabaseResponse> {
        try {
            const { user, error, ...rest } = await this.supabaseClient.auth.signIn(credentials);
            this.setUser();
            return error ? error : user;
        } catch (error) {
            console.log(error);
            return error as ApiError;
        }
    }

    async signUp(credentials: UserCredentials): Promise<supabaseResponse> {
        try {
            const { user, error, ...rest } = await this.supabaseClient.auth.signUp(credentials);
            this.setUser();
            return error ? error : user;
        } catch (error) {
            console.log(error);
            return error as ApiError;
        }
    }

    signOut(): Promise<{ error: ApiError | null }> {
        this.userSubject.next(null);
        return this.supabaseClient.auth.signOut();
    }


    private setUser(): void {
        const session = localStorage.getItem(USER_STORAGE_KEY) as unknown as User;
        this.userSubject.next(session);
    }
}
