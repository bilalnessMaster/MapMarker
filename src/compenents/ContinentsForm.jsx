import React, { useEffect, useState ,memo } from "react";
import { useDispatch } from "react-redux";
import { ajouter } from "../reducers/continentMangaer";
import { motion, AnimatePresence } from "framer-motion";

const continents = [
  {
    id: 1,
    value: "Africa",
  },
  {
    id: 7,
    value: "Antarctica",
  },
  {
    id: 2,
    value: "Asia",
  },
  {
    id: 3,
    value: "Europe",
  },
  {
    id: 4,
    value: "North America",
  },
  {
    id: 6,
    value: "Australia",
  },
  {
    id: 5,
    value: "South America",
  },
];
const ContinentsForm = memo(({ x, y, isOpen, setIsOpen }) => {
  const dispatch = useDispatch();
  const [continent, setContinent] = useState(1);
  const [form, setForm] = useState({
    x: x,
    y: y,
    name: "",
    population: 0,
    capital: '',
    indepYear: '',
    image: ''
  })
  useEffect(()=>{
    setForm({...form ,x ,y })
  },[x,y])
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      ajouter({
        continent,
        form,
      })
    );
    setIsOpen(false)
  };
  console.log(form);
  
  return (
    <section
        
       className={`fixed backdrop-blur-sm h-screen w-full bg-black/10 z-30 ${isOpen? 'block' : 'hidden'} transition-all duration-700 delay-500`}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.form
            initial={{
              y: 200,
              opacity: 0,
            }}
            animate={{
              y: 0 , 
              opacity :1
              
            }}
            transition={{
              duration : .5,
              type : 'spring'
            }}
            exit={{
              y: 300,
              opacity: 0,
              transition:{
                duration : 1
              }
            }}
            style={{
                translateX : '-50%'
   
            }}
            action=""
            onSubmit={handleSubmit}
            className="space-y-3 bg-white w-[400px] px-2 py-5 rounded-md fixed bottom-0  left-1/2 mb-2"
          >
            <label htmlFor="">
              <select
                name="continent"
                onChange={(e) => setContinent(e.target.value)}
                className="w-96 border px-1 text-sm  py-2 rounded bg-gray-200/15 outline-none text-gray-600"
                id=""
              >
                {continents.map(({ id, value }) => (
                  <option key={id} value={id}>
                    {value}
                  </option>
                ))}
              </select>
            </label>
            <label htmlFor="name" className="flex flex-col gap-1">
              <span className="text-sm">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                className="w-96 border px-2 h-8 text-gray-600 text-sm bg-gray-200/15 rounded outline-none"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                id=""
                placeholder={"le nom de pay"}
              />
            </label>
            {/* population */}
            <label htmlFor="Population" className="flex flex-col gap-1">
              <span className="text-sm">Population</span>
              <input
                type="number"
                name="Population"
                value={form.population}
                className="w-96 border px-2 h-8 text-gray-600 text-sm bg-gray-200/15 rounded outline-none"
                onChange={(e) =>
                  setForm({ ...form, population: e.target.value })
                }
                id=""
                placeholder={"population du pay"}
              />
            </label>
            {/* image */}
            <label htmlFor="Image" className="flex flex-col gap-1">
              <span className="text-sm">Image</span>
              <input
                type="text"
                name="Image"
                value={form.image}
                className="w-96 border px-2 h-8 text-gray-600 text-sm bg-gray-200/15 rounded outline-none"
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                id=""
                placeholder={"paste your image url"}
              />
            </label>
            {/* year  */}
            <label htmlFor="Population" className="flex flex-col gap-1">
              <span className="text-sm">Independence annee</span>
              <input
                type="number"
                name="Population"
                value={form.indepYear}
                className="w-96 border px-2 h-8 text-gray-600 text-sm bg-gray-200/15 rounded outline-none"
                onChange={(e) =>
                  setForm({ ...form, indepYear: e.target.value })
                }
                id=""
                placeholder={"population du pay"}
              />
            </label>
            <div className="flex gap-1">
              {/* hiehgt */}
              <label
                htmlFor="Population"
                className="flex flex-col flex-1 gap-1"
              >
                <span className="text-sm">ClientY</span>
                <input
                  disabled
                  type="number"
                  name="Population"
                  value={form.y}
                  className=" border px-2 h-8 text-gray-400 text-sm bg-gray-200/15 rounded outline-none"
                  onChange={(e) => setForm({ ...form, y: e.target.value })}
                  id=""
                  placeholder={"position de pay sur la map y"}
                />
              </label>
              {/* width */}
              <label
                htmlFor="Population"
                className="flex flex-1 flex-col gap-1"
              >
                <span className="text-sm">ClientX</span>
                <input
                  disabled
                  type="number"
                  name="Population"
                  value={form.x}
                  className=" border px-2 h-8 text-gray-400 text-sm bg-gray-200/15 rounded outline-none"
                  onChange={(e) =>
                    setForm({ ...form, indepYear: e.target.value })
                  }
                  id=""
                  placeholder={"position de pay sur la map x"}
                />
              </label>
            </div>
            <input
              type="submit"
              value="Ajouter"
              className="border text-center py-2 font-medium rounded bg-indigo-400/55 text-indigo-900 text-sm w-96 hover:bg-gradient-to-r hover:from-indigo-400 hover:to-indigo-300 transition-colors cursor-pointer"
            />
          </motion.form>
        )}
      </AnimatePresence>
    </section>
  );
},)

export default ContinentsForm;
