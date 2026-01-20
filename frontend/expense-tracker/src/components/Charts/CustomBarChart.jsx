import React from 'react'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Cell
} from 'recharts';

const CustomBarChart = ({ data }) => {

    // Function to determine bar color based on index
    const getBarColor = (index) => {
        return index % 2 === 0 ? "#875cf5" : "#cfbefb";
    }

    // Check if data is valid and non-empty
    const isValidData = Array.isArray(data) && data.length > 0 && data.every(
        item => typeof item.month !== 'undefined' && typeof item.amount === 'number'
    );

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="bg-white p-2 border border-gray-300 rounded-lg shadow-md">
                    <p className="text-xs text-purple-800 mb-1 font-semibold">{payload[0].payload.category}</p>
                    <p className="text-sm text-gray-600">Amount: <span className='text-sm font-medium text-gray-900'>₹ {payload[0].value}</span></p>
                </div>
            );
        }
        return null;
    };    


    return (
        <div className='bg-white mt-6'>
            {isValidData ? (
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <CartesianGrid stroke='none' />
                        <XAxis dataKey="month" tick={{ fontSize: 12, fill: "#555" }} stroke='none' />
                        <YAxis tick={{ fontSize: 12, fill: "#555" }} stroke='none' />
                        <Tooltip content={CustomTooltip} />
                        <Bar dataKey="amount" radius={[10, 10, 0, 0]}>
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={getBarColor(index)} />
                            ))}
                        </Bar>
                    </BarChart>
                </ResponsiveContainer>
            ) : (
                <div className="text-center text-gray-500 py-10">No data available to display the chart.</div>
            )}
        </div>
    )
}

export default CustomBarChart