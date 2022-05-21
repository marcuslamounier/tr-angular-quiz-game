import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public currentGame: boolean = true
  public typeFinish: string
  
  public finishGame(type: string): void {
    this.currentGame = false
    this.typeFinish = type
  }

  public resetGame(): void {
    this.currentGame = true
    this.typeFinish = undefined
  }

}
