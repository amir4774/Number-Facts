const CardNumberFacts = ({ fact, changeNumber }) => {
    return (
        <div className="card bg-primary mt-4 col-md-6 text-white p-4 mx-auto">
            <div className="card-body">
                <h1>Number Facts</h1>
                <p>Enter a number and get a random fact</p>
                <input type="number" className='form-control form-control-lg mb-3' placeholder='Enter any number...' onChange={(e) => changeNumber(e.target.value)} />
                <div className="card-body">
                    <h4 className='card-title'>Number Fact</h4>
                    <p className="card-text">{fact}</p>
                </div>
            </div>
        </div>
    )
}

export default CardNumberFacts;