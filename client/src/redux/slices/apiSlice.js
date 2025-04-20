import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_URL = import.meta.env.VITE_APP_BASE_URL + "/api";
// const API_URL = "http://localhost:8800/api";

// const API_URL = "https://task-manager-standlone.onrender.com"


const baseQuery = fetchBaseQuery({ 
  baseUrl: API_URL,
  credentials: 'include', // This tells fetch to include cookies in cross-origin requests
  prepareHeaders: (headers, { getState }) => {
    // You can also add any additional headers here if needed
    return headers;
  },
});

export const apiSlice = createApi({
  baseQuery,
  tagTypes: [],
  endpoints: (builder) => ({}),
});
