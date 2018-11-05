import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class DataService {
  questionsList = [];
  numberOfQuestions = 0;

  questions = [
    { 'sections':
      [
        {
        'id': 'section001',
        'type': 'base',
        'title': '',
        'subtitle': '',
        'answer': '',
        'canDelete': true,
        'qs': [
          {
            'id': 'q0001',
            'status': 'active',
            'valid': false,
            'showIf': {
                'q0001': 'Yes',
                'q0002': 'No'
            },
            'level': 0,
            'type': 'fieldset',
            'title': 'Have you been a US citizen, by birth or naturalization, on the last day of 2017?',
            'info': {
                'type': 'MODAL',
                'title': 'Title in case of Modal or Popover',
                'content': '<img /><h3></h3><p></p>'
            },
            'canSkip': true,
            'feedback': '',
            'fieldset': {
              'id': 'fieldset0001',
              'fields': [{
                'id': 'field0001',
                'typeRadio': true,
                'label': null,
                'placeholder': null,
                'continue': true,
                'values': [
                  {'id': 1, 'text': 'Yes', 'continueToQ': 'q0002'},
                  {'id': 2, 'text': 'No', 'continueToQ': 'q0002'}
                ],
                'default': 1,
                'feedback': 'Feedback message',
                'error': 'Error message'
              }]
            }
          },
            {
              'id': 'q0002',
              'status': '',
              'valid': false,
              'showIf': {},
              'level': 0,
              'type': 'fieldset',
              'title': 'Do you have a US tax identification number (ITIN/SSN)?',
              'subtitle': '',
              'info': false,
              'canSkip': true,
              'feedback': '',
              'fieldset': {
                'id': 'fieldset0002',
                'fields': [
                  {
                    'id': 'field0002',
                    'typeRadio': true,
                    'label': null,
                    'placeholder': null,
                    'values': [
                      {'id': 1, 'text': 'Yes', 'continueToSubQ': 'field0003'},
                      {'id': 2, 'text': 'No', 'continueToQ': 'q0003'}
                    ],
                    'default': 1,
                    'feedback': 'Feedback message',
                    'error': 'Error message'
                  },
                  {
                    'id': 'field0003',
                    'typeInput': true,
                    'label': 'Please enter your ITIN',
                    'placeholder': null,
                    'values': {},
                    'default': null,
                    'feedback': 'Feedback message',
                    'error': 'Only numbers please'
                  },
                  {
                    'id': 'field0004',
                    'typeButton': true,
                    'label': null,
                    'placeholder': null,
                    'values': {},
                    'default': null,
                    'feedback': 'Feedback message',
                    'error': 'Error message'
                  }
                ]
              }
            }, {
              'id': 'q0003',
              'status': '',
              'valid': false,
              'showIf': {},
              'level': 0,
              'type': 'fieldset',
              'title': 'What was your visa?',
              'subtitle': '',
              'info': false,
              'canSkip': true,
              'feedback': '',
              'fieldset': {
                'id': 'fieldset0003',
                'fields': [
                  {
                    'id': 'field0005',
                    'typeSelect': true,
                    'label': 'Please select your visa',
                    'placeholder': null,
                    'values': [
                      {'id': 1, 'text': 'Visa 1'},
                      {'id': 2, 'text': 'Visa 2'},
                      {'id': 3, 'text': 'Visa 3'}
                    ],
                    'default': 1,
                    'feedback': 'Feedback message',
                    'error': 'Error message'
                  },
                  {
                    'id': 'field0006',
                    'typeButton': true,
                    'label': null,
                    'placeholder': null,
                    'values': {},
                    'default': null,
                    'feedback': 'Feedback message',
                    'error': 'Error message'
                  }
                ]
              }
            }, {
              'id': 'q0004',
              'status': '',
              'valid': false,
              'showIf': {},
              'level': 0,
              'type': 'fieldset',
              'title': 'Please provide details below of all your visits to the US starting from 2015',
              'subtitle': '',
              'info': false,
              'canSkip': true,
              'feedback': 'Your residency status is determined by the complete history of all your visits to the US.',
              'fieldset': {
                'id': 'fieldset0004',
                'fields': [
                  {
                    'id': 'field0007',
                    'typeGrid': true,
                    'label': 'Please select your visa',
                    'placeholder': null,
                    'valuesHead': [
                      {'text': 'Visa type / Visitor status', 'class': 'col-12 col-lg-7'},
                      {'text': 'Entered US on', 'class': 'col-5 col-lg-2'},
                      {'text': 'Leaving US on', 'class': 'col-5 col-lg-2'},
                      {'text': '', 'class': 'col-2 col-lg-1'}
                    ],
                    'rows': [
                      {
                        'select': [
                          {'id': 1, 'text': 'Visa 1'},
                          {'id': 2, 'text': 'Visa 2'},
                          {'id': 3, 'text': 'Visa 3'}
                        ],
                        'datepickers': [
                          {'id': 1},
                          {'id': 2}
                        ],
                      },
                      {
                        'select': [
                          {'id': 4, 'text': 'Visa 4'},
                          {'id': 5, 'text': 'Visa 5'},
                          {'id': 6, 'text': 'Visa 6'}
                        ],
                        'datepickers': [
                          {'id': 3},
                          {'id': 4}
                        ],
                      }
                    ],
                    'default': 1,
                    'feedback': 'Feedback message',
                    'error': 'Error message'
                  }
                ]
              }
            }
          ]
        }
      ]
    }
  ];

  constructor() {
    this.questionsList = this.questions[0].sections[0].qs;
    this.numberOfQuestions = this.questionsList.length;
  }
}
