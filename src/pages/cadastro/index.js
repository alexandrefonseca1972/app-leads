import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { mask, unMask } from "remask";
import api from "../../api";
import "./styles.css";


export default function Cadastro() {

    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [fone, setFone] = useState('');
    const [email, setEmail] = useState('');
    const [modalidade, setModalidade] = useState('');
    const [curso, setCurso] = useState('');
    const [cpf, setCpf] = useState('');

    async function insertLead(e) {
        e.preventDefault();
        const dt = { nome, email, whatsapp, fone, modalidade, curso, cpf }
        await api.post('lead', dt);
        try {
            clearFields();
            navigate("/");
        } catch (err) {
            console.log(err);
            alert({ msg: `Não foi possível cadastrar o lead ${nome}` })
        }
    }
    function clearFields() {
        setNome('');
        setWhatsapp('');
        setFone('');
        setEmail('');
        setCurso('');
        setCpf('');
        setModalidade('');
    }
    return (
        <div className="container">
            <head>
                <title >Cadastro de Leads</title>
            </head>
            <body>
                <h1>Base Lead</h1>
                <form onSubmit={insertLead}>
                    <div className="inputContainer">
                        <input
                            type="text"
                            name="nome"
                            required
                            placeholder="Nome"
                            minLength={5}
                            id="nome"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)} />
                    </div>
                    <div className="inputContainer">
                        <input
                            type="tel"
                            name="whatsapp"
                            placeholder="WhatsApp"
                            required
                            id="whatsapp"
                            minLength={14}
                            value={whatsapp}
                            onChange={(e) =>
                                setWhatsapp(
                                    mask(unMask(e.target.value), [
                                        "(99)99999-9999",
                                    ])
                                )
                            }
                        />
                    </div>
                    <div className="inputContainer">
                        <input
                            type="tel"
                            name="fone"
                            placeholder="fone"
                            id="fone"
                            minLength={13}
                            value={fone}
                            onChange={(e) =>
                                setFone(
                                    mask(unMask(e.target.value), [
                                        "(99)99999-9999", "(99)9999-9999"
                                    ])
                                )
                            }
                        />
                    </div>
                    <div className="inputContainer">
                        <input
                            type="email"
                            placeholder="E-mail"
                            name="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="inputContainer">
                        <input
                            type="text"
                            placeholder="CPF"
                            name="cpf"
                            id="cpf"
                            value={cpf}
                            onChange={(e) =>
                                setCpf(
                                    mask(unMask(e.target.value), [
                                        "999.999.999-99"
                                    ])
                                )
                            }
                        />
                    </div>
                    <div className="inputRadio">
                        <div className="checkboxContainer">
                            <input type="radio"
                                value="Presencial"
                                name="modalidade"
                                required
                                onChange={(e) => setModalidade(e.target.value)}
                                on />
                            <label >Presencial</label>
                        </div>
                        <div className="checkboxContainer">
                            <input type="radio"
                                value="Digital"
                                name="modalidade"
                                required
                                onChange={(e) => setModalidade(e.target.value)} />
                            <label>Digital</label>
                        </div>
                    </div>
                    <div className="textboxcurso"
                        style={modalidade === "Digital" ? { display: "block" } : { display: "none" }}>
                        <input
                            type="text"
                            name="curso"
                            placeholder="Digital"
                            id="curso"
                            required
                            minLength={5}
                            display="none"
                            value={curso}
                            onChange={(e) => setCurso(e.target.value)} />
                    </div>
                    <div className="selectcurso"
                        style={modalidade === "Presencial" ? { display: "block" } : { display: "none" }}>
                        <select
                            name="curso"
                            id="curso"
                            required
                            value={curso}
                            onChange={(e) => setCurso(e.target.value)}
                        >
                            <option value="" name="Selecione..." selected disabled>
                                Selecione...
                            </option>
                            <option value="Administração" name="Administração">
                                Administração
                            </option>
                            <option value="Ciências Contábeis" name="Ciências Contábeis">
                                Ciências Contábeis
                            </option>
                            <option value="Direito" name="Direito">
                                Direito
                            </option>
                            <option value="Enfermagem" name="Enfermagem">
                                Enfermagem
                            </option>
                            <option value="Logística" name="Logística">
                                Logística
                            </option>
                            <option value="Psicologia" name="Psicologia">
                                Psicologia
                            </option>
                            <option value="Outro" name="Outro">
                                Outro
                            </option>
                        </select>
                    </div>
                    <div className="ButtonArea">
                        <button type="button" onClick={() => { navigate("/") }}>Home</button>
                        <button type="button" onClick={() => { clearFields() }}>Limpar</button>
                        <button type="submit">Enviar</button>
                    </div>
                </form>
            </body>
        </div >
    )
}