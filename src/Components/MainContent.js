import style from '../style.css';
const MainContent = (props) => {

    return (
        <div>
            <div className='brand'>
                <h1 className='brandName'>Samazon</h1>
                <div className='products'>
                    <img className='box' src={props.image}></img>
                    <img className='box' src={props.image}></img>
                    <img className='box' src={props.image}></img>
                </div>
                <p className='trending'>Shop Trending Items Now</p>
            </div>
        </div>
    )
}

export default MainContent