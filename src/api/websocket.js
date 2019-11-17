if (typeof window.ws === 'undefined') {
    window.ws = new WebSocket("ws://localhost:8080/msg");
}

ws.onopen = function (evt) {
    console.log("Connection open ...");
    // ws.send("Hello WebSockets!");
};