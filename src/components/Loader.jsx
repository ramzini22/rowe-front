import React from 'react'
import LoadingScreen from "./LoadingScreen/LoadingScreen";

const Loader = ({color, small = false}) => {
    const styles = {
        backgroundColor: color ?? '#FFF',
    }

    if (!small) return (
        <LoadingScreen/>
    )

    else
        return (
            <div className="w-100 d-flex justify-content-center align-items-end">
                <div className="lds-ellipsis">
                    <div style={styles}/>
                    <div style={styles}/>
                    <div style={styles}/>
                    <div style={styles}/>
                </div>
            </div>
        )
}

export default Loader
