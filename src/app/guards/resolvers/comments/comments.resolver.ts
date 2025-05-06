import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { comments, CommentsService } from '../../../pages/comments/service/comments.service';

export const commentsResolver: ResolveFn<Array<comments>> = async (route, state) => {
  const commentsService = inject(CommentsService)
  return await commentsService.getComments()
};
