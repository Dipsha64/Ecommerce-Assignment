import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Router from "../routes/Router";

function Layout() {
    return (
        <>
        <Header></Header>
        <main>
        <Router/>
        </main>
        <Footer></Footer>
        </>
    );
}

export default Layout;