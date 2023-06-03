import React from 'react';
import PostItem from './PostItem';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { IPost } from 'models/post';

interface IPostList {
  posts: IPost[];
  title: string;
}

export default function PostList({ posts, title }: IPostList) {
  if (!posts.length) {
    return <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>;
  }

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>{title}</h1>
      <TransitionGroup>
        {posts.map((post) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem post={post} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
}
