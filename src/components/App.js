import { Routes, Route,} from "react-router-dom";
import { Home } from "./Home";

export function App() {

    return (<>

            <Routes>
                <Route path="/home" element={<Home/>}/>
            </Routes>
        </>
    );
}