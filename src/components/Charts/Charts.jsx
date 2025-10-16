import React from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Charts = ({ getItem }) => {

    const totalByCategory = {};

    getItem.forEach(product => {
        const category = product.category;
        totalByCategory[category] =
            (totalByCategory[category]) || 0 + product.price;
    })

    const chartData = Object.keys(totalByCategory).map(category => ({
        category,
        total: totalByCategory[category]
    }))

    return (
        <div className='mt-40'>
            <h4 className='my-10 text-center text-2xl font-bold'>WIsh List Summary</h4>
            <div className='bg-base-100 border border-xl p-4 h-80 rounded-2xl'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={chartData}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="category" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="total" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Charts;