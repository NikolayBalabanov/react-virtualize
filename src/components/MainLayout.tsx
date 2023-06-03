import React, { Component } from 'react';
import { EStatus, ITask } from '../models/task';
import TodoList from './TodoList/TodoList';

interface IMainLayoutState {
  tasks: ITask[];
  searchValue: string;
  isAddModalOpen: boolean;
  isNotifyOpen: boolean;
}

interface IMainLayoutProps {
  filterVal: EStatus;
}

export type TChangeTask = (task: ITask) => void;

export default class MainLayout extends Component<IMainLayoutProps, IMainLayoutState> {
  constructor(props: IMainLayoutProps) {
    super(props);
  }

  public render() {
    return (
      <div className="flex flex-col sm:gap-3 gap-2 items-center">
        <TodoList>
          {[...Array(30000).keys()].map((item) => (
            <li key={item}>Row {item}</li>
          ))}
        </TodoList>
      </div>
    );
  }
}
