import React, { useState } from 'react'
import { data } from '../data/data.js'

const Food = () => {

    const [foods, setFoods] = useState(data);

    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };

    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };

    return (
        <div className='max-w-[1640px] mx-auto px-4 p-y-12'>
            <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>

            <div className='flex flex-col lg:flex-row justify-between'>

                <div>
                    <p className='font-bold text-gray-700'>Filter Type</p>

                    <div className='flex justify-between flex-wrap max-w-[440px] w-full'>
                        <button onClick={() => setFoods(data)} className='border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 ease-in-out'>All</button>
                        <button onClick={() => filterType('burger')} className='border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 ease-in-out'>Burgers</button>
                        <button onClick={() => filterType('pizza')} className='border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 ease-in-out'>Pizza</button>
                        <button onClick={() => filterType('salad')} className='border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 ease-in-out'>Salads</button>
                        <button onClick={() => filterType('chicken')} className='border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 ease-in-out'>Chicken</button>
                    </div>
                </div>
            </div>

            <div>

                <div>
                    <p className='font-bold text-gray-700'>Filter Price</p>

                    <div className='flex justify-between max-w-[390px] w-full'>
                        <button onClick={() => setFoods(data)} className='border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 ease-in-out'>All</button>
                        <button onClick={() => filterPrice('$')} className='border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 ease-in-out'>$</button>
                        <button onClick={() => filterPrice('$$')} className='border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 ease-in-out'>$$</button>
                        <button onClick={() => filterPrice('$$$')} className='border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 ease-in-out'>$$$</button>
                        <button onClick={() => filterPrice('$$$$')} className='border-orange-600 bg-white text-orange-600 hover:bg-orange-600 hover:text-white transition-all duration-150 ease-in-out'>$$$$</button>
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
                {foods.map((item, index) => (
                    <div key={index} className='border shadow-lg hover:scale-105 transition-all duration-300 ease-in-out rounded-lg'>
                        <img src={item.image} alt={item.name} className='w-full h-[200px] object-cover rounded-t-lg' />
                        <div className='flex justify-between px-2 py-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p>
                                <span className='bg-orange-500 text-white px-3 py-1 rounded-full'>{item.price}</span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Food
