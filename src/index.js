import React from "react"
import reactDom from "react-dom/client"
import "bootstrap/dist/css/bootstrap.css"
import App from "./app"

const container = reactDom.createRoot(document.getElementById('root'))
container.render(<App />)

