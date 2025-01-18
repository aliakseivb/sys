import { Injectable } from '@angular/core';
import {InterviewType} from "../types/interview.type";

@Injectable({
  providedIn: 'root'
})
export class InterviewsService {

  interviews: InterviewType[] = [
    {
      uniqId: 1,
      user: {
        userId: 1,
        image: 'string',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, nisi',
      },
      vacancyPlace: "EPAM",
      vacancyName: ['Product designer', 'Product manager'],
      question: 'What’s your favorite product and why?',
      saveFavorite: false,
      otherAnswers: {
        amount: 2,
        otherAnswersElem: [
          {
            otherUserId: 2,
            userFace: '../../assets/images/page/main/face-1.png',
            text: 'Clarify “What do you mean by favourite product? Are you thinking...'
          },
          {
            otherUserId: 3,
            userFace: '../../assets/images/page/main/face-2.png',
            text: 'Clarify “What do you mean by favourite product? Are you thinking...'
          }
        ]
      }
    },
    {
      uniqId: 1,
      user: {
        userId: 1,
        image: 'string',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, nisi',
      },
      vacancyPlace: "Andersen",
      vacancyName: ['Product designer'],
      question: 'How would you design a website for Arabian market?',
      saveFavorite: false,
      otherAnswers: {
        amount: 2,
        otherAnswersElem: [
          {
            otherUserId: 4,
            userFace: '../../assets/images/page/main/face-1.png',
            text: 'Clarify “What do you mean by favourite product? Are you thinking...'
          },
          {
            otherUserId: 5,
            userFace: '../../assets/images/page/main/face-2.png',
            text: 'Clarify “What do you mean by favourite product? Are you thinking...'
          }
        ]
      }
    },
    {
      uniqId: 1,
      user: {
        userId: 1,
        image: 'string',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum, nisi',
      },
      vacancyPlace: "Meta",
      vacancyName: ['Product manager', 'Product designer'],
      question: 'How would you design a website for Arabian market?',
      saveFavorite: false,
      otherAnswers: {
        amount: 2,
        otherAnswersElem: [
          {
            otherUserId: 6,
            userFace: '../../assets/images/page/main/face-1.png',
            text: 'Clarify “What do you mean by favourite product? Are you thinking...'
          },
          {
            otherUserId: 7,
            userFace: '../../assets/images/page/main/face-2.png',
            text: 'Clarify “What do you mean by favourite product? Are you thinking...'
          }
        ]
      }
    }
  ];

  getInterviewsItem(){
    return this.interviews
  }
  constructor() { }
}
