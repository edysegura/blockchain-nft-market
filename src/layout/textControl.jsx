import Label from './label'

export default function TextControl({ label, placeholder }) {
  return (
    <div>
      <div class="flex w-full justify-between">
        <Label>{label}</Label>
      </div>
      <input
        class="w-full border border-white bg-black p-2 text-base font-extrabold text-white outline-none"
        placeholder={placeholder}
      />
    </div>
  )
}
