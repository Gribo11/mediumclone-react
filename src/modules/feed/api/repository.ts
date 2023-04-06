import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../core/axios-base-query";
import { FEED_PAGE_SIZE } from "../consts";
import { FeedArticle, GlobalFeedInDTO } from "./dto/global-feed.in";
import { PopularTagsInDTO } from "./dto/popular-tags.in";

interface GLobalFeedParams {
  page: number;
  tag: string | null;
}

export interface FeedData {
  articles: FeedArticle[];
  articlesCount: number;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<FeedData, GLobalFeedParams>({
      query: ({ page, tag }) => ({
        url: "/articles",
        params: {
          limmit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
          tag,
        },
      }),
      transformResponse: (response: GlobalFeedInDTO) => {
        return {
          articles: response.articles || [],
          articlesCount: response.articlesCount || 0,
        };
      },
    }),
    getPopularTags: builder.query<PopularTagsInDTO, any>({
      query: ({}) => ({
        url: "/tags",
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery, useGetPopularTagsQuery } = feedApi;
