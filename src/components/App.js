import { Routes, Route, Link} from "react-router-dom";
import { Home } from "./Home";
import  { ItemsList } from "./ItemsList";

export function App() {

    return (
        <div className='App'>
            <nav>
                <h1 className='store-header'>Emily&apos;s Trinkets</h1>
                <Link to="/home">Home</Link>
            </nav>

            <Routes>
                <Route path="/items-list" element={<ItemsList />}/>
            </Routes>

        </div>
    );
}