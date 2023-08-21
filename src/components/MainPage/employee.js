import './employee.css'
import { useNavigate } from "react-router-dom";

const Employee = () => {
    const navigate = useNavigate();

    const reviewEmployee = () => {
        navigate('/review')
    }

    return (
        <>
            <div className='employeeContainer'>
                <img className='employeeImage' src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"/>
                <div className='TextContainer'>
                    <div className='aboutMe'>
                        <div className='nameContainer'>
                            Nestor Vega
                            <button onClick={reviewEmployee}>Evaluate Employee</button>
                        </div>
                    </div>
                    <div className='aboutMeTextContainer'>
                        Hi, I'm Nestor Vega, and I am deeply devoted to the art of education. Allow me to introduce myself and share my profound enthusiasm for teaching. With an ardent commitment to fostering knowledge and igniting intellectual curiosity, I embark on a journey as an educator
                    </div>
                </div>
            </div>
            <div className='employeeContainer'>
                <div className='TextContainer'>
                    <div className='aboutMeTextContainer'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                    <div className='aboutMe'>
                        <div className='nameContainer'>
                            Nestor Vega
                            <button onClick={reviewEmployee}>Evaluate Employee</button>
                        </div>
                    </div>
                <img className='employeeImage' src="https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"/>
                </div>
            </div>
            <div className='employeeContainer'>
                <img className='employeeImage' src="https://images.unsplash.com/photo-1590649880765-91b1956b8276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"/>
                <div className='TextContainer'>
                    <div className='aboutMe'>
                        <div className='nameContainer'>
                            Nestor Vega
                            <button onClick={reviewEmployee}>Evaluate Employee</button>
                        </div>
                    </div>
                    <div className='aboutMeTextContainer'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employee;