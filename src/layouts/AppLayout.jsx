import React, {useEffect} from 'react';
import {Outlet, ScrollRestoration} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {useDispatch} from "react-redux";
import {initFingerprint} from "../store/slices/app/Action";
import Alert from "../components/Alert";
import {GetOptionsWithParams} from "../services/Options";
import ChangeLocation from "./ChangeLocation";

const AppLayout = () => {
    const fingerprint = localStorage.getItem('fingerprint')
    const dispatch = useDispatch()
    dispatch(GetOptionsWithParams())
    useEffect(() => {
        if (!fingerprint)
            dispatch(initFingerprint())
    }, [fingerprint])

    return (
        <>
            <ScrollRestoration/>
            <Header/>
            <ChangeLocation>
                <Outlet/>
            </ChangeLocation>
            <Alert />
            <Footer/>
        </>
    );
};

export default AppLayout;