import express from 'express';

const app = express();
const port = 5000;

app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
const getRequest =async (req, res) => {
    try {
        console.log('successful get')
        res.status(200).json('get displayed')
    } catch (e) {
        res.status(404).json({ message: e });
    }
}
const postRequest = async (req, res) => {

    try {
        console.log('successful post')
        res.status(200).json('post saved')
    } catch (e) {
        res.status(409).json({ message: e });
    }
}


app.get('/get', getRequest)
app.post('/post', postRequest )
app.listen(port, () => console.log(`Server is running on port ${port}`))