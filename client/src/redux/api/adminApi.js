import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const adminApi = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/admin/" }),
    tagTypes: ["jobs"],
    endpoints: (builder) => {
        return {
            
            addjob: builder.mutation({
                query: jobData => {
                    return {
                        url: "/jobPost",
                        method: "POST",
                        body: jobData
                    }
                },
                transformResponse : data => data.result,
                invalidatesTags: ["jobs"]
            }),
        
        }
    }
})

export const { useAddjobMutation } = adminApi
