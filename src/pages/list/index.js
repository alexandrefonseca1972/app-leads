import React from "react";
import api from '../../api';

export default function List() {

    const [listagem, setListagem] = React.useState([]);
    async function HandleList() {
        const dt = await api.get('/lead/list');
        setListagem(dt.data);
    }

    React.useEffect(() => {
        HandleList();
    }, [])
    return (
        <html lang="pt_BR">
            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Listagem de Leads</title>
            </head>
            <body>
                <h1>Listagem</h1>
                {listagem.map((item) => {
                    return (
                        <p key={item._id}><strong>Nome</strong> : {item.nome} - <strong>Curso</strong> : {item.curso}</p>
                    )
                })}


            </body>
        </html>
    )
}