
import React from 'react'

import path from 'path'

import ReactDOMServer from 'react-dom/server'

import { Provider } from 'react-redux'

import store from '../src/store'

import APP from '../src/App'

var express = require("express");

const renderFullPage = (html, preloadState) => {

    return `<!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
      <title>React App</title>
    </head>
    <body>
      <div id="root">${html}</div>
      <script>window.__INITIAL_STATE__ =${JSON.stringify(preloadState)}</script>
      <script src="/static/js/bundle.js"></script>
    </body>
   </html>
   `
}

const handleRender = (req,res)=>{

    const html = ReactDOMServer.renderToString(

        <Provider store = {store}>
            <APP/>>
        </Provider>
    )

    const preloadState = store.getState()

    res.send(renderFullPage(html,preloadState))
}


app.use(handleRender)

app.listen(3007, (error) => {
    if (error) {
         console.error(error)
    }
})

