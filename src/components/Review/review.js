import StarReview from '../StarReview/starReview';
import './review.css'

const Review = () => {
    return (
        <>
            <div className='reviewContainer'>
                <img className='reviewEmployeeImage' src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"/>
                <div className='inputContainer'>
                    <h1 className='employeeNameReview'>Nestor Vega</h1>
                    <div className='classPace'>
                        <label>
                            <input
                                type='radio'
                                name='paced'
                                value='slow Paced'
                            />
                            <h5>Slow</h5>
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='paced'
                                value="Fast Paced"
                            />
                            <h5>Fast</h5>
                        </label>
                        <label>
                            <input
                                type='radio'
                                name='paced'
                                value="Perfect"
                            />
                            <h5>Perfect</h5>
                        </label>
                    </div>
                    <select className='selectedOptions'>
                        <option value='option1'>Navigation</option>
                        <option value='option2'>Medical Records</option>
                        <option value='option3'>Telephone Calls</option>
                    </select>
                    <textarea placeholder='Enter additional comments'></textarea>
                    <StarReview/>
                </div>
            </div>
        </>
    )
}

export default Review;