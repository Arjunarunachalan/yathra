import React from 'react'
import './SideDrawer.css'
import ReactDOM from 'react-dom'
import { CSSTransition } from 'react-transition-group'

const SideDrawer = (props) => {

  const contant = (
    <CSSTransition 
      in={props.show}
      timeout={300}
      classNames='slide-in-left '
      mountOnEnter
      unmountOnExit>
      <aside className='side-drawer' onClick={props.onClick}>
        {props.children}
      </aside>
    </CSSTransition>
  );
  return ReactDOM.createPortal(contant, document.getElementById('drawer-hook'))
}

export default SideDrawer