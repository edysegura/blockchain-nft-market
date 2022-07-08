export default function ButtonLink({ href, clazz, onclick, children }) {
  return (
    <a
      href={href}
      onclick={onclick}
      class={`cursor-pointer bg-mustard p-2 text-center font-extrabold text-black ${clazz}`}
    >
      {children}
    </a>
  )
}
