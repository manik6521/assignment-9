import React from 'react';
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import "./Dashboard.css"
const Dashboard = () => {
    const data = [
        {
            month: "Mar",
            investment: 100000,
            sell: 241,
            revenue: 10401,
        },
        {
            month: "Apr",
            investment: 200000,
            sell: 423,
            revenue: 24500,
        },
        {
            month: "May",
            investment: 500000,
            sell: 726,
            revenue: 67010,
        },
        {
            month: "Jun",
            investment: 500000,
            sell: 529,
            revenue: 40405,
        },
        {
            month: "Jul",
            investment: 600000,
            sell: 601,
            revenue: 50900,
        },
        {
            month: "Aug",
            investment: 700000,
            sell: 670,
            revenue: 61000,
        },
    ];
    return (
        <div className='dashboard-container'>
            <div className="line-chart">
                <h2>Month Wise Sell</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart
                        width={400}
                        height={300}
                        data={data}
                        margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                    >
                        <Line type="monotone" dataKey="sell" stroke="#8884d8" />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                    </LineChart>
                </ResponsiveContainer>
            </div>
            <div className="area-chart">
                <h2>Investment Vs Revenue</h2>

                <ResponsiveContainer width="100%" height={300}>
                    <AreaChart
                        width={400}
                        height={300}
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Area
                            type="monotone"
                            dataKey="investment"
                            stackId="1"
                            stroke="#8884d8"
                            fill="#8884d8"
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stackId="1"
                            stroke="#82ca9d"
                            fill="#82ca9d"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;