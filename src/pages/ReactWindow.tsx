import React from 'react';
import { FixedSizeList } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';

export const Row = ({ index, style }: { index: number; style: object }) => (
  <div className={index % 2 === 0 ? 'odd' : 'even'} style={style}>
    ReactWindow
  </div>
);

const ReactWindow = () => {
  return (
    <AutoSizer>
      {({ height, width }: { height: number; width: number }) => (
        <FixedSizeList className="list" height={400} itemCount={1000} itemSize={35} width={width}>
          {Row}
        </FixedSizeList>
      )}
    </AutoSizer>
  );
};

export default ReactWindow;
