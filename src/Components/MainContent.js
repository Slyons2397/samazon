import style from '../style.css';
import { PRODUCTS } from "../features/PRODUCTS";



const MainContent = () => {
    
    const newProducts = PRODUCTS.map(
        (product) => {
            return(
                <div className='product'>
                    <img className='productThumb' src={product.image}></img>
                    <h1>{product.description}</h1>
                </div>
            )
        }
    )

    return (
        <div>
            <div className='brand'>
                <h1 className='brandName'>Samazon</h1>
        
                <div className='products'>
                    <div className='box'>
                        {newProducts}
                    </div>
                </div>
                <p className='trending'>Shop Trending Items Now</p>
            </div>
        </div>
    )
};

export default MainContent