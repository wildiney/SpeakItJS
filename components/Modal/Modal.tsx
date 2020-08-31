import React from 'react'

function Modal({ children }): React.FC {
    return (
        <div className="background">
            <div className="modal">
                {children}
            </div>
        </div>
    )
}

export default Modal