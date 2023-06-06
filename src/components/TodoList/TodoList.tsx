import React from 'react';

interface ITodoListProps {
  children: JSX.Element[] | JSX.Element;
}

export default function TodoList({ children }: ITodoListProps) {
  return <ul className="flex flex-col w-full justify-center gap-3">{children}</ul>;
}
