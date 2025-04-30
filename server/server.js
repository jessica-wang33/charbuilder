const express = require('express')
const app = express()

app.get("/api", (req, res) => {
    items1 = [
        {'src': 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_52683-60691.jpg'},
        {'src': 'https://img.cdn-pictorem.com/uploads/collection/A/AJ2EJC6RIT/900_Salmanaz_nature_anime_aesthetic_landscape.jpg'},
        {'src': 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_52683-60691.jpg'},
        {'src': 'https://img.cdn-pictorem.com/uploads/collection/A/AJ2EJC6RIT/900_Salmanaz_nature_anime_aesthetic_landscape.jpg'},
        {'src': 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_52683-60691.jpg'},
        {'src': 'https://img.cdn-pictorem.com/uploads/collection/A/AJ2EJC6RIT/900_Salmanaz_nature_anime_aesthetic_landscape.jpg'},
        {'src': 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_52683-60691.jpg'},
        {'src': 'https://img.cdn-pictorem.com/uploads/collection/A/AJ2EJC6RIT/900_Salmanaz_nature_anime_aesthetic_landscape.jpg'},
        {'src': 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_52683-60691.jpg'},
        {'src': 'https://img.cdn-pictorem.com/uploads/collection/A/AJ2EJC6RIT/900_Salmanaz_nature_anime_aesthetic_landscape.jpg'},
        {'src': 'https://img.freepik.com/free-vector/hand-painted-watercolor-pastel-sky-background_52683-60691.jpg'},
        {'src': 'https://img.cdn-pictorem.com/uploads/collection/A/AJ2EJC6RIT/900_Salmanaz_nature_anime_aesthetic_landscape.jpg'}
    ]
    history1 = [
        {heading: "Card 1", content: "Rosette and Dominick start adventuring around the city, but Aliza finds her again and invites her to a party at the royal place (at this point, Rosette has gotten some exposure to the Ruler and his Religion)"},
        {heading: "Card 2", content: "Rosette also finds a map in the haunt that has key battle spots in the War (THIS WILL END UP BEING USEFUL, this is where all the spirits have ended up going)"},
        {heading: "Card 3", content: "As one of her tasks, she tries to track down the Syndicate and ends up going to one of the other places on the map, feels similar reverberation and ends up talking to a ghost LOL"},
        {heading: "Card 3", content: "As one of her tasks, she tries to track down the Syndicate and ends up going to one of the other places on the map, feels similar reverberation and ends up talking to a ghost LOL"},
        {heading: "Card 3", content: "As one of her tasks, she tries to track down the Syndicate and ends up going to one of the other places on the map, feels similar reverberation and ends up talking to a ghost LOL"},
        {heading: "Card 3", content: "As one of her tasks, she tries to track down the Syndicate and ends up going to one of the other places on the map, feels similar reverberation and ends up talking to a ghost LOL"}
    ]
    res.json([
        {'name' : 'Katara', 'img' : 'https://wallpapers.com/images/hd/caption-powerful-katara-in-action-avatar-the-last-airbender-fk7gsn4cjjpxasjl.jpg',
            'items': items1,
            'history': history1
        },
        {'name' : 'Toph', 'img' : 'https://static.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png'},
        {'name' : 'Zuko', 'img' : 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/avatar-the-last-airbender/9/94/Prince_zuko_img.jpg'}
    ])
})

app.listen(5000, () => {
    console.log("Started on port 5000")
})