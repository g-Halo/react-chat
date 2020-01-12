import Emitter from 'component-emitter'

function gSocket(host) {
    // this.socket = new WebSocket(host)
    this.connected = false;
    this.disconnected = true;
}

Emitter(gSocket.prototype);

const socket = new WebSocket("ws://localhost:7834/v1/ws?token=123")
socket.onopen = function() {
    console.log('success to connect to ws')
}
socket.onclose = function() {
    console.warn('ws was close')
}
socket.onerror = function(e) {
    console.warn('ws occur an error', e)
}
socket.onmessage = function(res) {
    // 解析并分发给不同类型的 emit
    if (res.data !== null) {
        if (res.data[0] === '-') {
            // 心跳包
            // console.log('heartbeat')
        } else {
            try {
                const data = JSON.parse(res.data)
                gSocket.prototype.emit('message', data)
            } catch (e) {
                console.warn(e)
            }
        }
    }
}

export default gSocket