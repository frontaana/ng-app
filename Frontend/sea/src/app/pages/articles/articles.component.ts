import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

import { contentData, Themes, Titles } from '../../interfaces/consultations';
import { js_questions_response, ts_questions_response, html_questions_response, css_questions_response, architecture_questions_response, dev_tools_questions_response, protocols_questions_response } from '../../constants/competence-map';
import { CardComponent } from '../../components/card/card.component';

@Component({
    selector: 'ng-app-articles',
    imports: [
        CommonModule,
        MatCardModule,
        MatButtonModule,
        MatCheckboxModule,
        MatExpansionModule,
        MatIconModule,
        CardComponent
    ],
    templateUrl: './articles.component.html',
    styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  
  cards = [{
    title: 'Quizzes',
    subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, eaque tempora.'
  }];

  // accordion = viewChild.required(MatAccordion);

  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

  data_js: Themes[] = [];
  data_ts: Themes[] = [];
  data_html: Themes[] = [];
  data_css: Themes[] = [];
  data_architecture: Themes[] = [];
  data_dev_tools: Themes[] = [];
  data_protocols: Themes[] = [];

  data: Themes[][] = [];

  constructor() {
    this.data_js = this.transformData(js_questions_response, Titles.js);
    this.data_ts = this.transformData(ts_questions_response, Titles.ts);
    this.data_html = this.transformData(html_questions_response, Titles.html);
    this.data_css = this.transformData(css_questions_response, Titles.css);
    this.data_architecture = this.transformData(architecture_questions_response, Titles.architecture);
    this.data_dev_tools = this.transformData(dev_tools_questions_response, Titles.dev_tools);
    this.data_protocols = this.transformData(protocols_questions_response, Titles.protocols);

    this.data = [this.data_js, this.data_ts, this.data_html, this.data_css, this.data_architecture, this.data_dev_tools, this.data_protocols];
  }

  
  transformData(response: { title: string, level: number }[], title: Titles) {

    return response.map(item => {

      const contentData = item.title.split(". ").map(text => {
        return {
          title: text,
          description: '',
          completed: false,
        } as contentData;
      });

      return {
        title: title,
        level: item.level,
        contentData: contentData,
      }
    });
  }
}
