import { AiFillGithub } from 'react-icons/ai'
import { useState } from 'react'
import useSearch from '../hooks/useSearch';

function SearchBar(props: any) {
    const [food, setFood] = useState<string>('');
    const res = useSearch(food)

    const handleKeyDown = (event: any) => {
        if(event.key === 'Enter') {
            if(res.length > 0){
                props.pass(res[0])
                setFood('')
            } else {
                props.pass('none')
            }
        }
    }

    return (
        <div className='mt-24 p-4'>
            <h5 className='font-bold text-slate-800 text-xl mb-1 ml-2'>Search</h5>
            <div className='flex flex-row gap-3 items-center mb-2'>
                <input type="text" onChange={(e) => setFood(e.target.value)} value={food} onKeyDown={handleKeyDown} placeholder="Food name here..." className="focus:outline-none font-inter indent-2 rounded-xl p-2" />
                <a className='max-[1224px]:hidden' href="https://github.com/Waffenffs/cultural-restaurant-demo" target='_blank'><AiFillGithub className="h-full w-9" /></a>
            </div>
            <span className='text-sm text-slate-800'>Look for the food you want to get the recipe of!</span>
        </div>
    )
}

export default SearchBar;