import React from 'react'
import { useDispatch } from 'react-redux'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './pages/Header'
import Modale from './pages/Modale'
import '../css/style.css'
import img from '../images/background.jpg'
import styled from 'styled-components'


const App = () => {
	const dispatch = useDispatch()

	const [modale, setModale] = useState(null)

	const clickOutsideModale = event => {
		if (event.target.id === 'OutsideModale') setModale(null)
	}

    return (
        <Router>
        	<AppBody>
	            <Header setModale={ setModale }/>
	            { null !== modale && <Modale clickOutside={ clickOutsideModale } modale={ modale } setModale={ setModale } /> }
	            <div>
	                <Switch>
	                    <Route exact path="/">
	                        <Home />
	                    </Route>
	                    <Route path="/register">
	                        <Register />
	                    </Route>
	                    <Route path="/login">
	                        <Login />
	                    </Route>
	                </Switch>
	            </div>
            </AppBody>
        </Router>
    )
}

export default App

const AppBody = styled.div`
	background-image: url(${img});
	min-height: 100vh;
	background-size: cover;
	background-position: center;
`
