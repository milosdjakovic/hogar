import React from "react"

// import HogarLogo from '../assets/hogar-main-logo-no-padding.svg';
import HogarLogo from "./HogarLogo"

const Hero = ({ storneNo, phone, address, gmapLink }) => (
  <div className="flex flex-col items-center p-4 my-4 sm:mt-8 sm:mb-10 font-patrick">
    <HogarLogo className="max-h-[44vh] w-full" />

    <h1 className=" text-4xl sm:text-5xl text-center uppercase hero-text">
      Poruči i pokupi
    </h1>

    {/* Phone number */}
    <div className="flex items-center mt-4 hero-text">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 xs:h-7 text-orange-600 icon icon-tabler icon-tabler-phone"
          viewBox="0 0 24 24"
          strokeWidth="2.6"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <path d="M4 4h5l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v5a1 1 0 0 1 -1 1a16 16 0 0 1 -16 -16a1 1 0 0 1 1 -1" />
        </svg>
      </div>

      <a
        href={`tel:{phone}`}
        className="ml-2 text-xl xs:text-3xl hover:text-orange-600 hover:underline"
      >
        {phone}
      </a>
    </div>

    {/* Location */}
    <div className="flex items-center mt-2 hero-text">
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 xs:h-7 text-orange-600 icon icon-tabler icon-tabler-map-pin"
          viewBox="0 0 24 24"
          strokeWidth="2.6"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" />
          <circle cx="12" cy="11" r="3" />
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
        </svg>
      </div>

      <a
        href={gmapLink}
        className="ml-2 text-xl xs:text-3xl text-gray-600 hover:text-orange-600 hover:underline"
      >
        {address}
      </a>
    </div>
  </div>
)

export default Hero
