import { useEffect, useState } from "react";

const CointTracker = () => {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        fetch("https://api.coinpaprika.com/v1/tickers")
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setCoins(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    }, []);

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
            {loading ? (
                <strong>Loading...</strong>
            ) : (
                <select>
                    {coins.map((coin, index) => (
                        <option key={index}>{coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD</option>
                    ))}
                </select>
            )}
        </div>
    );
}

export default CointTracker;

// api.coinpaprika.com/v1/coins