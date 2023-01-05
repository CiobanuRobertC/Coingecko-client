import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCoinDetails } from "../services/api";
import Table from "../components/table/table";

const Details = () => {
    const [coinData, setCoinData] = useState();
    const { id } = useParams();

    useEffect(() => {
        async function getData() {
            try{
                const data = await getCoinDetails(id);
                setCoinData(data);
            }
            catch(error){
                console.error(error);
            }
        }
        getData();
    }, [])

    console.log(coinData)

    return(
    <div className="m-3">
        <h1><img src={coinData?.image?.small} alt="coin logo"/> <span>{coinData?.name}</span></h1>
        {/* <p dangerouslySetInnerHTML={{__html: coinData?.description?.en}}></p> */}
        <iframe srcDoc={coinData?.description?.en}/>
        <Table data={[{
            hashing_algorithm: {
                data: coinData?.hashing_algorithm,
                label: "Hashing algorithm",
                type: "text"
            },
            market_cap: {
                data: coinData?.market_data?.market_cap.eur,
                label: "Market cap in Euro",
                type: "text"
            },
            genesis_date: {
                data: coinData?.genesis_date,
                label: "Genesis Date",
                type: "text"
            },
            id: {
                data: id
            }
        }]}/>
    </div>
    )
}

export default Details;