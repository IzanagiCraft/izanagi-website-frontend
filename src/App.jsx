/*
▪  ·▄▄▄▄• ▄▄▄·  ▐ ▄  ▄▄▄·  ▄▄ • ▪   ▄▄· ▄▄▄   ▄▄▄· ·▄▄▄▄▄▄▄▄
██ ▪▀·.█▌▐█ ▀█ •█▌▐█▐█ ▀█ ▐█ ▀ ▪██ ▐█ ▌▪▀▄ █·▐█ ▀█ ▐▄▄·•██
▐█·▄█▀▀▀•▄█▀▀█ ▐█▐▐▌▄█▀▀█ ▄█ ▀█▄▐█·██ ▄▄▐▀▀▄ ▄█▀▀█ ██▪  ▐█.▪
▐█▌█▌▪▄█▀▐█ ▪▐▌██▐█▌▐█ ▪▐▌▐█▄▪▐█▐█▌▐███▌▐█•█▌▐█ ▪▐▌██▌. ▐█▌·
▀▀▀·▀▀▀ • ▀  ▀ ▀▀ █▪ ▀  ▀ ·▀▀▀▀ ▀▀▀·▀▀▀ .▀  ▀ ▀  ▀ ▀▀▀  ▀▀▀


   @@@@@
   @@* *@@
     @@@  @@@
        @@@  @@ @@@       @@@@@@@@@@@
          @@@@@@@@   @@@@@@@@@@@@@@@@@@@@@
           @@@    @@@@@@@@@@@@@@@@@@@@@@@@@@@
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
               @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
              #@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
              #@@@   @@                 @@  @@@@  @@@@
               @@@@      @@@      @@@@      @@@@   @@@
               @@@@@@                     @@@@@@    @@
                @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                 @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
                  @@@@@@@@@@@@@@@@@@@@@@@@@@@
                    @@@@@@@@@@@@@@@@@@@@@@@
                      @@@@@@@@@@@@@@@@@@@
                          @@@@@@@@@@@

Copyright (c) 2023 - present | sanguine6660 <sanguine6660@gmail.com>
Copyright (c) 2023 - present | izanagicraft.com <contact@izanagicraft.com>
Copyright (c) 2023 - present | izanagicraft.com team and contributors
*/
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Development from './pages/Development';

import 'react-toastify/dist/ReactToastify.css';

export default function App() {
    return (
        <>
            <BrowserRouter className="min-h-[100vh]">
                <Routes>
                    <Route path="/" element={<Development />} />
                    <Route path="*" element={<Navigate to="/" />} /> {/* Redirect 404 to Homepage */}
                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                pauseOnHover
                theme="dark"
            />
        </>
    );
}
