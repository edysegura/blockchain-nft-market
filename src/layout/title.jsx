export default function Title({ text, highlightedText }) {
  return (
    <h2 class="mb-5 text-xl font-extrabold leading-relaxed">
      <span class="shadow-white drop-shadow-[0_0_10px_rgba(255,255,255,0.7)]">
        {text}{' '}
      </span>
      {highlightedText && (
        <span class="bg-mustard p-2 text-black shadow-black drop-shadow-none">
          {highlightedText}
        </span>
      )}
    </h2>
  )
}
