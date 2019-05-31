import * as express from 'express'
import * as next from 'next'
import { resolveRoot } from './util/resolveRoot'

const dev = process.env.NODE_ENV === 'development'
const app = next({
  dev,
  dir: resolveRoot('ui'),
})
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    const server = express()

    server.get('/p/:id', (req, res) => {
      const actualPage = '/post'
      const queryParams = { title: req.query.id }
      app.render(req, res, actualPage, queryParams)
    })

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, () => {
      console.log('App ready on port 3000')
    })
  })
  .catch(err => {
    console.error(err.stack)
    process.exit(1)
  })
