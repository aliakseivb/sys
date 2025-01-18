import {Component, Input, OnInit} from '@angular/core';
import {InterviewType} from "../../types/interview.type";

@Component({
  selector: 'card-interview',
  templateUrl: './card-interview.component.html',
  styleUrls: ['./card-interview.component.scss']
})
export class CardInterviewComponent implements OnInit {

  @Input() interview!: InterviewType

  constructor() { }

  ngOnInit(): void {
  }

}
