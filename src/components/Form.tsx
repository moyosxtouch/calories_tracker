import { categories } from "../data/categories";
import { useState, ChangeEvent } from "react";
export default function Form() {
  const [activity, setActivity] = useState({
    category: 1,
    name: "",
    calories: 0,
  });
  const handleChange = (
    e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setActivity({
      ...activity,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoria:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
          value={activity.category}
          onChange={handleChange}
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="name" className="font-bold">
          {" "}
          Actividad:
        </label>
        <input
          id="name"
          value={activity.name}
          onChange={handleChange}
          type="text"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. Comida, Jugo de Naranja, Ensalada, Ejercicio, Pesas, Bicicleta"
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="calories" className="font-bold">
          {" "}
          Calorias:
        </label>
        <input
          id="calories"
          value={activity.calories}
          onChange={handleChange}
          type="number"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorias Ej. 300 o 500"
        />
      </div>
      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white cursor-pointer"
        value="Guardar Comida o Ejercicio"
      />
    </form>
  );
}
