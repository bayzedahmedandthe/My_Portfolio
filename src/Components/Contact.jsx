import mail from "../assets/icons8-mail-48.png"
import call from "../assets/icons8-call-48.png"
import location from "../assets/icons8-location-48.png"
import whatsup from "../assets/icons8-whatsapp-logo-50.png"
import facebook from "../assets/download.jpg"

const Contact = () => {
    return (
        <div className="lg:py-28 py-4 bg-[url(https://i.ibb.co.com/GQshb0MC/scratched-concrete-flooring-textured-backdrop.jpg)] bg-fixed">
            <div className=" border-t border-l rounded-md border-orange-600  bg-slate-800 opacity-80 lg:w-10/12 w-[94%] mx-auto  text-white">
                <h2 className="pt-6 text-center md:text-4xl font-semibold text-2xl text-orange-600 ">Get in touch </h2>
                <div className="md:flex items-start justify-around">
                    <div className="p-4 w-full md:mt-6 mt-0 md:ml-20 ml-0">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend  text-lg">Name</legend>
                            <input type="text" className="input input-error" placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend  text-lg">Email</legend>
                            <input type="email" className="input input-error" placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend text-lg">Subject</legend>
                            <input type="text" className="input input-error" placeholder="Type here" />
                        </fieldset>
                        <fieldset className="fieldset ">
                            <legend className="fieldset-legend text-lg">Message</legend>
                            <textarea type="text" placeholder="Error" className="textarea textarea-error"></textarea>
                        </fieldset>
                        <button className=" mt-4 bg-gradient-to-l md:px-2 px-1 py-1 btn from-purple-700 to-orange-700 rounded-sm text-xs md:text-lg  hover:shadow-purple-500/95 shadow-xl ">Send Message</button>
                    </div>
                    <div className=" w-full md:mt-12 mt-0">
                        <h2 className="text-orange-600 md:text-3xl font-semibold pb-2">Contact Us</h2>
                        <div className="flex items-center gap-2 py-2 text-lg">
                            <img className="h-6 w-6" src={location} alt="" />
                            <div>
                                <h3>ADDRESS:</h3>
                                <h4 className=""> Purbadhala, Netrokona, Bangladesh</h4>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 py-2 text-lg">
                            <img className="h-6 w-6" src={mail} alt="" />
                            <div>
                                <h3>EMAIL</h3>
                                <h4 className=""> bayzedm784@gmail.com</h4>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 py-2 text-lg">
                            <img className="h-6 w-6" src={call} alt="" />
                            <div>
                                <h3>CALL</h3>
                                <h4 className="">+8801929564378</h4>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 py-2 text-lg">
                            <img className="h-6 w-6" src={whatsup} alt="" />
                            <div>
                                <h3>WHATSAPP:</h3>
                                <h4 className="">+8801929564378</h4>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 py-2 text-lg">
                            <img className="h-6 w-6 rounded-full" src={facebook} alt="" />
                            <div>
                                <h3>FACEBOOK:</h3>
                                <a href="https://www.facebook.com/afifahomed.akib">https://www.facebook.com/afifahomed.akib</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;