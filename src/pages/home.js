import { useEffect, useState } from 'react';
import { getCoinsMarkets } from '../services/api';
import Table from '../components/table/table';
import { Pagination } from 'react-bootstrap';
import Spinner from '../components/spinner/spinner';
import { useNavigate } from "react-router-dom";

const Home = () => {

    const [tableData, setTableData] = useState([]);
    const [pageNo, setPageNo] = useState(1);
    const [loading, setLoading] = useState(false);
    const pageQty = 10;

    const navigate = useNavigate();

    useEffect(() => {
        async function getData() {
            setLoading(true);
            const data = await getCoinsMarkets(pageQty, pageNo);
            const coinsList = data.map(coin => {
                return {
                    image: {
                        data: coin.image,
                        label: "Image",
                        type: "image"
                    },
                    name: {
                        data: coin.name,
                        label: "Name",
                        type: "text"
                    },
                    symbol: {
                        data: coin.symbol,
                        label: "Symbol",
                        type: "text"
                    },
                    current_price: {
                        data: coin.current_price,
                        label: "Current Price",
                        type: "text"
                    },
                    high_24h: {
                        data: coin.high_24h,
                        label: "High 24 hour Price",
                        type: "text"
                    },
                    low_24h: {
                        data: coin.low_24h,
                        label: "Low 24 hour Price",
                        type: "text"
                    },
                    id: {
                        data: coin.id
                    }
                }
            })
            setTableData(coinsList);
            setLoading(false);
        }
        getData();
    }, [pageNo])

    const handleRedirectToDetails = (coinId) => {
        navigate(`/details/${coinId}`);
    }

    return (
        <div className="m-3">
            {tableData.length > 0 && <Table data={tableData} onRowClick={handleRedirectToDetails}/>}
            <div className="d-flex justify-content-center">
                <Pagination>
                    <Pagination.Prev onClick={() => setPageNo(state => state - 1)} disabled={pageNo === 1}/>
                    <Pagination.Item>{pageNo}</Pagination.Item>
                    <Pagination.Next onClick={() => setPageNo(state => state + 1)}/>
                </Pagination>
            </div>
            {loading && <Spinner variant="light" fixed/>}
        </div>
    )
}

export default Home;