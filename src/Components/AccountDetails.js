const AccountDetail = () => {
    return(
        <div>
            <h1 className="text-left">Your Account</h1>
            <div className="account-card-container">
                <div className="account-cards">
                    <h4>Your Orders:</h4>
                    <p>Track, return, or re-order items</p>
                </div>
                <div className="account-cards">
                    <h4>Security</h4>
                    <p>Change name, password, and phone number</p>
                </div>
                <div className="account-cards">
                    <h4>Samazon preferred:</h4>
                    <p>Join today!</p>
                </div>
            </div>
            <div className="account-card-container">
                <div className="account-cards">
                    <h4>Your Orders:</h4>
                    <p>Track, return, or re-order items</p>
                </div>
                <div className="account-cards">
                    <h4>Gift cards</h4>
                    <p>View balance, redeem, or reload gift cards</p>
                </div>
                <div className="account-cards">
                    <h4>Your Orders:</h4>
                    <p>Track, return, or re-order items</p>
                </div>
            </div>
        </div>
    )
}

export default AccountDetail;