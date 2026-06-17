"use strict";

module.exports = async function handler(req, res) {
  try {
    const { getExpressApp } = require("../dist/serverless");
    const app = await getExpressApp();
    await new Promise((resolve, reject) => {
      app(req, res, (err) => (err ? reject(err) : resolve()));
    });
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
