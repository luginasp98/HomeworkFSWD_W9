const express = require("express");
const userRouter = require('./routers/user');
const movieRouter = require('./routers/movie');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./documentation/swagger.json');


const app = express();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use("/user", userRouter);
app.use("/movie", movieRouter);

app.listen(3000, () => console.log("server running"));