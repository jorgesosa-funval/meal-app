
export default function Card() {
  return (
    <figure className="border rounded-md mx-auto mt-4 shadow-md w-60 h-72 overflow-hidden relative text-white">
      <img src="photos/photo1.png" className="w-full object-cover" />

      <figcaption className="absolute bottom-0 left-0 w-full py-4 bg-slate-900/50  text-center text-2xl hover:text-red-600">
        Imagen rando de lorem picsum
      </figcaption>
    </figure>
  )
}

