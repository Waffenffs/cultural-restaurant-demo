import {AiOutlineDown} from 'react-icons/ai'

function Dropdown(props: any) {
    
    interface Food {
        name: string
        introduction: string
        preparation: string
    }

    const cuisineName = props.cuisine_name;
    const cuisineInfo = props.cuisine;
    const activeMenu = props.active;

    const dropdownItems = cuisineInfo.map((val: Food) => {
        return <li className='hover:bg-slate-300 hover:text-white hover:font-medium transition hover:cursor-pointer p-1 m-1 rounded'>{val.name}</li>
    })

    return (
        <article className="px-5">
            <h1 className="font-bold font-inter text-3xl">{cuisineName}</h1>
            <div>
                <button onClick={props.toggle} type="button" className="flex flex-row items-center justify-between mt-3 w-full text-left text-slate-600 bg-white rounded p-1 indent-3">
                    <p>Select</p>
                    <AiOutlineDown />
                </button>
                {activeMenu && 
                    <ul className='bg-white rounded absolute mt-2 w-56 text-slate-700 flex flex-col'>
                        {dropdownItems}
                    </ul>
                }
            </div>
        </article>
    )
}

export default Dropdown;