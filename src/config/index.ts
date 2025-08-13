const config = {
  baseUrl: "/api/",
};

const BASE_URL =
  location.hostname === "localhost" ? "http://localhost:3000/" : config.baseUrl;

export { BASE_URL };
