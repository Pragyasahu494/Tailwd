import { useState } from "react"

const TextConverter = () => {
  const [text, setText] = useState('')
  const [applyedCss, setApplyedCss] = useState(null)

  function handleChange(e) {
    setText(e.target.value)
  }

  function handleRemoveExtraSpace() {
    const value = text
    const arr = value.replace(/\s+/g, ' ').trim()
    setText(arr)
  }

  function handleCopyText() {
    navigator.clipboard.writeText(text);
  }

  function setBold() {
    setApplyedCss('font-bold');
  }

  return (
    <>
      <div className="w-full h-screen p-4 bg-gray-200 flex justify-center">
        <div className="max-w-[1024px] w-full">
          <div className="max-w-sm w-full">
            <textarea value={text} onChange={handleChange} className="border bg-white  py-2 px-3 sm:py-3 sm:px-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb" rows="3" placeholder="This is a textarea placeholder"></textarea>
          </div>
          <div>
            <button type="button" onClick={() => setText(text.toUpperCase())} className="cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" >
              Uppercase
            </button>
            <button type="button" onClick={() => setText(text.toLowerCase())} className="cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" >
              Lowercase
            </button>
            <button type="button" onClick={handleRemoveExtraSpace} className="cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" >
              Remove extra space
            </button>
            <button type="button" onClick={handleCopyText} className="cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" >
              Copy text
            </button>

            <div className="mt-10 bg-white w-full h-full p-6 rounded ">
              <p className={`text-red-500 ${applyedCss}`}>{text}</p>
              <p>{text.length}</p>
            </div>

            <button onClick={setBold} className="cursor-pointer w-fit px-4 py-2 mt-2 rounded bg-blue-600 text-white">Bold</button>
            
          </div>
        </div>
      </div>

    </>
  )
}

export default TextConverter