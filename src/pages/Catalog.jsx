import React, {useEffect, useReducer, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavBreadcrumbs from '../components/NavBreadcrumbs';
import CategoryPill from '../components/CategoryPill';
import InputRange from '../components/InputRange';
import ProductCard from '../components/ProductCard';
import Accordion from 'react-bootstrap/Accordion';
import useIsMobile from '../hooks/isMobile';
import CloseIcon from '../components/svg/CloseIcon';
import {useAppSelector} from "../store";
import {json, useLocation} from "react-router-dom";
import {GetaLLParametrs, GetAllProducts, GetSpecifications} from "../services/Options";
import Loader from "../components/Loader";
import LoadingScreen from "../components/LoadingScreen/LoadingScreen";

const Catalog = () => {
    const {mobile} = useIsMobile('991px');
    const {state} = useLocation()
    const {favorites, shopping} = useAppSelector(state => state?.user?.user)
    const categories = useAppSelector(state => state.app.categories)
    const [showFilters, setShowFilters] = useState(false);
    const handleCloseFilters = () => setShowFilters(false);
    const handleShowFilters = () => setShowFilters(true);
    const [oils, setOils] = useState()
    const [minMax, setMinMax] = useState([0, 0])
    const [categoriesList, setCategoriesList] = useState()
    const [parametrList, setParametrList] = useState()
    const idCategory = state?.idCategory ? state?.idCategory : 1
    const nameCategory = categories?.find(element => element.id == idCategory)?.name
    const searchInput = useAppSelector(state => state.app.searchInput)
    const [filter, setFilter] = useReducer((state, newState) => ({...state, ...newState}),
        {
            page: 1, limit: 12, specifications: [], options: []
        })
    useEffect(() => {
        if (searchInput == 'loading')
            setOils('loading')
        else {
            if (searchInput)
                setOils(searchInput)
            else
                setOils([])
        }
    }, [searchInput])
    const ChangeFilter = (specificationId, field) => {
        const list = filter[field]
        const exist = list?.find(element => element == specificationId)
        if (exist) {
            let obj = {};
            obj[field] = list?.filter(element => element != specificationId)
            setFilter(obj)
        } else {
            let obj = {};
            obj[field] = [...list, specificationId]
            setFilter(obj)
        }
    }


    useEffect(() => {
        GetSpecifications(idCategory).then(res => {
            if (res)
                setCategoriesList(res)
        })

        GetaLLParametrs(idCategory).then(res => {
            if (res)
                setParametrList(res)
        })
    }, [idCategory])

    useEffect(() => {
        if (searchInput != 'loading') {
            setOils('loading')
            GetAllProducts(filter).then(res => {
                if (res) {
                    const {minPrice, maxPrice} = res?.meta
                    if (minPrice && maxPrice)
                        setMinMax([minPrice, maxPrice])
                    setOils(res?.body)
                } else
                    setOils([])
            })
        }
    }, [filter])

    const ChangeSelect = (value) => {
        switch (value) {
            case '0':
                setFilter({orderBy: 'price', direction: 'asc'})
                break;
            case '1':
                setFilter({orderBy: 'price', direction: 'desc'})
                break;
        }
    }
    const ChangeMinMax = values =>{
        const [minPrice, maxPrice] = values
        if(JSON.stringify(minMax)!=JSON.stringify(values)) {
            setFilter({minPrice, maxPrice})
        }
        else {
            const {minPrice:minPrice2, maxPrice:maxPrice2} = filter
            if(minPrice!=minPrice2 || maxPrice!=maxPrice2) {
                setFilter({minPrice, maxPrice})
            }
        }
    }
    if(!parametrList){
        return(
            <Loader />
        )
    }
    else
        return (
        <main>
            <Container>
                <NavBreadcrumbs pageName={'Каталог'}/>
                {
                    (!mobile) &&
                    <section className='sec-8 mb-custom'>
                        <ul>
                            {categories?.map((element, index) =>
                                <li key={index}>
                                    <CategoryPill {...element} />
                                </li>
                            )}
                        </ul>
                    </section>
                }

                <section className='sec-9 mb-sm-4 mb-md-5 min-vh-100'>
                    <h1 className='inner'>{nameCategory}</h1>
                    <Row className='gx-4 gx-xl-5'>
                        <Col xs={12} lg={3} className="pe-xxl-5">
                            <Offcanvas show={showFilters} placement={'start'} onHide={handleCloseFilters}
                                       responsive="lg">
                                <Offcanvas.Body>
                                    <div className="d-flex justify-content-between align-items-center d-lg-none mb-4">
                                        <h3 className='mb-0'>Фильтры</h3>
                                        <button type='button' onClick={handleCloseFilters} className='close'>
                                            <CloseIcon/>
                                        </button>
                                    </div>
                                    <form className="filter w-100">
                                        <select className='d-none d-lg-block mb-4' onChange={({target: {value}}) => {
                                            ChangeSelect(value)
                                        }}>
                                            <option value={0}>Сначала дешёвые</option>
                                            <option value={1}>Сначала дорогие</option>
                                            <option value={2}>Сначала популярные</option>
                                        </select>

                                        <h6>Цена, ₽</h6>
                                        <InputRange data={minMax} onChange={ChangeMinMax}/>

                                        <Accordion className='mt-4' defaultActiveKey="0">
                                            {parametrList?.map((element, index) =>
                                                <Accordion.Item eventKey={index} key={index}>
                                                    <Accordion.Header as="h6">{element.name}</Accordion.Header>
                                                    <Accordion.Body>
                                                        <ul>
                                                            {element.options?.map((el, ind) =>
                                                                <li key={ind}>
                                                                    <label>
                                                                        <span>{el.name}</span>
                                                                        <input type="checkbox"
                                                                               checked={filter?.options?.find(e => e == el.id) ? true : false}
                                                                               onChange={() => ChangeFilter(el.id, 'options')}
                                                                        />
                                                                    </label>
                                                                </li>
                                                            )}
                                                        </ul>
                                                    </Accordion.Body>
                                                </Accordion.Item>
                                            )}
                                        </Accordion>
                                    </form>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Col>
                        <Col xs={12} lg={9}>
                            <ul className="subcategories">
                                <li onClick={() => setFilter({specifications: []})}>
                                    <button type='button'
                                            className={`btn-3 ${filter?.specifications?.length == 0 ? 'active' : ''}`}>Все
                                        товары
                                    </button>
                                </li>
                                {categoriesList?.map((element, index) =>
                                    <li key={index} onClick={() => ChangeFilter(element?.id, 'specifications')}>
                                        <button type='button'
                                                className={`btn-3 ${filter?.specifications?.find(el => el == element.id) ? 'active' : ''}`}>
                                            {element.name}
                                        </button>
                                    </li>
                                )}
                            </ul>
                            <div className="d-flex justify-content-between align-items-center d-lg-none mb-4 mb-sm-5"
                                 onChange={({target: {value}}) => {
                                     ChangeSelect(value)
                                 }}>
                                <select>
                                    <option value={0}>Сначала дешёвые</option>
                                    <option value={1}>Сначала дорогие</option>
                                    <option value={2}>Сначала популярные</option>
                                </select>

                                <button type='button' onClick={handleShowFilters}>Фильтры</button>
                            </div>
                            {oils === 'loading' ?
                                <Loader color={'red'} small={true}/>
                                : oils?.length == 0 ?
                                    <Container className={'d-flex justify-content-center'}>
                                        <h2>Товаров не найдено</h2>
                                    </Container>
                                    : <Row xs={2} md={3} className="gx-3 gx-sm-4 gx-xl-5 gy-5">
                                        {oils?.map((element, index) =>
                                            <Col key={index}>
                                                <ProductCard
                                                    {...element}
                                                    fav={favorites?.find(el => el == element?.id)}
                                                    shop={shopping?.find(el => el.id == element?.id)}
                                                />
                                            </Col>
                                        )}
                                    </Row>
                            }
                        </Col>
                    </Row>
                </section>
            </Container>
        </main>
    );
};

export default Catalog;