// import io from 'socket.io-client';
const HOST="ws://localhost:7834/v1/ws?token=test";
export default new WebSocket(HOST);