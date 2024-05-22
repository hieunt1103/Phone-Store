import express from 'express';
import bodyParser from 'body-parser';
import ProductRoutes from './routes/ProductRoutes.js';
import UserRoute from './routes/UserRoute.js';
import cors from 'cors'; // Import gói cors
import CartRoute from './routes/CartRoutes.js'
import OrderRoute from './routes/OrderRoute.js'
const app = express();
const port = process.env.PORT || 3001;
app.use(cors());

app.use(bodyParser.json());
app.use(express.json());

app.use('/api', ProductRoutes);
app.use('/api', UserRoute);
app.use('/api', CartRoute);
app.use('/api', OrderRoute)

app.listen(port, () => {
    console.log(`Server is running on http://${port}`);
});
