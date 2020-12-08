import { Component, OnInit } from '@angular/core';
import { FeedbackDataService } from '../feedback-data.service';

@Component({
  selector: 'app-feedback-tool',
  templateUrl: './feedback-tool.component.html',
  styleUrls: ['./feedback-tool.component.css']
})
export class FeedbackToolComponent implements OnInit {
  newtitle :string;
  newscore :number;
  newquality: number;
  newcreativity: number;
  newapproach: number;
  avg:number;
  constructor(
    private fbService: FeedbackDataService // inject service
  ) { }

  ngOnInit( ): void {}

  add() {
    console.log(this.newtitle, this.newscore, this.newquality, this.newcreativity,this.newapproach);
     this.avg = (this.newapproach+this.newscore+this.newquality+this.newcreativity)/4;
    this.fbService.submit(this.newtitle, this.avg);
  }

}
