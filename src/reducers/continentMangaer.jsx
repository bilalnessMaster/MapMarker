import { createSlice } from "@reduxjs/toolkit";


const ContinentManager = createSlice({
    name : 'continent manager' , 
    initialState : {
        continents : [
            {
                code: 1,
                name: 'Africa',
                SurfaceArea: 30.37,
                avatar: 'icon one',
                population: '1.4 billion',
                pays: [
                    {
                        name: 'Morocco',
                        population: 36,
                        capital: 'Rabat',
                        indepYear: 1956,
                        image: 'https://plus.unsplash.com/premium_photo-1673415819362-c2ca640bfafe?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                ]
            },
            {
                code: 2,
                name: 'Asia',
                SurfaceArea: 44.58,
                avatar: 'icon two',
                population: '4.7 billion',
                pays: [
                    {
                        name: 'Japan',
                        population: 126,
                        capital: 'Tokyo',
                        indepYear: null,
                        image: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                ]
            },
            {
                code: 3,
                name: 'Europe',
                SurfaceArea: 10.18,
                avatar: 'icon three',
                population: '746 million',
                pays: [
                    {
                        name: 'France',
                        population: 67,
                        capital: 'Paris',
                        indepYear: null,
                        image: 'https://images.unsplash.com/photo-1564849444446-2c2d819d13e6?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                ]
            },
            {
                code: 4,
                name: 'North America',
                SurfaceArea: 24.71,
                avatar: 'icon four',
                population: '579 million',
                pays: [
                    {
                        name: 'United States',
                        population: 331,
                        capital: 'Washington, D.C.',
                        indepYear: 1776,
                        image: 'https://images.unsplash.com/photo-1559767940-1f42eebe0c62?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                ]
            },
            {
                code: 5,
                name: 'South America',
                SurfaceArea: 17.84,
                avatar: 'icon five',
                population: '430 million',
                pays: [
                    {
                        name: 'Brazil',
                        population: 213,
                        capital: 'Brasília',
                        indepYear: 1822,
                        image: 'https://images.unsplash.com/photo-1573030905486-5a6221a7fa14?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                ]
            },
            {
                code: 6,
                name: 'Australia',
                SurfaceArea: 8.56,
                avatar: 'icon six',
                population: '43 million',
                pays: [
                    {
                        name: 'Australia',
                        population: 26,
                        capital: 'Canberra',
                        indepYear: 1901,
                        image: 'https://images.unsplash.com/photo-1495567720989-cebdbdd97913?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                ]
            },
            {
                code: 7,
                name: 'Antarctica',
                SurfaceArea: 14.0,
                avatar: 'icon seven',
                population: '1,000 (temporary)',
                pays: [
                    {
                        name: 'Research Stations',
                        population: 0.001,
                        capital: null,
                        indepYear: null,
                        image: 'https://images.unsplash.com/photo-1552233784-1a6c8b83d2ce?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    }
                ]
            }
        ],
        countries : [
            
        ]
        
    },
    reducers : {
        ajouter  : (state , action) => { 
            // const result =  state.continents.find(item => item.code == action.payload.continent)
            // result.pays.push({
            //     ...action.payload.form
            // })
            const result =  state.countries.push({
                    ...action.payload.form
            })
        }
    }
})
export const  {ajouter} = ContinentManager.actions
export default ContinentManager.reducer



