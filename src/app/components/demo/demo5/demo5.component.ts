import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo5',
  templateUrl: './demo5.component.html',
  styleUrls: ['./demo5.component.scss']
})
export class Demo5Component implements OnInit {

  maValeur : string = "Hello world !"

  valeurVenantDeEnfant! :string

  constructor() { }

  ngOnInit(): void {
  }

  changerMaValeur(newValeur : string) {
    this.valeurVenantDeEnfant = newValeur
  }

}
