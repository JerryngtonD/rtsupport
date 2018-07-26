let ws = new WebSocket('ws://localhost:5000')
let message = {
  name: 'channel add',
  data: {
    id: '234',
    name: 'Hardware Support'
  }
}

ws.onopen = () => {
  ws.send(JSON.stringify(message))
}

ws.onmessage = (e) => {
  console.log(JSON.parse(e.data))
}
