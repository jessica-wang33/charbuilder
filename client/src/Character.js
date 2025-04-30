import React from "react"
import History from "./History.js";
import Moodboard from "./Moodboard.js";

export default function Character({ name, img, items, history }){
    console.log("Name: %s", name)
    console.log(items)
    /*const items = [
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
    ]*/
    /*return (
        <div style={{height: '100vh', overflow: 'hidden'}}>
            <h1 className="mb-3">{name}</h1>
            <div className="row g-5 flex-grow-1 character-main2">
                <div className="col-5 bg-success">Character Sheet</div>
                <div className="col-7">
                    <div className="row history bg-info mb-3">
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
    )*/
   return (
        <>
          <History />  
        </>
   )
}