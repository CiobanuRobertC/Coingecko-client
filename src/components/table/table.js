import { Table as BSTable } from "react-bootstrap";
import Image from "../image/image";
/* Object destructuring
const  props = {
    name: "Cristi",
    age: 44,
    ocupation: "Blabla"
}

const { name } = props
console.log(name)
*/

const Table = ({ data, onRowClick }) => {
    if(!data || data.length === 0)return null;
    const tableHead = Object.values(data[0]).map(obj => obj.label)

    const getCellItem = (obj, key) => {
        if(obj[key].type === "text")return obj[key].data;
        else if(obj[key].type === "image"){
            return <Image src={obj[key].data} alt="..." width={60}/>
        }
    }

    return (
        <BSTable striped bordered hover>
            <thead>
                <tr>
                    {tableHead.map(label => label && <th key={label}>{label}</th>)}
                </tr>
            </thead>
            <tbody>
                {(data && data.length > 0) && data?.map(coin => (
                    <tr key={coin?.id?.data} onClick={() => onRowClick(coin?.id?.data)} style={{cursor: 'pointer'}}>
                        {Object.keys(coin).map(key => (
                            coin[key].label && <td key={key}>{getCellItem(coin, key)}</td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </BSTable>
    )
}

export default Table;