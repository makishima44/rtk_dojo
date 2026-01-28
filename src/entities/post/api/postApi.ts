import { baseApi } from "@/shared/api/baseApi";
import { Post } from "../model/types";

export const postApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllPosts: build.query<Post[], undefined>({
      query: () => "/posts",
    }),
  }),
});

export const { useGetAllPostsQuery } = postApi;
