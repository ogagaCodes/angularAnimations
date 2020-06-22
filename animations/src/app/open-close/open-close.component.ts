import { Component, OnInit, HostBinding } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css']
})
export class OpenCloseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }
  onAnimationEvent(event: AnimationEvent) {
    // console.warn(`Phase: ${event.phaseName}`);
    //  // openClose is trigger name in this example
    //  console.warn(`Animation Trigger: ${event.triggerName}`);
  }
}
