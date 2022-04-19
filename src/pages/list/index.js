import React from "react";
import api from '../../api';
import { useNavigate, Link } from 'react-router-dom';
import { FiEdit, FiTrash2, FiCornerDownLeft } from 'react-icons/fi'
import "./styles.css";



export default function List() {

    const navigate = useNavigate();
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
                <div className="tabArea">
                    <table>
                        <thead>
                            <tr>
                                <th>Nome</th>
                                <th>Curso</th>
                                <th>Whatsapp</th>
                                <th>Excluir</th>
                                <th>Editar</th>

                            </tr>
                        </thead>
                        <tbody>
                            {listagem.map((i) =>
                                <tr key={i._id}>
                                    <td>{i.nome}</td>
                                    <td>{i.curso}</td>
                                    <td>{i.whatsapp}</td>
                                    <td><FiTrash2 className="Iconapp" size={16} color={"rgb(231, 6, 51"} onClick={() => { navigate("/home") }} /></td>
                                    <td><FiEdit className="Iconapp" size={16} color={"rgb(231, 6, 51"} onClick={() => { navigate("/home") }} /></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                </div>
                <div className="areareturn">
                    <FiCornerDownLeft className="Iconapp" size={16} color={"rgb(231, 6, 51"} />
                    <Link to={"/"} style={{ color: "rgb(231, 6, 51)" }}>Retornar</Link>
                </div>
            </body>
        </html>
    )
}