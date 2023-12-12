import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4c48nc6', 'template_g8gz2oz', form.current, 'ZekIzJtBbnOcBveRb')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div>
            <div className="text-center text-4xl font-bold text-white underline py-4">
                <h1 className="mt-12">Contact Me</h1>
            </div>
            
            <div className="lg:w-[500px] bg-purple-800 lg:ml-[370px] my-5">
            <form className="card-body" ref={form} onSubmit={sendEmail}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" name="user_name" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="email" name="user_email" placeholder="password" className="input input-bordered" required />
                                
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Message</span>
                                </label>
                                <textarea name="message" id="" cols="30" rows="10"></textarea>
                                
                                
                            </div>
                            <input className="text-white btn btn-outline hover:bg-yellow-600" type="submit" value="Send" />
                        </form>
            </div>
       

        </div>
    );
};

export default Contact;