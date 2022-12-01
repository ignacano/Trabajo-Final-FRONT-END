import React from "react";
import logo from '../../img/logo1.png';
import arrowDown from '../../img/arrowDown.png';
import './formularioOfrezco.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useForm, ValidationError } from '@formspree/react';

const FormularioOfrezco = () => {
    
    const [state, handleSubmit] = useForm("mrgdeozr");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
        return(
        <div className="formOfrezco">
            <header className="formOfrezcoHeader">
                <div className='containerBienvenida'>
                    <img src={logo} className="App-logo-home" alt="logo"/>
                        <div className='textoBienvenida'>
                            <p><div className='nombreMarca'><h1 className="textoMarca">TrabajosYA</h1></div></p> 
                            <p className="descripcionServicio">Para poder registrarte en nuestra plataforma, necesitaremos algunos datos sobre ti.</p>
                            <p className='knowMore'>Por favor, completa el siguiente formulario y haz click en <p className="enviarSolicitud">"Publicar mi oferta"</p></p>
                            <img src={arrowDown} className="arrowDown" alt="arrowDown"/> 
                            <div>
                            <Form className="formBuscoForm" action="https://formspree.io/mrgdeozr" method="POST">
                            <Form.Group className="mb-3" controlId="formBasicEmail" name="Email">
                                <Form.Label>Dirección de E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Ingresa tu e-mail" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicName" name="Name">
                                <Form.Label>Nombre completo</Form.Label>
                                <Form.Control refs="text" type="text" placeholder="Ingresa tu nombre completo" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicAge" name="Age">
                                <Form.Label>Edad</Form.Label>
                                <Form.Control type="number" placeholder="Ingresa tu edad" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicId" name="ID">
                                <Form.Label>D.N.I (Exclusivo Argentina)</Form.Label>
                                <Form.Control type="number" placeholder="Ingresa tu nro. de DNI" required/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicActivity" name="Activity">
                                <Form.Label>Necesidad/Oferta laboral</Form.Label>
                                <Form.Control type="text" placeholder="Ingresa tu necesidad/Oferta" required/>
                            </Form.Group>
                            <p className="text-muted">Tené en cuenta que todos tus datos son privados, y TrabajosYA nunca compartirá tu información personal con terceros.</p>   
                            <div className="botonContainer">
                            <Button className="botonSubmit"  type="submit" value='send' name='send'>Publicar mi oferta</Button>                            
                            </div>
                            </Form>
                            </div>
                        </div>  
                </div>
            </header>
        </div>
    )
};

export default FormularioOfrezco;
    