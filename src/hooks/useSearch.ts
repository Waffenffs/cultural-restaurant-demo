import {useState, useEffect} from 'react'
import { bisayaCuisine, maranaoCuisine, tagalogCuisine } from '../data/Cuisine';
import { Food } from '../data/Cuisine';

const useSearch = (food: string) => {
    const [data, setData] = useState<any | Food>(null);

    useEffect(() => {
        const combinedCuisines = [...bisayaCuisine, ...maranaoCuisine, ...tagalogCuisine]

        const result = combinedCuisines.filter((val: Food) => {
            const sortedFoodName = val.name.split('').join('').toLowerCase()
            const sortedSearch = food.split('').join('').toLowerCase()

            return sortedFoodName === sortedSearch;
        })

        setData(result);
    }, [food])

    return data;
}

export default useSearch;