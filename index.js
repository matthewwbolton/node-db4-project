const server = require("./api/server");

const port = process.env.PORT || 9001;

server.listen(port, () => {
  console.log(`\n===   The server is running on port ${port}   ===\n`);
});
