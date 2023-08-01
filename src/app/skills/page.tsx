export default function Skills(){
    return(
      <section className="w-screen mt-12">
      <div className="flex felx-1 justify-start items-center flex-col gap-6">
          <h5 className="font-bol text-4xl">Activities</h5>
          <p className="text-2xl uppercase font-light">
              College of engineering
          </p>
          <p 
          className="w-3/5 text-center text-2xl font-cursive">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus ut iste id ipsa, velit fugit sequi consequatur incidunt, officiis, nobis amet quae! Accusantium quis accusamus, ducimus illo expedita id assumenda.
          </p>
          <div className=" flex xs:flex-col md:flex-row justify-center items-center gap-6">
      <img className=" md:w-1/4 xs:w-3/4 h-auto shadow-lg hover:shadow-2xl"
      src ="https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_1280.jpg"
      class="max-w-xs transition duration-300 ease-in-out hover:scale-125" alt="img1"/>

      <img className="md:w-1/4 xs:w-3/4 h-auto shadow-lg hover:shadow-2xl"
      src ="https://cdn.pixabay.com/photo/2017/07/15/22/07/library-2507902_1280.jpg "
      class="max-w-xs transition duration-300 ease-in-out hover:scale-125" alt="img2"/>

      <img className="md:w-1/4 xs:w-3/4 h-auto shadow-lg hover:shadow-2xl"
      src="https://cdn.pixabay.com/photo/2018/06/27/07/45/college-student-3500990_1280.jpg"
      class="max-w-xs transition duration-300 ease-in-out hover:scale-125" alt="img3"/>
          </div>
          <button className="border-red-300 border-2 p-3 rounded md hover:bg-red-500">
              View More
          </button>
      </div>
  </section>

    );
}