import React from "react"
import Moodboard from "./Moodboard.js";
import { useNavigate, useParams } from "react-router-dom";

export default function Character(){

    const { id } = useParams()

    const [items, setItems] = React.useState([])
            React.useEffect(() => {
                fetch(`/get_items?char_id=${id}`).then(
                    res => res.json()
                  ).then(
                    data => {
                        console.log("Fetched data:", data);
                        setItems(data)
                    })
            }, [])

    const [name, setName] = React.useState("")
    React.useEffect(() => {
        fetch(`/get_name?char_id=${id}`).then(
            res => res.json()
        ).then(
            data => {
                console.log(`Received data:${JSON.stringify(data)}`)
                setName(data[0].name)
            }
        )
    })
    const navigate = useNavigate()

    return (
        <div style={{height: '100vh', overflow: 'hidden'}}>
            <h1 className="mb-3">{name}</h1>
            <div className="row g-5 flex-grow-1 character-main2">
                <div className="col-5 bg-success">Character Sheet</div>
                <div className="col-7">
                    <div className="row history bg-info mb-3" onClick={
                        () => {
                            navigate(`/character/${id}/history`)
                        }
                    }>
                        History
                    </div>
                    <div className="row others">
                        <div className="col-6 bg-warning" style={{ height: '100%', overflow: 'auto' }}>
                            <Moodboard items = {items}/>
                        </div>
                        <div className="col-6 bg-info"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}