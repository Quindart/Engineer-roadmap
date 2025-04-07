import axios from "axios";
import HttpProxyAgent from "http-proxy-agent";

const proxyUrl = "http://localhost:8080";
const proxyAgent = new HttpProxyAgent.HttpProxyAgent("http://localhost:8080");
const url = "http://wttr.in/Paris?0";

const options = {
  method: "GET",
  url: url,
  httpAgent: proxyAgent,
};
axios(options)
  .then((response) => {
    console.log("Weather data for Paris through proxy:", response);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
