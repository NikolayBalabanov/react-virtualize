import PostsService from '../API/PostService';
import PostList from '../components/PostList/PostList';
import Loader from '../components/UI/Loader/Loader';
import MySelect from '../components/UI/MySelect/MySelect';
import MyButton from '../components/UI/button/MyButton';
import { useFetching } from '../hooks/useFetching';
import { useObserver } from '../hooks/useObserver';
import { IPost } from 'models/post';
import React, { useEffect, useRef, useState } from 'react';
import { getPageCount } from '../utils/getPageCount';

export const NiceTry = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [totalPages, setTotalPages] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const lastElement = useRef<HTMLDivElement | null>(null);

  const {
    error: fetchError,
    fetching: fetchPosts,
    isLoading: isPostsLoading,
  } = useFetching(async () => {
    const response = await PostsService.getAll(limit, page);
    setPosts([...posts, ...response.data]);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage((page) => page + 1);
  });

  useEffect(() => {
    fetchPosts([limit, page]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit]);

  return (
    <main className="px-3 sm:py-10 py-3">
      <div className="flex flex-col sm:gap-3 gap-2 items-center">
        <MySelect
          value={limit}
          onChange={(value) => setLimit(value)}
          defaultValue={'Количество постов на страницe'}
          options={[
            { value: 5, name: '5' },
            { value: 10, name: '10' },
            { value: 25, name: '25' },
            { value: -1, name: 'Показать все' },
          ]}
        ></MySelect>
        {fetchError && (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
            }}
          >
            <h1
              style={{
                marginBottom: 20,
              }}
            >
              Произошла ошибка загрузки постов, повторите загрузку
            </h1>
            <MyButton cb={() => fetchPosts()}>Загрузить</MyButton>
          </div>
        )}
        <PostList posts={posts} title={'Список постов'} />
        <div ref={lastElement} style={{ height: 20 }}></div>
        {isPostsLoading && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 40,
            }}
          >
            <Loader />
          </div>
        )}
      </div>
    </main>
  );
};
