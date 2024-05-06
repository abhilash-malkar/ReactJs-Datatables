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

    // data pattern
    // {
    //     "data": [
    //       {
    //         "firstName": "Airi",
    //         "lastName": "Satou",
    //         "role": "Accountant",
    //         "address": "Tokyo",
    //         "salary": "$162,700"
    //       },
    //       {
    //         "firstName": "Angelica",
    //         "lastName": "Ramos",
    //         "role": "Chief Executive Officer (CEO)",
    //         "address": "London",
    //         "salary": "$1,200,000"
    //       },
    //       {
    //         "firstName": "Ashton",
    //         "lastName": "Cox",
    //         "role": "Junior Technical Author",
    //         "address": "San Francisco",
    //         "salary": "$86,000"
    //       },
    //       {
    //         "firstName": "Bradley",
    //         "lastName": "Greer",
    //         "role": "Software Engineer",
    //         "address": "London",
    //         "salary": "$132,000"
    //       },
    //       {
    //         "firstName": "Brenden",
    //         "lastName": "Wagner",
    //         "role": "Software Engineer",
    //         "address": "San Francisco",
    //         "salary": "$206,850"
    //       },
    //       {
    //         "firstName": "Brielle",
    //         "lastName": "Williamson",
    //         "role": "Integration Specialist",
    //         "address": "New York",
    //         "salary": "$372,000"
    //       },
    //       {
    //         "firstName": "Bruno",
    //         "lastName": "Nash",
    //         "role": "Software Engineer",
    //         "address": "London",
    //         "salary": "$163,500"
    //       },
    //       {
    //         "firstName": "Caesar",
    //         "lastName": "Vance",
    //         "role": "Pre-Sales Support",
    //         "address": "New York",
    //         "salary": "$106,450"
    //       },
    //       {
    //         "firstName": "Cara",
    //         "lastName": "Stevens",
    //         "role": "Sales Assistant",
    //         "address": "New York",
    //         "salary": "$145,600"
    //       },
    //       {
    //         "firstName": "Cedric",
    //         "lastName": "Kelly",
    //         "role": "Senior Javascript Developer",
    //         "address": "Edinburgh",
    //         "salary": "$433,060"
    //       }
    //     ]
    //   }

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
