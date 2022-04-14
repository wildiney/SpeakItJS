import React from 'react'

function Modal({ children }) {
    return (
        <div className="background">
            <div className="modal">
                {children}
            </div>
        </div>
    )
}

export default Modal