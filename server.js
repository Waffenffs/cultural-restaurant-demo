import express from 'express';
import ViteExpress from 'vite-express'

const app = express();

// serve routes
app.use(ViteExpress.static())

// run app in production mode
ViteExpress.config({ mode: 'production'})

ViteExpress.listen(app, 5173, () => {
    console.log('Server is listening!')
})