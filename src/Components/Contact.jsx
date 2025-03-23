import mail from "../assets/icons8-mail-48.png"
import call from "../assets/icons8-call-48.png"
import location from "../assets/icons8-location-48.png"
import whatsup from "../assets/icons8-whatsapp-logo-50.png"
import facebook from "../assets/download.jpg"
import { useForm } from "react-hook-form"
import Swal from "sweetalert2"

const Contact = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        console.log(data);
        reset();
        const formEndpoint = "https://formspree.io/f/xovedjaa";
        try {
            const response = await fetch(formEndpoint, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                Swal.fire({
                    title: "Message sent successfully !",
                    icon: "success",

                });
                reset();
            } else {
                alert("Error sending message.");
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }

return (
    <div id="contact" className="lg:py-28 py-4 bg-[url(https://i.ibb.co.com/GQshb0MC/scratched-concrete-flooring-textured-backdrop.jpg)] bg-fixed">
        <div className=" border-t border-l rounded-md border-orange-600  bg-slate-800 opacity-80 lg:w-10/12 w-[94%] mx-auto  text-white">
            <h2 className="pt-6 text-center md:text-4xl font-semibold text-2xl text-orange-600 ">Get in touch </h2>
            <div className="md:flex items-start justify-around">
                <form onSubmit={handleSubmit(onSubmit)} className="p-4 w-full md:mt-6 mt-0 md:ml-20 ml-0">
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend  text-lg">Name</legend>
                        <input {...register("name")} type="text" className="input input-error" placeholder="Enter your full name" required />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend  text-lg">Email</legend>
                        <input {...register("email")} type="email" className="input input-error" placeholder="Enter your email" required />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend text-lg">Subject</legend>
                        <input {...register("subject")} type="text" className="input input-error" placeholder="Enter your subject" required />
                    </fieldset>
                    <fieldset className="fieldset ">
                        <legend className="fieldset-legend text-lg">Message</legend>
                        <textarea {...register("message")} type="text" placeholder="Enter your message" required className="textarea textarea-error"></textarea>
                    </fieldset>
                    <button className=" mt-4 bg-gradient-to-l md:px-2 px-1 py-1 btn from-purple-700 to-orange-700 rounded-sm text-xs md:text-lg  hover:shadow-purple-500/95 shadow-xl ">Send Message</button>
                </form>
                <div className=" md:mt-12 mt-0 md:w-full w-[94%] mx-auto ">
                    <h2 className="text-orange-600 md:text-3xl text-2xl font-semibold pb-2">Contact Me</h2>
                    <div className="flex items-center gap-2 py-2 text-lg">
                        <img className="h-6 w-6" src={location} alt="" />
                        <div>
                            <h3>ADDRESS:</h3>
                            <h4> Purbadhala, Netrokona, Bangladesh</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 py-2 text-lg">
                        <img className="h-6 w-6" src={mail} alt="" />
                        <div>
                            <h3>EMAIL</h3>
                            <h4> bayzedm784@gmail.com</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 py-2 text-lg">
                        <img className="h-6 w-6" src={call} alt="" />
                        <div>
                            <h3>CALL</h3>
                            <h4>+8801929564378</h4>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 py-2 text-lg">
                        <img className="h-6 w-6" src={whatsup} alt="" />
                        <div>
                            <h3>WHATSAPP:</h3>
                            <h4>+8801929564378</h4>
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

