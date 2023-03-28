import * as http from "http";
import * as url from "./link.mjs"
const port = 200;



const myserver = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(getRequestData(req));
});

myserver.listen(port, () => {
  console.log("port ...", port);
});

function getRequestData(req) {
  if (req.url === "/") {
    return JSON.stringify({
        topBanner:url.topBanner,
        portrait:url.portrait,
        hotel:url.hotel,
        landscape:url.landscape,
        room1:url.room1,
        room2:url.room2,
        room3:url.room3
    });
  }
}
