import React from 'react';
import Table from "../../shared/table/table";
import tableData from "../../../data/DashboardData.json"
import { Columns } from "../../../constants/adminPage/dashboardScreen/dashboardColumn";

function Dashboard() {
    return (
        <div className='col-12 col-md-10'>Dashboard
            <Table tableData={tableData} Columns={Columns} />
        </div>
    )
}

export default Dashboard