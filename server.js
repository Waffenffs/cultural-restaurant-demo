import express from 'express';
import ViteExpress from 'vite-express'

const app = express();

app.use(ViteExpress.static())

ViteExpress.listen(app, 5173, () => {
    console.log('Server is listening!')
})