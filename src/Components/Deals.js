import style from '../style.css'

const Deals = () => {
    return (
        <div>
            <div className='discountContainer'>
                <div className='dealsTitle'>
                    <h1 className='text-center'>Sign up for Deals and Discounts</h1>
                </div>
                <div className='dealsDetails'>
                    <p>blah blah blah blah blah blah blah blah blah blah blah blah</p>
                    <span class="emailSignUp">
                        <input className='email' type='email' placeholder='Email Address'></input>
                        <div className='signUp' type='button'> Sign Up </div>
                    </span>
                </div>
            </div>

        </div>
    )
}

export default Deals;