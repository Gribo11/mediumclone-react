import { FC } from "react";
import { Header } from "./common/components/header/header.component";
import { Route, Routes } from "react-router-dom";
import { GlobalFeedPage } from "./modules/feed/pages/global-feed.page";
import { ProfilePage } from "./modules/profile/pages/profile.page";
import { ArticlePage } from "./modules/feed/pages/article.page";
import { SignUpPage } from "./modules/auth/pages/sing-up.page";

interface AppProps {}

export const App: FC<AppProps> = () => {
  return (
    <div className="pb-16">
      <Header />
      <Routes>
        <Route path="/" element={<GlobalFeedPage />} />
        <Route path="/:profile" element={<ProfilePage />} />
        <Route path="/:profile/favorites" element={<ProfilePage />} />
        <Route path="/article/:slug" element={<ArticlePage />} />
        <Route path="/sign-up" element={<SignUpPage />} />
      </Routes>
    </div>
  );
};
