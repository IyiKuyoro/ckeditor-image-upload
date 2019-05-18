import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/models/IArticle';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  article: IArticle

  constructor(
    private router: Router,
  ) {
    this.article = {
      title: this.router.getCurrentNavigation().extras.state.title,
      text: this.router.getCurrentNavigation().extras.state.text
    };
  }

}
