import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonSearchbar,
  IonIcon,
  IonCard,
  IonCardContent,
  IonButton,
  IonAvatar,
} from '@ionic/angular/standalone';
import { register } from 'swiper/element';
import { addIcons } from 'ionicons';
import { triangle, ellipse, square, home, calendar, helpBuoyOutline } from 'ionicons/icons';

register();
@Component({
  selector: 'app-tab1',
  standalone: true,
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonSearchbar,
    IonIcon,
    IonCard,
    IonCardContent,
    IonButton,
    IonAvatar,
  ],
})
export class Tab1Page {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    autoplay: true,
    loop: true
  };
  constructor() {
    addIcons({ triangle, ellipse, square, home, calendar, helpBuoyOutline });
  }
}
