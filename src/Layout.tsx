import { ReactNode } from 'react';
import SpriteSheet from '@/components/icon/SpriteSheet';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full min-h-screen mx-auto shadow-md max-w-screen-lg bg-mainBackground">
      {SpriteSheet}
      {children}
    </div>
  );
};

export default Layout;
