import React, { Component } from 'react';
import { EStatus } from '../models/task';
import MainLayout from '../components/MainLayout';

interface IMainProps {
  filterVal: EStatus;
}

export default class Main extends Component<IMainProps> {
  constructor(props: IMainProps) {
    super(props);
  }
  render() {
    const filterVal = this.props.filterVal;
    return <MainLayout filterVal={filterVal} />;
  }
}
