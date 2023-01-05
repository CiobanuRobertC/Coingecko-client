

const baseURL = "https://api.coingecko.com/api/v3";

const getCoinsMarkets = async (pageQty=10, pageNo=1) => {
    const res = await fetch(baseURL + `/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=${pageQty}&page=${pageNo}&sparkline=false`);
    const data = await res.json();
    return data;
}

const getCoinDetails = async (coinId) => {
    const res = await fetch(baseURL + `/coins/${coinId}`);
    const data = await res.json();
    return data;
}


export { getCoinsMarkets, getCoinDetails }