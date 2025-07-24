import { Component, OnInit, viewChild } from '@angular/core';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import { js_questions_response } from './competence-map.const';
import { CommonModule } from '@angular/common';

type contentData = {
  title: '',
  description: '',
  completed: false,
}

@Component({
  selector: 'asea-consultations',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatIconModule,
  ],
  templateUrl: './consultations.component.html',
  styleUrl: './consultations.component.scss'
})
export class ConsultationsComponent {
  // accordion = viewChild.required(MatAccordion);

  longText = `The Chihuahua is a Mexican breed of toy dog. It is named for the
  Mexican state of Chihuahua and is among the smallest of all dog breeds. It is
  usually kept as a companion animal or for showing.`;

  response = js_questions_response;

  // data: { title: string, level: number, contentData: string[] }[] = [];

  data: { title: string, level: number, contentData: contentData[] }[] = [];

  constructor() {
    this.transformData(js_questions_response);
  }

  transformData(response: { data: string, level: number }[]): void {

    this.data = response.map(item => {

      const contentData = item.data.split(". ").map(text => {
        return {
          title: text,
          description: '',
          completed: false,
        } as contentData;
      });

      return {
        title: 'Javascript',
        level: item.level,
        contentData: contentData,
      }
    });
  }

}
