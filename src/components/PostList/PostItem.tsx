import React from 'react';
import MyButton from '../UI/button/MyButton';
import { IPost } from 'models/post';

interface IPostItem {
  post: IPost;
}

export default function PostItem({ post }: IPostItem) {
  return (
    <div className="post">
      <div className="post__content">
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="post__btns">
        <MyButton cb={() => console.log('Открыть')}>Открыть</MyButton>
        <MyButton cb={() => console.log('Удалить')}>Удалить</MyButton>
      </div>
    </div>
  );
}
