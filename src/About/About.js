import React from 'react';
import './About.css'
import photo from '../../src/img/1.png';
import { Bar, BarChart, CartesianGrid, Legend, Tooltip, ResponsiveContainer, XAxis, YAxis } from 'recharts';
//import { Tooltip } from 'bootstrap';
const About = () => {
    const data = [
        {
            name: 'Bach A',
            uv: 4000,
            pv: 2400,
            amt: 2400,
        },
        {
            name: 'Bach B',
            uv: 3000,
            pv: 1398,
            amt: 2210,
        },
        {
            name: 'Bach C',
            uv: 2000,
            pv: 9800,
            amt: 2290,
        },
        {
            name: 'Bach D',
            uv: 2780,
            pv: 3908,
            amt: 2000,
        },
        {
            name: 'Bach E',
            uv: 1890,
            pv: 4800,
            amt: 2181,
        },
        {
            name: 'Bach F',
            uv: 2390,
            pv: 3800,
            amt: 2500,
        },
        {
            name: 'Bach G',
            uv: 3490,
            pv: 4300,
            amt: 2100,
        },
    ];
    return (
        <div>
            <div className="row ">

                <div className="col-md-6 p-3 ">
                    <h3>ABOUT US</h3>
                    <p>Fable daycare, preschool, and kindergarten</p>
                    <p>Come with us, we also teach children about the basic values of human beings as honesty, kindness, generosity, courage, freedom, equality and respect. Learn to celebrate diversity in a spirit of understanding and tolerance and develop a positive regard and awareness of other people. They are taught the values and responsibilities needed to become active members of the community...</p>

                    <ResponsiveContainer width="100%" height="60%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 20,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
                            <Bar dataKey="uv" stackId="a" fill="#82ca9d" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-md-6">
                    <img src={photo} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;