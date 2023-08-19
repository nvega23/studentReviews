import './employee.css'

const Employee = () => {
    return (
        <>
            <div className='employeeContainer'>
                {/* <div className='imageContainer'> */}
                    <img className='employeeImage' src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"/>
                {/* </div> */}
                <div className='TextContainer'>
                    <div className='aboutMe'>
                        About me:
                    </div>
                    <div className='aboutMeTextContainer'>
                        Basic information goes here
                    </div>
                </div>
            </div>
        </>
    )
}

export default Employee;