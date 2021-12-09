import Http from "@/utils/http.js";

export const login = (params) => Http.post("/api/login", params);

export const apiSearchBook = (params) => Http.get("/api/searchBook", params);

export const searchBook = (params) =>
  Http.get("/app/open/api/book/search", params);
