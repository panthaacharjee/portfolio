
const Contact = () => {
  const handleSubmit=(e)=>{
    e.preventDefault()
    alert("Thanks for contact us")
  }

  return (
    <div className="container mx-auto pb-20  md:py-10 flex flex-col md:flex-row">
      <div className=" w-full md:w-6/12">
        <div className="w-10/12 mx-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.920218320472!2d90.35768831879811!3d23.87667147256956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1711898684870!5m2!1sen!2sbd"
            width="100%"
            height="436"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className=" w-full md:w-6/12 mt-20 md:mt-0">
        <form onSubmit={handleSubmit} className="w-10/12 md:w-8/12 mx-auto">
          <div>
            <p className="text-white font-mont text-sm font-medium mb-2">Name</p>
            <input className="py-2 px-3 w-full rounded-lg" type="text" placeholder="Enter your Name" required/>
          </div>
          <div className="mt-5">
            <p className="text-white font-mont text-sm font-medium mb-2">Email</p>
            <input className="py-2 px-3 w-full rounded-lg" type="text" placeholder="Enter your Email" required/>
          </div>
          <div className="mt-5">
            <p className="text-white font-mont text-sm font-medium mb-2">Comment</p>
            <textarea placeholder="Enter your comment" rows={7} className="w-full rounded-lg px-3 py-1"/>
          </div>
          <button className="font-mont text-white bg-yellow-500 rounded-md px-5 py-1 mt-5">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Contact