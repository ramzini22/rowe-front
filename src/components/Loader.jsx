import React from 'react'
const Loader = ({color}) => {
    const styles = {
        backgroundColor: color ?? '#FFF',
    }

    return (
        <div className="w-100 d-flex justify-content-center align-items-end">
            <div className="lds-ellipsis">
                <div style={styles} />
                <div style={styles} />
                <div style={styles} />
                <div style={styles} />
            </div>
        </div>
    )
}

export default Loader
