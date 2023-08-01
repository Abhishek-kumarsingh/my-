export default function Blogs(){
    return (
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2017/07/08/16/06/one-piece-2484804_1280.jpg" alt="" width="384" height="512"/>
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic odio consequatur reiciendis nemo officia quis, obcaecati vero temporibus quia ducimus, adipisci eaque, praesentium asperiores vel sequi deleniti eos? Earum, molestiae?.”
      </p>
    </blockquote>
    <figcaption className="font-medium">
      <div className="text-sky-500 dark:text-sky-400">
        Abhishek Kumar Singh
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure>
    );
}