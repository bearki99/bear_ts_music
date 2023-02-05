import React, { ReactNode } from 'react';
import { Suspense } from 'react';
import { memo } from 'react';
import { Outlet } from 'react-router-dom';
interface IProps {
  children?: ReactNode;
}

const Discover: React.FC<IProps> = () => {
  return (
    <div>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default memo(Discover);
