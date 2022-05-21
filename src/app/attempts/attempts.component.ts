import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { Heart } from "../shared/heart.model"

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  @Input() public attempts: number

  public hearts: Heart[] = [
    new Heart(), new Heart(), new Heart()
  ]

  constructor() {
    
  }

  public setHeart(heart: Heart): boolean {
    return (heart.full ? false : true)
  }

  ngOnChanges() {
    if (this.attempts !== this.hearts.length) {
      let index = this.hearts.length - this.attempts
      this.hearts[index - 1].full = false
    }

  }

  ngOnInit(): void {
  }

}
