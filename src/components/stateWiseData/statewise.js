import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './statewise.css'

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('/covids.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>

            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="mb-5 text-center"><span className="india"> India</span>  COVID 19 LIST</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>
                                    state
                                </th>
                                <th>
                                    Confirmed
                                </th>
                                <th>
                                    Recovered
                                </th>
                                <th>
                                    Deaths
                                </th>
                                <th>
                                    Active
                                </th>
                                <th>
                                    Updated
                                </th>
                            </tr>
                        </thead>
                        <tbody>

                            {
                                data.map((curElem, ind) => {
                                    return (
                                        <tr key={ind}>
                                            <th>
                                                {curElem.state}
                                            </th>
                                            <td>
                                                {curElem.confirmed}
                                            </td>
                                            <td>
                                                {curElem.recovered}
                                            </td>
                                            <td>
                                                {curElem.deaths}
                                            </td>
                                            <td>
                                                {curElem.active}
                                            </td>
                                            <td>
                                                {curElem.lastupdatedtime}
                                            </td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>

                </div>

            </div>
        </>
    )
}

export default Statewise
