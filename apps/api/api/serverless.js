"use strict";
const { getExpressApp } = require("../dist/serverless");

module.exports = async function handler(req, res) {
  try {
    const app = await getExpressApp();
    app(req, res);
  } catch (err) {
    console.error("API handler error:", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "application/json");
      res.end(
        JSON.stringify({
          statusCode: 500,
          message: err instanceof Error ? err.message : "Internal server error",
        })
      );
    }
  }
};
