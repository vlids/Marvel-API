import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


const MiApi = () => {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    getCharacter()
  },[])

  //Public key:  1a46dc09300f4c7ceff313176d391e36
  //Private key: 19d338e7aeec1b5c500b2399475af6869e2c9f2f 
  //ts: 
  //hash: 6d8c96822d895c869e759257a4f658c3
  //url : https://gateway.marvel.com:443/v1/public/characters?apikey=fa3568f8b5b6270a43d639c88feacbf0

  async function getCharacter() {
    const res = await fetch("https://gateway.marvel.com:443/v1/public/characters?ts=2&apikey=1a46dc09300f4c7ceff313176d391e36&hash=6d8c96822d895c869e759257a4f658c3")
    const data = await res.json()
    console.log(data.data.results);
    setPersonajes(data.data.results);
    

  }

  return (
    
    <main className='container'>
 
    <div className="row row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
      
      { personajes.map( p=>(
        <div className="col mt-5 cardT" key={p.id}>
          <div className="card mt-3 border-light" style={{width: '18rem'}}>
            <img src={`${p.thumbnail.path}.${p.thumbnail.extension}`} className="card-img-top" alt={p.name} style={{height: '20rem', weight: '20rem'}}/>
              <div className="card-body">
                <h5 className="card-title">{p.name} </h5>
                
                <a href={p.urls[0].url} className="btn btn-dark" target="_blanck">Conoceme</a>
              </div>
          </div>
        </div>
      ))}

    </div>
    </main>
  )
}

export default MiApi