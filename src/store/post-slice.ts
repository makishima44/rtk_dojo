import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.typicode.com" }),
  endpoints: (build) => ({
    getAllPosts: build.query<Post[], undefined>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetAllPostsQuery } = postApi;
