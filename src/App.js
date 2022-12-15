import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import FullPage from "./components/fullPage/FullPage";
import OrderTracking from "./components/OrderTracking/OrderTracking";
import Contact from "./components/contact/Contact";
import InvoicePage from "./components/invoicePage/InvoicePage";
import MyAccount from "./components/myAccount/MyAccount";
import {HashRouter, Routes, Route} from "react-router-dom";
import Page404 from "./components/404/Page404";
import AboutMy from "./components/AboutMy/AboutMy";
import Favorites from "./components/Favorites/Favorites";
import Weblog from "./components/Weblog/Weblog";
import {Provider} from "react-redux";
import {Store, persistor} from "./redux/persist/Persist";
import {PersistGate} from "redux-persist/integration/react";

function App() {
    return (
        <HashRouter>
            <Provider store={Store}>
                <PersistGate loading={null} persistor={persistor}>
                    <div style={{direction: 'rtl'}}>
                        <Header/>
                        <Routes>
                            <Route exact path={'/OrderTracking'} element={<OrderTracking/>}/>
                            <Route exact path={'/Contact'} element={<Contact/>}/>
                            <Route exact path={'/InvoicePage'} element={<InvoicePage/>}/>
                            <Route exact path={'/MyAccount'} element={<MyAccount/>}/>
                            <Route exact path={'/FullPage/:page'} element={<FullPage/>}/>
                            <Route exact path={'/About'} element={<AboutMy/>}/>
                            <Route exact path={'/Favorites'} element={<Favorites/>}/>
                            <Route exact path={'/Weblog'} element={<Weblog/>}/>
                            <Route exact path={'/'} element={<Home/>}/>
                            <Route path={"*"} element={<Page404/>}/>
                        </Routes>
                        <Footer/>
                    </div>
                </PersistGate>
            </Provider>
        </HashRouter>
    );
}

export default App;
