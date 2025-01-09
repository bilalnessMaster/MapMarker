import { useDispatch, useSelector } from "react-redux";
import { ajouter } from "../reducers/continentMangaer";
import MouseMovemment from "./MouseMovemment";
import { useEffect, useRef, useState } from "react";
import world from "../assets/world.jpg";
import ContinentsForm from "./ContinentsForm";

const ContinentsTable = () => {
  const dispatch = useDispatch();
  const listCountry = useSelector((state) => state.continents.countries);
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);
  const [marker, setMarker] = useState({
    x: null,
    y: null,
  });
  let { height, width } = MouseMovemment();
  const handleCreateMarker = () => {
    let x = width - containerRef.current.getBoundingClientRect().left - 6;
    let y = height - containerRef.current.getBoundingClientRect().top - 6;
    setMarker({
      x,
      y,
    });
    setIsOpen(true);
  };

  return (
    <section className="h-screen">
      {isOpen && (
        <ContinentsForm
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          x={marker.x}
          y={marker.y}
        />
      )}
      <div ref={containerRef} className="h-full isolate relative">
        <h1 className="text-3xl  font-geist text-center  mt-4">Maker your country </h1>
        <img
          onClick={handleCreateMarker}
          src={world}

          className="object-cover mix-blend- h-full mx-auto relative z-10"
          alt=""
        />
        {marker.x && marker.y && (
          <div
            style={{
              top: marker.y,
              left: marker.x,
            }}
            className="size-3 z-20 bg-red-500 absolute rounded-full "
          />
        )}
        {listCountry.map((item) => (
          <div
            key={item.x}
            style={{
              top: item.y,
              left: item.x,
            }}
            className="z-20  flex flex-col items-center transition-all font-medium font-geist  absolute w-fit group"
          >
            <div className="relative  w-2 h-12 flex flex-col items-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p>{item.name}</p>
              <div className="absolute -top-36 -translate-x-1/2 opacity-0 transition-all  group-hover:opacity-100  h-[100px] w-[200px]">
              <img className="object-cover rounded-md " src={item.image} alt="" />
              </div>
              </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContinentsTable;
