import React from "react";
import HistoryCard from "./HistoryCard";

export default function History({history, name}){
    const [addingCard, setAddingCard] = React.useState(false);
    const [cardForm, setCardForm] = React.useState({});

    const [cards, setCards] = React.useState(history)
    const [newCards, setNewCards] = React.useState([])
    const newCardsRef = React.useRef([])

    React.useEffect(() => {
        setCards(prev => history)
    }, [history])
    React.useEffect(() => {
        newCardsRef.current = newCards
    }, [newCards])

    React.useEffect(() => {
        const saveCards = () => {
            if(newCardsRef.current.length > 0){
                navigator.sendBeacon("/add_cards", JSON.stringify({cards: newCardsRef.current, name: name}))
            }
        }
        window.addEventListener("pagehide", saveCards)
        return () => window.removeEventListener("pagehide", saveCards)
    }, [])

    function addCard(formData) {
        const heading = formData.get('heading')
        const content = formData.get('content')
        console.log(heading)
        console.log(content)

        setCards(prev => [...prev, {heading: heading, content: content}])
        setNewCards(prev => [...prev, {heading: heading, content: content}])
        setAddingCard(prev => false)
    }
    return (
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
            {cards.map((card) => (
                <HistoryCard heading={card.heading} content={card.content} />
            ))}
            {addingCard? 
                <div className="add-card-wrapper">
                    <form action={addCard}>
                        <div className="history--card mb-0">
                                <div className="heading add-heading">
                                    <input type="text" id="heading" name="heading" placeholder="Heading" value={cardForm.heading} />
                                </div>
                                <textarea id="content" name="content" rows="4" cols="50">
                                    {cardForm.content}
                                </textarea>
                        </div>
                        <button type="submit" className="submit-btn mt-0">Submit</button>
                    </form>
                </div>
                :
                <div id="add-history-card" className="history--card" onClick = {() => setAddingCard(prev => true)}>
                    <div className="heading add-heading">Add Card</div>
                    <img
                        src={"https://cdn-icons-png.flaticon.com/512/8212/8212741.png"}
                        style={{ width: '100px', height: '100px' }}
                    />
                </div>
            }
        </div>
    )
}