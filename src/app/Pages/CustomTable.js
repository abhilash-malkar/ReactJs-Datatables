import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import DataTable from 'datatables.net-bs5';
import 'datatables.net-buttons-bs5';
import 'jszip';
import 'pdfmake';
import 'datatables.net-buttons-bs5/css/buttons.bootstrap5.min.css';
import 'datatables.net-buttons/js/buttons.html5.min.js';
import 'datatables.net-buttons/js/buttons.print.min.js';
import pdfFonts from "pdfmake/build/vfs_fonts";

function CustomTable() {
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
            "bStateSave": true,
            data: data,
            columns: [
                { data: 'firstName' },
                { data: 'lastName' },
                { data: 'role' },
                { data: 'address' },
                { data: 'salary' },
            ],
            dom: 'Bfrtip',
            buttons: [ 
                'copy', 'csv', 
                {
                    extend: 'print',
                    customize: function(win) {
                      $(win.document.body).prepend('<h1>Custom Table</h1>');
                    }
                }
              ]
        });
    };

    return (
        <div className='container mt-3'>
            <button className='btn btn-danger btn-sm' onClick={() => navigate(-1)}>Back</button>
            <h1>Custom Table</h1>
            <div className="mb-3">
                {/* <button className="btn btn-primary me-2" onClick={() => $('#myDataTable').DataTable().buttons().csv()}>Download CSV</button>
                <button className="btn btn-primary" onClick={() => $('#myDataTable').DataTable().buttons().pdfHtml5()}>Download PDF</button> */}
                {/* Add your custom button here */}
            </div>
            <table id='myDataTable' className='display' style={{width:'100%'}}>
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
    )
}

export default CustomTable;


// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import $ from 'jquery';
// import DataTable from 'datatables.net-bs5';

// function CustomTable() {
//     const [data, setData] = useState([]);
//     let navigate = useNavigate();

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         try {
//             const response = await axios.get('http://localhost/playground/ReactJS_Datatables_API_Demo/list.php');
//             setData(response.data.data);
//         } catch (error) {
//             console.error('Error fetching data:', error);
//         }
//     };

//     useEffect(() => {
//         initializeDataTable();
//     }, [data]);


//     const initializeDataTable = () => {
//         if ($.fn.DataTable.isDataTable('#myDataTable')) {
//             $('#myDataTable').DataTable().destroy();
//         }
//         $('#myDataTable').DataTable({
//             "bStateSave":true,
//             data: data,
//             columns: [
//                 { data: 'firstName' },
//                 { data: 'lastName' },
//                 { data: 'role' },
//                 { data: 'address' },
//                 { data: 'salary' },
//             ],                    
            

//         });
//     };

//     return (
//         <div className='container mt-3'>
//             <button className='btn btn-danger btn-sm' onClick={() => navigate(-1)}>Back</button>
//             <h1>Custom Table</h1>
//             <table id='myDataTable' className='table'>
//                 <thead>
//                     <tr>
//                         <th className='sorting'>First Name</th>
//                         <th className='sorting'>Last Name</th>
//                         <th className='sorting'>Role</th>
//                         <th className='sorting'>Address</th>
//                         <th className='sorting'>Salary</th>
//                     </tr>
//                 </thead>
//                 <tbody></tbody>
//             </table>
//         </div>
//     )
// }

// export default CustomTable
