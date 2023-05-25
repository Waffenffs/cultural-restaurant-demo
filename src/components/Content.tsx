

function Content(props: any) {

  const currentCuisineInfo = {
    'cuisine_name': props.render?.name,
    'cuisine_url': props.render?.image_url,
    'cuisine_intro': props.render?.introduction,
    'cuisine_prep': props.render?.preparation
  }

  console.log(props.render)

  return (
    <>
      {props.render !== 'none' &&
      <div>
        <header className="flex items-center flex-col">
          <h1 className="font-inter text-3xl mt-8 font-bold mb-8 text-slate-900" style={{ fontSize: '50px' }}>{currentCuisineInfo?.cuisine_name}</h1>
          <div className="w-64">
            <img src={currentCuisineInfo?.cuisine_url} alt="food.png" className="object-cover" />
          </div>
        </header>
        <footer className="p-5 overflow-auto">
          <h3 className="font-bold font-inter text-3xl text-slate-900">Preparation</h3>
          <hr className="border-slate-900 mt-5 border-1 rounded" />
          <p className="max-w-4xl mt-5 font-inter">{currentCuisineInfo?.cuisine_intro}</p>
          <p className="max-w-4xl mt-5 font-inter">{currentCuisineInfo?.cuisine_prep}</p>
        </footer>
      </div>}
      {props.render === 'none' && 
      <div>
        Food not found
      </div>}
    </>
  )
}

export default Content;