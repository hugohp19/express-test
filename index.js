const express = require('express');
const testRoutes = require('./routes/testRoutes');
const githubRoutes = require('./routes/github');
const cyberSecurityRoutes = require('./routes/cybersecurityRoutes');
// const middleware = require('./middlewares/test');

const app = express();

app.use("/test", testRoutes);
app.use('/github', githubRoutes);
app.use('/cyber', cyberSecurityRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`listening on port ${PORT}`))