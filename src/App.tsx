import { FC } from 'react';

interface AppProps {}

export const App: FC<AppProps> = () => {
 

  return (
    <div className="pb-16">
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
};