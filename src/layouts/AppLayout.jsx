import React, {useEffect} from 'react';
import {Outlet, ScrollRestoration} from 'react-router-dom';
import Footer from '../components/Footer';
import Header from '../components/Header';
import {useDispatch} from "react-redux";
import {initFingerprint} from "../store/slices/app/Action";
import Alert from "../components/Alert";
import {GetBanner, GetInformation, GetOptionsWithParams} from "../services/Options";
import ChangeLocation from "./ChangeLocation";
import Request from "../components/Request";
import {useAppAction} from "../store";

const AppLayout = () => {
    const fingerprint = localStorage.getItem('fingerprint')
    const dispatch = useDispatch()
    const {RequestShowInit} = useAppAction()
    useEffect(() => {
        dispatch(GetOptionsWithParams())
        dispatch(GetBanner())
        dispatch(RequestShowInit())
        dispatch(GetInformation())
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
            <Request />
            <Footer/>
        </>
    );
};

export default AppLayout;