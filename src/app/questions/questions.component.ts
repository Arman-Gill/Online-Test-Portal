import { Component, OnInit } from '@angular/core';
import { ReadingQuestionsService } from '../reading-questions.service';
import { Questions } from './questionInterface';

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

  constructor(private service: ReadingQuestionsService) { }
 
  ngOnInit() {

    this.service.fetchQuestions()
        .subscribe(data => this.questions = data.questions)

    this._user = localStorage.getItem('user')!;

  }

  changeQuestion(){
    if(this.current_question == (this.questions.length - 1)) {
      this.testCompleted = true;
    }
    else{
      this.current_question ++;
    }
  }

  updateScore(option:any){
    if (option.correct) this.score++;
  }

  handleclick(option:any){
    this.changeQuestion();
    this.updateScore(option);

  }

  
  

}
