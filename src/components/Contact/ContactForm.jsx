import React, { useState } from 'react';

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    const handleOnBlur = (e) => {
        const newForm = {...form}
        newForm[e.target.name] = e.target.value;
        setForm(newForm)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form);
        e.target.reset()
      }

    return (
           <>
            <div className='bg-white w-[70%] m-auto p-30'>
                <h3 className='text-white leading-[ 1.333] font-semibold'>Get in Touch</h3>
                <form className='mt-3' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Your Name</label>
                        <input className="d-block w-[100%]" type="text" id="name" name="name" onBlur={handleOnBlur} required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Your Email</label>
                        <input className="d-block w-[100%]" type="email" id="email" name="email" aria-describedby="emailHelp" onBlur={handleOnBlur} required/>
                    </div>
                    <div className="mb-3">
                        <label for="exampleInputPassword1" className="form-label">Subject</label>
                        <input className="d-block w-[100%]" type="text" id="subject" name="subject"  onBlur={handleOnBlur} required/>
                    </div>
                    <div className="mb-3">
                        <label for="" className="form-label">Your Message</label>
                        <textarea id="floatingTextarea2" name="message" style={{ height: "150px" }} onBlur={handleOnBlur} required></textarea>
                    </div>
                    <input type="submit" className="w-[15%] px-8 py-40 rounded-none mt-5 bg-transparent border border-solid text-[#000] font-semibold" id='sendButton' value="SEND"/>
                </form>
            </div>
        </>
    );
};

export default ContactForm;



