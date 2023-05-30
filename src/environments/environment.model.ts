
const hostname = window.location.hostname;
export const environmentModel = {
    // ...environmentModel
    production: false,
    
    applicationAuthor: "Bruno Cardon",
    applicationRepository: "Bruno Cardon",
    applicationTitle: "Angular App Websocket",

    hostname: "http://"+hostname+"::4200",
    websocketserver: "ws://"+hostname+":8080",
};
