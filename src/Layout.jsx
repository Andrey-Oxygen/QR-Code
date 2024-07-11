import {Routes, Route} from "react-router-dom";
import { Navigation } from './componets/Navigation/Navigation';
import { QrCodeGenerator } from './componets/Generate/QrCodeGenerator';
import { QrCodeScanner } from './componets/Scan/QrCodeScanner';
import { GenerateHistory } from "./componets/GenerateHistory";
import { ScanHistory } from "./componets/ScanHistory";


const Layout = () => {
    return (
        <div>
            <Navigation />

            <Routes>
                <Route path="/generate" element={<QrCodeGenerator />} />
                <Route path="/scan" element={<QrCodeScanner />} />
                <Route path="/scanHistory" element={<ScanHistory />} />
                <Route path="/generateHistory" element={<GenerateHistory />} />
      </Routes>
        </div>
    );
};

export {Layout};