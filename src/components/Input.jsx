export default function Input({ label, textarea, ...props }) {
    return <p className="flex flex-col gap-1 my-4">
        <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
        {textarea ? <textarea className="w-full p-1 border-b-2" {...props} /> : <input {...props}/>}
    </p>
}