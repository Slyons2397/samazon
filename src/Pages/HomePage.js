import Header from "../components/Header";
import MainContent from '../components/MainContent'
import FeaturedProducts from "../components/FeaturedProducts";
import Deals from "../components/Deals";
import ForYou from "../components/ForYou";
import airpods from '../images/airpods.jpg'
import { Link } from 'react-router-dom';


const HomePage = () => {
    return (
        <div>
            <Header />
            <MainContent  
            
            image = { airpods }
            />
            <FeaturedProducts />
            <Deals />
            <ForYou />
        </div>
    )
}

export default HomePage;