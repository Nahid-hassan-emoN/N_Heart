import React, { useState } from 'react';



const Contract = () => {
    const [data, setData] = useState({
        fullName: '',
        phone: '',
        email: '',
        msg: '',

    });
    const inputEvent = (event) => {
        const { name, value } = event.target;

        setData((preVal) => {
            return {
                ...preVal,
                [name]: value,
            };
        });
    };
    const formSubmit = (e) => {
        e.preventDefault()
        alert(`
        My Name is ${data.fullName}
        My Phone Number ${data.phone}
        My email is ${data.email}
        My Message is ${data.msg}`)
    };

    return (
        <>
            <div className='my-5'>
                <h1 className='text-center'> Contract Us</h1>
            </div>
            <div className='container contract_div' >
                <div className='row'>
                    <div className='col-md-6 col-10 mx-auto '>
                        <form onSubmit={formSubmit}>


                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1"
                                    name="fullName"
                                    value={data.fullName}
                                    onChange={inputEvent}
                                    placeholder="Enter Your Name " />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1"
                                    name="phone"
                                    value={data.phone}
                                    onChange={inputEvent}
                                    placeholder="0123456789" />
                            </div><div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1"
                                    name="email"
                                    value={data.email}
                                    onChange={inputEvent}
                                    placeholder="name@example.com" />
                            </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message For us</label>
                                
                                <textarea 
                                name="msg"
                                value={data.msg}
                                onChange={inputEvent}
                                class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary text-center">Submit</button>
                        </form>
                    </div>

                </div>

            </div>
            <div>
                <br />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
        </>
    );
};

export default Contract;