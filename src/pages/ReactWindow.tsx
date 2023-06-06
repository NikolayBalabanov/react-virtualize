import React from 'react';
import { FixedSizeList } from 'react-window';
// import AutoSizer from 'react-virtualized-auto-sizer';

export const Row = ({ index, style }: { index: number; style: object }) => (
  <div
    className={`w-[1000px] flex justify-center p-3 ${index % 2 === 0 ? 'odd' : 'even'}`}
    style={style}
  >
    React_Window_Item {index}
  </div>
);

const ReactWindow = () => {
  return (
    <FixedSizeList className="list " height={400} itemCount={1000} itemSize={55} width={'auto'}>
      {Row}
    </FixedSizeList>
    // <AutoSizer>
    //   {({ height, width }: { height: number; width: number }) => (

    //   )}
    // </AutoSizer>
  );
};

export default ReactWindow;
