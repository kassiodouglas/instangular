import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PhotoService } from 'src/app/services/photo.service';
import { Photos } from 'src/app/models/photo';
import { environment } from 'src/environments/environment';
import { Users } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';
import * as Notiflix from 'notiflix';
import { Subject, takeUntil } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';

declare var window: any;

import { PhotoComponent } from './photo/photo.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})

export class UserComponent implements OnInit, OnDestroy {

  // propriedades -----------------------------------------------------------
  private readonly destroy$: Subject<void> = new Subject();
  // session: any = { logged: false, name: 'Kássiaum' } //dados forçado
  userData?: Users;
  photos: Photos[] = [];
  baseApiPhotos = environment.baseApiPhotos;
  baseApiAvatar = environment.baseApiAvatar;
  modalEl: any;
  modalInstance: any;


  // construtor --------------------------------------------------------------
  constructor(
    private route: ActivatedRoute,
    private photoService: PhotoService,
    private userService: UserService,
    public dialog: MatDialog
  ) { }

  // metodos de ciclo de vida ------------------------------------------------
  ngOnInit():void {
    this.setPhotos()
    this.setUserData()
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }


  // demais metodos -----------------------------------------------------------

  paramLogin():string{
    return String(this.route.snapshot.paramMap.get('login'));
  }

  setPhotos(): void {
    let login = this.paramLogin();
    Notiflix.Block.standard('.userArea')

    this.photoService
      .getUserPhotos(login)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) =>{       
          const data = response.data;

          data.map(item => {
            item.created_at = new Date(item.created_at!).toLocaleDateString('pt-BR');
          });
    
          this.photos = data
        },
        error: (error) => console.error(error)
      });

    setTimeout(() => Notiflix.Block.remove('.userArea'), 1000)

  }

  setUserData(): void {
    let login = this.paramLogin();
    Notiflix.Block.standard('.userPhotosArea')
    this.userService
      .getUser(login)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (response) => this.userData = response.data[0],
        error: (error) => console.error(error)
      })

    setTimeout(() => Notiflix.Block.remove('.userPhotosArea'), 1000)
  }

  openPhoto(photo: any): void { 

    this.dialog.open(PhotoComponent, {
      autoFocus :false,
      data: photo,
    });
  }

}
