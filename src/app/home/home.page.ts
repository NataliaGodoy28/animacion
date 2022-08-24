import { Component, OnInit } from '@angular/core';
import { AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  input: string;

  constructor(private anim: AnimationController) {}

  validar(){
    if(this.input === '' || this.input == null){
    this.anim.create()
    .addElement(document.querySelector('#input'))
    .duration(100)
    .iterations(3)
    .fromTo('transform', 'translateX(-10px)', 'translateX(0px)')
    .fromTo('border', '1px red solid', '1px black solid')
    .fromTo('background','red','white')
    .fromTo('background','red','white')
    .play();
  }
}

ngOnInit(): void {
  this.anim.create()
  .addElement(document.querySelector('img'))
  .duration(3000)
  .delay(1000)
  .keyframes([
    {offset: 0.25, transform: 'scale(0.8)'},
    {offset: 0.35, transform: 'scale(0.8) rotate(-20deg)'},
    {offset: 0.45, transform: 'scale(0.8) rotate(0deg)'},
    {offset: 0.55, transform: 'scale(0.8) rotate(20deg)'},
    {offset: 0.65, transform: 'scale(0.8) rotate(0deg)', opacity:1},
    {offset: 1, transform: 'scale(1)', opacity: 0}
    ])
  .play();
}

}
