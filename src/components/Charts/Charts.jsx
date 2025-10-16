import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = ({ getItem }) => {
    console.log(getItem)
    return (
        <div>
            <h4 className='my-10 text-center text-2xl font-bold'>WIsh List Summary</h4>
            <div className='bg-base-100 border border-xl p-4 h-80 rounded-2xl'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={getItem}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="price" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Charts;