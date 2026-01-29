import { baseApi } from "@/shared/api/baseApi";
import { Post } from "../model/types";

export const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPosts: build.query<Post[], undefined>({
      query: () => "/posts",
    }),
    getPostById: build.query<Post, number>({
      query: (id) => `/posts/${id}`,
    }),
  }),
});

export const { useGetAllPostsQuery, useGetPostByIdQuery } = postApi;
