import React from 'react'

const GuestLayout = ({ children }) => {
    console.log({ children });
    return (
        <div>
            GuestLayout
            <div>{children}</div>
        </div>
    )
}

export default GuestLayout
