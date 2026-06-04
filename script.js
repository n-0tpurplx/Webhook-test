function SendMsg() {
  fetch("https://discord.com/api/webhooks/1512024929141391520/DWpAYzJJCov3aYdcbpg4HVG9UKyhd4HlRUUIorpw-hx03Oltf3kI5SQdqs6rgOXo_PH8"), {
    method: "POST"
    headers: {
      "Content-Type": "message"
      "text": "Hello!"
    }
  }
}
