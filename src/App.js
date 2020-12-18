import logo from './logo.svg'
import './App.css'
import MainPage from './pages/MainPage'
import {Route, Switch} from 'react-router-dom'
import CalendarPage from './pages/CalendarPage'

function App() {
    return (
        <div className='App'>
            <Switch>
                <Route exact path='/'>
                    <MainPage />
                </Route>
                <Route path='/calendar'>
                    <CalendarPage />
                </Route>
            </Switch>
        </div>
    )
}

export default App
