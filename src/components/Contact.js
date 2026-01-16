const Contact = () =>{

    return(

        <div className="text-center ">
            <h1 className="font-bold text-3xl p-4 m-4 ">This is Contact page</h1>
            <form >
             
              <input type="text" placeholder="name" className="border border-black p-2 m-2 "></input>
               <input type="text" placeholder="message" className="border border-black p-2 m-2 "></input>
               <button className="bg-black text-white rounded-xl p-2 m-2 ">Submit</button>

            </form>
        </div>
    )
}

export default Contact;