// import React from "react";
// import photo from "./photo.jpeg"
import basketball from "./basketball.jpg"
// function Card(props) {
//in the funtion mentioned above, we can use props.properties or use thebelow on to directly access the properties           
function Card({username = "Yash", post = "Not Assiged yet", icon = basketball}) {         //instead of using props, we can destructure it and use {propName} and directly use them in the function
  // console.log(props)
  return (
    <div>
      
      <section className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10"></div>
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl ring-1 shadow-indigo-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center"></div>
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
          <img
            src="https://tailwindcss.com/plus-assets/img/logos/workcation-logo-indigo-400.svg"
            alt=""
            className="mx-auto h-12"
          />
          <figure className="mt-10">
            <blockquote className="text-center text-xl/8 font-semibold text-white sm:text-2xl/9">
              <p>
                “Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                expedita voluptas culpa sapiente alias molestiae. Numquam
                corrupti in laborum sed rerum et corporis.”
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                src={icon}
                alt=""
                className="mx-auto size-10 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-white">{username }</div>  
                {/* we can use conditional props here, like mentoned above or can dirctly pass a default value in the function parameter */}
                <svg
                  viewBox="0 0 2 2"
                  width="3"
                  height="3"
                  aria-hidden="true"
                  className="fill-white"
                >
                  <circle r="1" cx="1" cy="1" />
                </svg>
                <div className="text-gray-400">{post}</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}

export default Card;
