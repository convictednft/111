import {render} from "react-dom";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import Whitepaper from "../src/pages/Whitepaper";
import TokenInformation from '../src/pages/TokenInformation'
import Tokenomics from "./pages/Tokenomics";
import FAQ from './pages/FAQ'
import Investements from "./pages/Investements";

import './static/reset.css'


render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="whitepaper" element={<Whitepaper/>}/>
            <Route path="tokeninformation" element={<TokenInformation/>}/>
            <Route path="tokenomics" element={<Tokenomics/>}/>
            <Route path="faq" element={<FAQ/>}/>
            <Route path="investements" element={<Investements/>}/>
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
)
