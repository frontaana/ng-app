import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'ng-app-folders',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './folders.component.html',
  styleUrl: './folders.component.scss'
})
export class FoldersComponent {
  public containers = [
    {
      title: '1',
      childs: [
        {
          title: '1.1',
        },
        {
          title: '1.2',
        },
      ],
    },
    {
      title: '2',
      childs: [
        {
          title: '2.1',
        },
        {
          title: '2.2',
          childs: [
            {
              title: '2.2.1',
            },
            {
              title: '2.2.2',
            },
          ],
        },
      ],
    },
  ];

  public getTitle(nodeName: string): string {
    return `Отдел ${nodeName}`;
  }
}
