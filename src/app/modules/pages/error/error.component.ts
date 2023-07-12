import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css']
})
export class ErrorComponent implements OnInit {

  error!:number|string;
  title!:String;
  description!:String;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.paramType()
    this.switchType()
  }

  paramType():void{
    this.error = Number(this.route.snapshot.paramMap.get('type'));   
  }

  switchType():void{
    switch(this.error){

      case 404:
        this.title = 'Página não encontrada';
        this.description = 'A página que tentou acessar esta indisponivel ou não existe';
      break;

      case 500:
        this.title = 'Erro interno do servidor';
        this.description = 'Ocorreu um erro com sua requisição. <br> Contate o suporte caso o erro persista';
      break;

      default: 
        this.error = 'Opsss...'
        this.title = 'Algo errado...';
        this.description = 'Ocorreu um erro com sua requisição. <br> Contate o suporte caso o erro persista';
      break;

    }
  }

}
