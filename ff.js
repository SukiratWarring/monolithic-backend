import jwt from "jsonwebtoken";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbElkIjoic3VraXJhdEBnYW1pbC5jb20iLCJfaWQiOiI2NTU1ZmIyMjUxMjk5YWFhODBlYmYzNWYiLCJpYXQiOjE3MDAxMzYwNTEsImV4cCI6MTcwMDE0MzI1MX0.gFARcfbSpxv-vtTuFFfG7DKDdvOCxB5aNGLzjCPjPPA";
console.log("jwt.decode(token)", jwt.decode(token, ""));
