import React from 'react';

export const Wrapper = ({ children }: { children: JSX.Element }) => {
  console.log('qweqweqw');
  return (
    <main className="px-3 sm:py-10 py-3">
      <div className="flex flex-col sm:gap-3 gap-2 items-center">{children}</div>
    </main>
  );
};
