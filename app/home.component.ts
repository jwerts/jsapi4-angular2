import { Component, ElementRef } from 'angular2/core';
import { HomeViewModel } from 'esri-mods';

@Component({
  selector: 'esri-home',
  template: '<a class="esri-home" href="#" (click)="onClick($event)"><i class="material-icons">home</i></a>',
  styles: [
`
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
.esri-home {
  position: absolute;
  right: 1em;
  top: 1em;
  padding: 1em;
  color: rgba(255,255,255,1);
}

.esri-home:hover {
  color: rgba(255,255,255,0.75);
}

.esri-home>i {
  font-size: 3em;
  text-shadow: 1px 1px 2px black; 
}
`
  ]
})
export class HomeComponent {

  vm: HomeViewModel = null;

  constructor() {
    this.vm = new HomeViewModel({});
  }

  setView(view) {
    this.vm.set('view', view);
  }

  onClick(e) {
    e.preventDefault();
    if (!this.vm.view) {
        return;
    }
    this.vm.goHome();
  }
}