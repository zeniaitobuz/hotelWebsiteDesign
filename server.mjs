import http from "http";
import * as data from "./js/links.mjs";

const port = 5000;

function getRequestData(req) {
  if (req.url === "/") {
    let status = 200;
    return JSON.stringify({
      status,
      topBanner: data.topBanner,
      room1: data.room1,
      room2: data.room2,
      room3: data.room3,
      wellnessService: data.wellnessService,
      giftCardService: data.giftCardService,
      spaService: data.spaService,
      adventureService: data.adventureService,
      showRooms: data.showRooms,
    });
  } else {
    return JSON.stringify("Page not available.");
  }
}

const server = http.createServer((req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.end(getRequestData(req));
});

server.listen(port, () => {
  console.log("Server started ... ");
});
