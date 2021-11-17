import Http from "@/utils/http.js";

export const login = (params) => Http.post("/api/login", params);
