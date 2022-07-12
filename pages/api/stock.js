const finnhub = require('finnhub');

const api_key = finnhub.ApiClient.instance.authentications['api_key'];
api_key.apiKey = "sandbox_cb0uds2ad3idnllql0bg"
const finnhubClient = new finnhub.DefaultApi()

export default function handler(req, res) {

    const symbol = req.query.symbol.toUpperCase();
    console.log(symbol);
    finnhubClient.quote(symbol, (error, data, response) => {
        res.status(200).json({
            symbol: symbol,
            price: data.c
        });
    });

}