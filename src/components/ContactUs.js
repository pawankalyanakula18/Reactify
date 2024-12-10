const ContactUs = ()=>{
    return(
        <div>
             <h3 className="text-center m-4 p-4 font-bold text-3xl">Contact us...</h3>
             <form>
                <input type="text"
                    className="border border-black m-2 p-2"
                    placeholder="name"
                />
                <input type="text"
                    className="border border-black m-2 p-2"
                    placeholder="message"
                />
                <button className="border border-black m-2 p-2 rounded-lg bg-blue-600 text-white">
                    Submit</button>

             </form>
        </div>
    );
};
export default ContactUs;