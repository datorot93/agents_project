import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const BurndownChart = ({ data }) => {
    return (
        <div className="burndown-chart bg-gray-100 p-4 rounded shadow-md mt-8">
            <h2 className="text-xl font-semibold mb-4">Burndown Chart</h2>
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="workRemaining" stroke="#8884d8" />
                <Line type="monotone" dataKey="idealBurn" stroke="#82ca9d" />
            </LineChart>
        </div>
    );
};

export default BurndownChart;
