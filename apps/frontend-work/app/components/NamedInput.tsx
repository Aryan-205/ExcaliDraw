export default function NamedInput({name}:{ name:string }){
  const inputType = name.toLowerCase() === "password" ? "password" : "text";
  return (
    <div className="w-full">
      <p className="text-white font-semibold text-xl">{name}</p>
      <input className="border border-white rounded-lg text-gray-300 px-4 py-2 w-full" type={inputType} placeholder={`Enter your ${name}`} />
    </div>
  )
}