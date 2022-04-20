import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';
import { ReadingQuestionsService } from '../reading-questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {

  public _user : string = '';
  public questions : any = [];
  public current_question = 0;
  public score : number = 0;
  public testCompleted : boolean = false;
  public interval$ :any;
  counter = 60;

  constructor(private service: ReadingQuestionsService) { }
 
  ngOnInit() {

    this.service.fetchQuestions()
        .subscribe(data => this.questions = data.questions)

    this._user = localStorage.getItem('user')!;
    this.startTimer()

  }

  changeQuestion(){
    if(this.current_question == (this.questions.length - 1)) {
      this.testCompleted = true;
      this.stopTimer()
    }
    else{
      
      this.current_question++;
      this.resetTimer();
      
    }
  }

  updateScore(option:any){
    if (option.correct) this.score++;
  }

  handleclick(option:any){
    this.changeQuestion();
    this.updateScore(option);

  }

  startTimer(){
    this.interval$ = interval(1000)
    .subscribe(val=>{
      this.counter--;
      if (this.counter===0){
        this.changeQuestion()}
      });
  
    

    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 1000000);

  }

  stopTimer(){
    this.interval$.unsubscribe();
    this.counter = 0;
  }

  resetTimer(){
    this.stopTimer()
    this.counter = 60;
    this.startTimer();

  }

}
