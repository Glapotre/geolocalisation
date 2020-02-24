// Ajouter OnInit pour effectuer des opérations à l'initialisation du composant.
import { Component, OnInit } from '@angular/core';
 
import * as L from 'leaflet';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
// Implémenter OnInit
export class AppComponent implements OnInit {
 
// Fonction d'initialisation du composant.
ngOnInit() {
  // Déclaration de la carte avec les coordonnées du centre et le niveau de zoom.
  const myfrugalmap = L.map('frugalmap').setView([43.5215, 5.5125], 18);
 
  L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: 'Frugal Map'
  }).addTo(myfrugalmap);

  const myIcon = L.icon({
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.2.0/images/marker-icon.png'
  });
  L.marker([43.5219, 5.5122], {icon: myIcon}).bindPopup('Point de depart').addTo(myfrugalmap).openPopup();
  
}
}
