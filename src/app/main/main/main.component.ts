import { Component, OnInit } from '@angular/core';

import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  // data service
  questionsList = [];
  getActiveQ = [];
  getNextQ;

  // progress service
  progressPercentage = 0;
  indexOfQuestions = 0;
  numberOfQuestions;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.questionsList = this.dataService.questionsList; // load questions from data service
    this.numberOfQuestions = this.dataService.numberOfQuestions; // load number of questions from data service
  }

  onRadioClicked(element) {
    // if continue to next question
    if ( element.continueToQ ) {
      // progress bar update
      this.indexOfQuestions++; // increase index by 1 // REFINE this to take into account if question is skipped
      this.progressPercentage = this.indexOfQuestions / this.numberOfQuestions * 100; // percentage math
      // ---------------------

      // get active question
      this.getActiveQ = this.questionsList.filter(function(item1) {
        return item1.status === 'active';
      });
      // change current question status to answered
      this.getActiveQ[0].status = 'answered';
      // check if valid or not
      // ...
      // set current question status valid or invalid
      this.getActiveQ[0].valid = true;
      // ------------------------------

      // get chosen option text - element.text
      console.log(element.text);
      // populate answer to .q-answer element
      this.getActiveQ[0].answer = element.text;
      // get next question based on continueToQ attribute
      this.getNextQ = this.questionsList.filter(function(item2) {
        return item2.id === element.continueToQ;
      });
      // go to next question - add active status
      this.getNextQ[0].status = 'active';
      // ------------------------------

    // if continue to sub question
    } else if ( element.continueToSubQ ) {
      // ...
    }
  }

  onSkipClicked() {
    // progress bar update
    this.indexOfQuestions++; // increase index by 1 // REFINE this to take into account if question is skipped
    this.progressPercentage = this.indexOfQuestions / this.numberOfQuestions * 100; // percentage math

    // get active question
    this.getActiveQ = this.questionsList.filter(function(item1) {
      return item1.status === 'active';
    });
    // change current question status to answered
    this.getActiveQ[0].status = 'answered';
    // populate answer to .q-answer element
    this.getActiveQ[0].answer = 'Skipped';
    // get next question
    this.getNextQ = this.questionsList.filter(function(item2) {
      return item2.status === '';
    });
    // go to next question - add active status
    this.getNextQ[0].status = 'active';
  }

}
