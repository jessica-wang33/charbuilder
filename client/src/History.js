import React from "react";
import HistoryCard from "./HistoryCard";

export default function History(){
    const [cards, setCards] = React.useState([
        {id: 1, heading: "Card 1", content: "Rosette and Dominick start adventuring around the city, but Aliza finds her again and invites her to a party at the royal place (at this point, Rosette has gotten some exposure to the Ruler and his Religion)"},
        {id: 2, heading: "Card 2", content: "Rosette also finds a map in the haunt that has key battle spots in the War (THIS WILL END UP BEING USEFUL, this is where all the spirits have ended up going)"},
        {id: 3, heading: "Card 3", content: "As one of her tasks, she tries to track down the Syndicate and ends up going to one of the other places on the map, feels similar reverberation and ends up talking to a ghost LOL"},
        {id: 3, heading: "Card 3", content: "As one of her tasks, she tries to track down the Syndicate and ends up going to one of the other places on the map, feels similar reverberation and ends up talking to a ghost LOL"},
        {id: 3, heading: "Card 3", content: "As one of her tasks, she tries to track down the Syndicate and ends up going to one of the other places on the map, feels similar reverberation and ends up talking to a ghost LOL"},
        {id: 3, heading: "Card 3", content: "As one of her tasks, she tries to track down the Syndicate and ends up going to one of the other places on the map, feels similar reverberation and ends up talking to a ghost LOL"}
    ]);

    return (
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
            {cards.map((card) => (
                <HistoryCard heading={card.heading} content={card.content} />
            ))}
        </div>
    )
}