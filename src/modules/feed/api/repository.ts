import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../../core/axios-base-query";
import { FEED_PAGE_SIZE } from "../consts";
import { GlobalFeedIn } from "./dto/global-feed.in";

interface GLobalFeedParams {
  page: number;
}

export const feedApi = createApi({
  reducerPath: "feedApi",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://api.realworld.io/api",
  }),
  endpoints: (builder) => ({
    getGlobalFeed: builder.query<GlobalFeedIn, any>({
      query: ({ page }) => ({
        url: "/articles",
        method: "get",
        params: {
          limmit: FEED_PAGE_SIZE,
          offset: page * FEED_PAGE_SIZE,
        },
      }),
    }),
  }),
});

export const { useGetGlobalFeedQuery } = feedApi;
