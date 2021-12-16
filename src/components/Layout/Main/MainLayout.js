import React from 'react'

const MainLayout = ({ children }) => {
    console.log({ children });

    return (
        <div>
            MainLayout
            <div>{children}</div>
        </div>
    )
}

export default MainLayout
