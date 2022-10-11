import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { USER_STORAGE_KEY } from "src/app/shared/constants/constant";


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(private readonly router: Router) { }

    canActivate(): boolean {
        if (localStorage.getItem(USER_STORAGE_KEY)) {
            this.router.navigate(['/home']);
            return false;
        }
        return true;
    }
}