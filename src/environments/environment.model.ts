
const hostname = window.location.hostname;
export const environmentModel = {
    // ...environmentModel
    production: true,
    hostname: "http://"+hostname+"::4200",
    websocketserver: "ws://"+hostname+":8080",
};
