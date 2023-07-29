import React from 'react';
import './Modal.css';
import ReactDOM from 'react-dom';

import Backdrop from './Backdrop';
import {CSSTransition} from 'react-transition-group' 
const ModalOverlay=(props)=>{
    
    const Contant = (
        <div className={`modal ${props.className}`} style={props.style}>
          <header className={`modal__header ${props.headerClass}`}>
            <h2>{props.header}</h2>
            <form
              onSubmit={props.onSubmit ? props.onSubmit : (event) => event.preventDefault()}
            >
              <div className={`modal__contant ${props.contantClass}`}>
                {props.children}
              </div>
              <footer className={`modal__footer ${props.footerClass}`}>
                {props.footer}
              </footer>
            </form>
          </header>
        </div>
      );
      
      return ReactDOM.createPortal(Contant, document.getElementById('modal-hook'));
      

}

const Modal = (props) => {
  return (
    <>
    {props.show &&<Backdrop  onClick={props.onCancel}/>}
    <CSSTransition 
    in={props.show}
     mountOnEnter
      unmountOnExit
       timeout={200}
        classNames='modal'>
            <ModalOverlay {...props}/>
        </CSSTransition>
    </>
  )
}

export default Modal