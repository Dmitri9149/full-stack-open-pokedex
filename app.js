const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5000

app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`)

  app.get('/version', (req, res) => {
    res.send('3.skip?') // change this string to ensure a new version deployed
  })

  app.get('/health', (req, res) => {  // health check endpoint, f.e. use in Render
    res.send('ok')
  })

})
