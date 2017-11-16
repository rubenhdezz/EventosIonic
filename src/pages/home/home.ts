import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EventoPage } from '../evento/evento';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }
  goToEvento(params){
    if (!params) params = {};
    this.navCtrl.push(EventoPage);
  }
}
