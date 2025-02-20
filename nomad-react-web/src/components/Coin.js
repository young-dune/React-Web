import React, { useEffect, useState } from 'react'

export default function Coin() {
    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);
    useEffect(() => {
        fetch('https://api.coinpaprika.com/v1/tickers')
            .then((response) => response.json())
            .then((json) => { // json을 받는다.
                setCoins(json);
                setLoading(false);
            });
    }, []) // 빈 배열 대입 => 컴포넌트 렌더링시 최초 한 번만 실행

    return (
        <div>
            <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1> {/*템플릿 리터럴 사용*/}
            {loading ? <strong>Loading...</strong> : <select>
                {coins.map((coin) =>
                    <option key={coin.id}>
                        {coin.rank}. {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
                    </option>)}
            </select>}
        </div>
    )
}
