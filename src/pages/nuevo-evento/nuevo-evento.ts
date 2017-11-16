import { Component,ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular'; 

declare var google: any;

@Component({
  selector: 'page-nuevo-evento',
  templateUrl: 'nuevo-evento.html'
})
export class NuevoEventoPage {

  		@ViewChild('map') mapRef: ElementRef;


  constructor(public navCtrl: NavController) {}

  ionViewDidLoad(){
  	this.showMap(); 
  }

  showMap(){
   //location
   const location = new google.maps.LatLng(51.507351, -0.127758);

   //MapOption
   const options = {
   	center: location,
   	zoom: 10
  	}
  	const map = google.maps.Map(this.mapRef.nativeElement,options);
  	this.addMarker(location, map)
  }

  addMarker(position, map){
  	return new google.maps.Marker({
  		position,
  		map
  	});
  }
}