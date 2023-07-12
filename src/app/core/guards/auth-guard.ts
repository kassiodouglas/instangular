import { Router, CanActivate } from '@angular/router';
import { Injectable, OnInit } from '@angular/core';
import * as Notiflix from 'notiflix';
import { Auth } from '../Auth';

@Injectable()
export class AuthGuard implements CanActivate, OnInit {

   

    constructor(private router:Router){}
    canActivate() {

        const userdata = Auth.get();
        const user = (!userdata||userdata===undefined) ? false : userdata;

        if(typeof(user) === 'object')
            return true;


        Notiflix.Notify.warning('Você não está autenticado para acesso a esse recurso. Faça o login ou cadastre-se!')
        this.router.navigate(['/']);
        return false
    }

    ngOnInit(): void {
        
        
    }
}