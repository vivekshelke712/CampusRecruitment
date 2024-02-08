import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import { getAllJobs } from "../../../../server/controllers/userController"

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api/v1/user/" }),
    tagTypes: ["userApi"],
    endpoints: (builder) => {
        return {
            getAllJobs: builder.query({
                query: () => {
                    return {
                        url: "/getJobs",
                        method: "GET"
                    }
                },
                transformResponse : data => data.result,
                providesTags: ["userApi"]
            }),
            
        
        }
    }
})

export const { useGetAllJobsQuery } = userApi
