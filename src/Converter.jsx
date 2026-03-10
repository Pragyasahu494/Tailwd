import { useState } from "react"

const Converter = () => {
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

   function setItalic() {
    setApplyedCss('italic');
  }

  function setUnderline() {
    setApplyedCss('underline');
  }

  function handleClearText() {
    setText('');
    setApplyedCss(null);
  }

  function handleCapitalize() {
    const value = text
    const arr = value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    setText(arr)
  }

  return (
    <>
      <div className="max-w-4xl mx-auto bg-blue-50 border border-blue-300 p-8 rounded-xl shadow-lg">
      <div className="w-full h-screen p-8 bg-gray-200 flex justify-center">
        <div className="max-w-[1054px] w-full">
          <div className="w-full">
        {/* <Header className ="bg-cyan-600 text-4xl font-black">Text Editor</Header> */}
          <h1 className="bg-cyan-400 text-black text-center text-3xl font-semibold font-bold p-4 rounded mb-8">Text Editer </h1>
            <textarea value={text} onChange={handleChange} className="border bg-white  py-2 px-3 sm:py-3 sm:px-4 block w-full bg-layer border-layer-line rounded-lg sm:text-sm text-foreground placeholder:text-muted-foreground-1 focus:border-primary-focus focus:ring-primary-focus disabled:opacity-50 disabled:pointer-events-none [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb" rows="3" placeholder="This is a textarea placeholder"></textarea>
          </div>
          <div>
            <button type="button" onClick={() => setText(text.toUpperCase())} className="bg-green-400 cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" >
              Uppercase
            </button>
            <button type="button" onClick={() => setText(text.toLowerCase())} className="bg-orange-300 cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" >
              Lowercase
            </button>
            <button type="button" onClick={handleRemoveExtraSpace} className="bg-indigo-300 cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" >
              Remove space
            </button>
            <button type="button" onClick={handleCopyText} className="bg-yellow-300 cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" >
              Copy text
            </button>
            <button type="button" onClick={handleClearText} className="bg-red-400 cursor-pointer py-3 px-4 inline-flex items-center gap-x-2 text-sm font-bold rounded-lg bg-primary border border-primary-line text-primary-foreground hover:bg-primary-hover focus:outline-hidden focus:bg-primary-focus  disabled:opacity-50 disabled:pointer-events-none" >
              Clear text
            </button>

            <div className="mt-10 bg-white w-full h-full p-6 rounded ">
              <p className={`text-red-500 ${applyedCss}`}>{text}</p>
              <p>{text.length}</p>
            </div>

            <button onClick={setBold} className="cursor-pointer  border-2 border-black w-fit px-4 py-2 mt-2 rounded bg-blue-600 text-white">Bold</button>
            <button onClick={setItalic} className="cursor-pointer border-2 border-black w-fit px-4 py-2 mt-2 rounded bg-green-600 text-white">Italic</button>
            <button onClick={setUnderline} className="cursor-pointer border-2 border-black w-fit px-4 py-2 mt-2 rounded bg-yellow-600 text-white">Underline</button>
            <button onClick={handleCapitalize} className="cursor-pointer border-2 border-black w-fit px-4 py-2 mt-2 rounded bg-purple-600 text-white">Capitalize</button>
          
          </div>
        </div>
      </div>
      </div>

    </>
  )
}

export default Converter