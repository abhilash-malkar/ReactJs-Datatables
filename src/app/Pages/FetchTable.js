import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import DataTable from 'datatables.net-bs5';

function FetchTable() {
    const [data, setData] = useState([]);
    let navigate = useNavigate();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost/playground/ReactJS_Datatables_API_Demo/list.php');
            setData(response.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        initializeDataTable();
    }, [data]);

    const initializeDataTable = () => {
        if ($.fn.DataTable.isDataTable('#myDataTable')) {
            $('#myDataTable').DataTable().destroy();
        }
        $('#myDataTable').DataTable({
            data: data,
            columns: [
                { data: 'firstName' },
                { data: 'lastName' },
                { data: 'role' },
                { data: 'address' },
                { data: 'salary' },
            ]
        });
    };

    return (
        <div className='container mt-3'>
            <button className='btn btn-danger btn-sm' onClick={() => navigate(-1)}>Back</button>
            <h1>Fetch Table</h1>
            <table id='myDataTable' className='table'>
                <thead>
                    <tr>
                        <th className='sorting'>First Name</th>
                        <th className='sorting'>Last Name</th>
                        <th className='sorting'>Role</th>
                        <th className='sorting'>Address</th>
                        <th className='sorting'>Salary</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </table>
        </div>
    );
}

export default FetchTable;
