import React, { useState } from 'react';

export default function Header() {    

    const [fecha, setFecha] = useState(new Date().toLocaleString());

    setInterval(() => {
       setFecha(new Date().toLocaleString()); 
    }, 1000);
    

    return (
        <>
        <h1>Ultimos Sismos en Chile</h1>
        <p>{ fecha }</p>        
        </>
    )
}