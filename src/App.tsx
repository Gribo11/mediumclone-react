import { FC } from 'react';
import {Header} from './common/components/header/header.component';
import {Banner} from './common/components/banner/banner.components';
import { Article } from './modules/feed/components/article/article.components';

interface AppProps {}

export const App: FC<AppProps> = () => {
 

  return (
    <div className="pb-16">
     <Header/>
     <Banner/>
     <Article/>
    </div>
  );
};