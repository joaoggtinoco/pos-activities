import axios from "axios"

export const moviesApi = axios.create(
  {
    baseURL: "https://api.themoviedb.org/3/",
    headers:{
      Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjNzM4Mzc3YWEwM2RmNmE1OWYzMGZmMjczOWNmOGEwMyIsIm5iZiI6MTc0MzAzNDI0Ny42NzI5OTk5LCJzdWIiOiI2N2U0OTc4NzQyMWViOGMzMzFiYTI3N2EiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.EaT8mFUnfrypJ7WWpDhbAfMxxJj7Bjct0Uc8G_6XgVQ"
    }
  }
)