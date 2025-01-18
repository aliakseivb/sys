import {Component, OnInit} from '@angular/core';
import {InterviewsService} from "../../services/interviews.service";
import {InterviewType} from "../../types/interview.type";
import {LoaderService} from "../../services/loader.service";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  interviews: InterviewType[] = [];

  constructor(private interviewsService: InterviewsService,
              private loaderService: LoaderService) {
  }

  ngOnInit(): void {
    this.loaderService.show(true);
    setTimeout(() => {
      this.interviews = this.interviewsService.getInterviewsItem();
      this.loaderService.hide(false);
    }, 1000)
  }
}
