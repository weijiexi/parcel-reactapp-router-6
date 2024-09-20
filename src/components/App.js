import { useState, useEffect } from 'react'
import { Routes, Route, Link} from "react-router-dom";

import data from '../data';
import { Home } from "./Home";
import  { ItemsList } from "./ItemsList";
import { Item } from "./Item";

function fetchStock() {
    // fetchStock simulates getting data through axios.get(<URL>)
    return Promise.resolve({ success: true, data })
}

export function App() {

    const [stock, setStock] = useState([])

    useEffect(() => {
        fetchStock().then(res => setStock(res.data))
    }, [])

    return (
        <div className='App'>
            <nav>
                <h1 className='store-header'>Emily&apos;s Trinkets</h1>
                <Link to="/"> Home </Link>
                <Link to="/items-list"> Shop </Link>
            </nav>

            <Routes>
                <Route path="/items-list/:itemID/*" element={<Item items={stock} />} />
                <Route path="/items-list" element={<ItemsList items={stock} />}/>
                <Route path="/" element = {<Home />} />
            </Routes>

        </div>
    );
}