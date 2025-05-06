import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { comments } from './service/comments.service';
import { CommonModule } from '@angular/common';
import { map } from 'rxjs';

@Component({
  selector: 'hinv-comments',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './comments.component.html',
  styleUrl: './comments.component.scss'
})
export class CommentsComponent implements OnInit {

  constructor(
    private activateRoute: ActivatedRoute
  ) { }

  $commentsObs = this.activateRoute.data.pipe(map(val => val['comments']))

  comments!: {
    columns: Array<keyof comments>
    rows: Array<comments>
  }

  ngOnInit(): void {
    this.initializeData()
  }

  initializeData() {
    this.$commentsObs.subscribe((val: Array<comments>) => {
      const commentsRes: Array<comments> = val

      this.comments = {
        columns: Object.keys(commentsRes[0]) as Array<keyof comments>,
        rows: commentsRes
      }
    })

  }
}
