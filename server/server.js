const express = require('express')
const app = express()

const mysql = require('mysql2');

// Create connection
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'wearethestories',
    database: 'charbuilder'
});

// Connect to DB
db.connect(err => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

app.get("/get_history", (req, res) => {
    const char_id = req.query['char_id']
    db.query("SELECT * FROM history WHERE char_id=?", [char_id], (err, results) => {
        res.json(results)
    })
})

app.get("/get_items", (req, res) => {
    const char_id = req.query['char_id']
    db.query("SELECT * FROM items WHERE char_id=?", [char_id], (err, results) => {
        res.json(results)
    })
})

app.get("/get_name", (req, res) => {
    const char_id = req.query['char_id']
    db.query("SELECT name FROM characters WHERE id=?", [char_id], (err, results) => {
        res.json(results)
    })
})

app.post("/add_cards", express.text(), (req, res) => {
    const {cards, char_id, positions} = JSON.parse(req.body)

    // Insert all the newly created cards ** WITHOUT POSITIONS **
    const params1 = cards.map(card => [card.heading, card.content, char_id, null, null, card.id])
    db.query("INSERT INTO history VALUES ?", [params1], (err, results) => {
        console.log(err)
        console.log(results)
    })
    // Insert all the updated positions of all cards
    const idxs = Object.keys(positions)
    const ids = idxs.join(', ')
    const xs = idxs.map(idx => {
        let val = parseInt(positions[idx].split(" ")[0])
        return `WHEN ${idx} THEN ${val}`
    }).join(' ')
    const ys = idxs.map(idx => {
        let val = parseInt(positions[idx].split(" ")[1])
        return `WHEN ${idx} THEN ${val}`
    }).join(' ')
    const query2 = `UPDATE history SET x = CASE id ${xs} END, y = CASE id ${ys} END WHERE id IN (${ids})`
    db.query(query2, [], (err, results) => {
        console.log(results)
    })
})

app.get("/api", (req, res) => {
   // const query = "SELECT * FROM 
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
        {'id': 1, 'name' : 'Katara', 'img' : 'https://wallpapers.com/images/hd/caption-powerful-katara-in-action-avatar-the-last-airbender-fk7gsn4cjjpxasjl.jpg'},
        {'id': 2, 'name' : 'Toph', 'img' : 'https://static.wikia.nocookie.net/avatar/images/4/46/Toph_Beifong.png'},
        {'id': 3, 'name' : 'Zuko', 'img' : 'https://oyster.ignimgs.com/mediawiki/apis.ign.com/avatar-the-last-airbender/9/94/Prince_zuko_img.jpg'}
    ])
})

app.listen(5000, () => {
    console.log("Started on port 5000")
})