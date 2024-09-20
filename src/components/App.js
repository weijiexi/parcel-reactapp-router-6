import { Routes, Route, Link} from "react-router-dom";
import { Home } from "./Home";

export function App() {

    return (
        <div className='App'>
            <nav>
                <Link to="/home">Home</Link>
            </nav>
            <Routes>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </div>
    );
}