const app = require("./common/config/customApplication")();

const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`)
})
