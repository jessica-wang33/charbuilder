import React from "react"

export default function Profiles({ characters, setCharacterFn }){
    return (
        <div className="row justify-content-center">
          {characters.map((character, index) => (
            <div key={index} className="col-6 col-md-3 mb-4" onClick = {() => setCharacterFn(character)}>
              <div className="d-flex flex-column align-items-center">
                <img
                  src={character.img}
                  className="rounded-circle border border-secondary object-fit-cover"
                  style={{ width: '100px', height: '100px' }}
                />
                <p className="mt-2">{character.name}</p>
              </div>
            </div>
          ))}
          <div className="d-flex flex-column align-items-center">
            <img
              src={"https://cdn-icons-png.flaticon.com/512/8212/8212741.png"}
              className="rounded-circle border border-secondary object-fit-cover"
              style={{ width: '100px', height: '100px' }}
            />
            <p className="mt-2">Add New</p>
          </div>
      </div>
    )
}