import fetch from "node-fetch";
import HttpProxyAgent from "http-proxy-agent";
const fetchData = async (url) => {
  try {
    const proxyAgent = new HttpProxyAgent.HttpProxyAgent(
      "http://localhost:8080"
    );
    const response = await fetch(url, { agent: proxyAgent });
    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

fetchData("http://toscrape.com/");
