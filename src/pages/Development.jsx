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
// import { useEffect } from 'react';

// export default function Development() {
//     useEffect(() => {
//         document.title = '𝑰𝒛𝒂𝒏𝒂𝒈𝒊𝑪𝒓𝒂𝒇𝒕 🌐 | Development';
//     }, []);

//     return <div>Website Under Development</div>;
// }

import React, { useEffect, useState } from 'react';

export default function Development() {
    const [data, setData] = useState(null);

    useEffect(() => {
        document.title = '𝑰𝒛𝒂𝒏𝒂𝒈𝒊𝑪𝒓𝒂𝒇𝒕 🌐 | Development';

        fetch('https://api.izanagicraft.tech/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({})
        })
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-xl font-bold">Website Under Development</h1>
            <div className="dataContainer flex-col items-center justify-center p-4 text-center">
                {data?.debug?.ping && data?.motd?.html ? (
                    data.motd.html.map((line, index) => <p key={index} dangerouslySetInnerHTML={{ __html: line }} className="mb-2" />)
                ) : (
                    <p>No motd received!</p>
                )}

                {data?.debug?.ping && data?.players?.online && data?.players?.max ? (
                    <p className="mb-4">
                        {data.players.online} / {data.players.max} Players online.
                    </p>
                ) : (
                    <p>No Players online.</p>
                )}

                {data?.links && (
                    <div>
                        {Object.keys(data.links).map((key) => (
                            <button
                                key={key}
                                className="refLink m-2 inline-block rounded border-2 border-blue-500 bg-blue-500 px-4 py-2 text-base font-semibold text-white transition duration-300 ease-in-out hover:border-blue-600 hover:bg-blue-600"
                                onClick={() => window.open(data.links[key], '_blank')}
                            >
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
