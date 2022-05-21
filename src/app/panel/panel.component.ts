import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';

import { Sentence } from "../shared/sentence.model"
import { SENTENCES } from "./sentences-mock"


@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public sentences: Sentence[] = SENTENCES
  public instruction: string = "Translate the following sentence:"
  public answer: string = ""

  public round: number = 0
  public roundSentence: Sentence

  public progress: number = 0
  public attempts: number = 3

  @Output() public finishGame: EventEmitter<string> = new EventEmitter()

  constructor() {
    this.getRoundSentence()
  }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    
  }

  public getRoundSentence(): void {
    this.roundSentence = this.sentences[this.round]
  }

  public clearAnswer(): void {
    this.answer = ""
  }

  public updateAnswer(answer: Event): void {
    this.answer = (<HTMLInputElement>answer.target).value
  }

  public checkAnswer(): void {

    if (this.answer == this.roundSentence.enSentence) {
      this.round ++
      this.progress += (100 / this.sentences.length)

      if (this.round === 4) {
        this.finishGame.emit("winner")
      }

      this.clearAnswer()
      this.getRoundSentence() 
    }
    else {
      this.attempts --
      if (this.attempts < 0){
        this.finishGame.emit("loser")
      }
    }

  }

}