import React from 'react'

const CustomersGraph = () => {
  return (
      <div>       
            <div className="w-full max-w-sm p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-6">
            <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center">
                <div className="flex items-center justify-center w-12 h-12 mr-3 bg-gray-100 rounded-lg dark:bg-gray-700">
                    <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 19">
                    <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z"/>
                    <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z"/>
                    </svg>
                </div>
                <div>
                    <h5 className="pb-1 text-2xl font-bold leading-none text-gray-900 dark:text-white">3.4k</h5>
                    <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Leads generated per week</p>
                </div>
                </div>
                <div>
                <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                    <svg className="w-2.5 h-2.5 mr-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
                    </svg>
                    42.5%
                </span>
                </div>
            </div>

            <div className="grid grid-cols-2">
                <dl className="flex items-center">
                    <dt className="mr-1 text-sm font-normal text-gray-500 dark:text-gray-400">Money spent:</dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white">$3,232</dd>
                </dl>
                <dl className="flex items-center justify-end">
                    <dt className="mr-1 text-sm font-normal text-gray-500 dark:text-gray-400">Conversion rate:</dt>
                    <dd className="text-sm font-semibold text-gray-900 dark:text-white">1.2%</dd>
                </dl>
            </div>

            <div id="column-chart"></div>
                <div className="grid items-center justify-between grid-cols-1 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between pt-5">
                    <!-- Button -->
                    <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="lastDaysdropdown"
                    data-dropdown-placement="bottom"
                    className="inline-flex items-center text-sm font-medium text-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    type="button">
                    Last 7 days
                    <svg className="w-2.5 m-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                    </button>
                    <!-- Dropdown menu -->
                    <div id="lastDaysdropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Yesterday</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Today</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 7 days</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 30 days</a>
                        </li>
                        <li>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Last 90 days</a>
                        </li>
                        </ul>
                    </div>
                    <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-semibold text-blue-600 uppercase rounded-lg hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">
                    Leads Report
                    <svg className="w-2.5 h-2.5 ml-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                    </svg>
                    </a>
                </div>
                </div>
            </div>

            

    </div>
  )
}

<script>
           
           window.addEventListener("load", function() {
               const options = {
                   colors: ["#1A56DB", "#FDBA8C"],
                   series: [
                       {
                       name: "Organic",
                       color: "#1A56DB",
                       data: [
                           { x: "Mon", y: 231 },
                           { x: "Tue", y: 122 },
                           { x: "Wed", y: 63 },
                           { x: "Thu", y: 421 },
                           { x: "Fri", y: 122 },
                           { x: "Sat", y: 323 },
                           { x: "Sun", y: 111 },
                       ],
                       },
                       {
                       name: "Social media",
                       color: "#FDBA8C",
                       data: [
                           { x: "Mon", y: 232 },
                           { x: "Tue", y: 113 },
                           { x: "Wed", y: 341 },
                           { x: "Thu", y: 224 },
                           { x: "Fri", y: 522 },
                           { x: "Sat", y: 411 },
                           { x: "Sun", y: 243 },
                       ],
                       },
                   ],
                   chart: {
                       type: "bar",
                       height: "320px",
                       fontFamily: "Inter, sans-serif",
                       toolbar: {
                       show: false,
                       },
                   },
                   plotOptions: {
                       bar: {
                       horizontal: false,
                       columnWidth: "70%",
                       borderRadiusApplication: "end",
                       borderRadius: 8,
                       },
                   },
                   tooltip: {
                       shared: true,
                       intersect: false,
                       style: {
                       fontFamily: "Inter, sans-serif",
                       },
                   },
                   states: {
                       hover: {
                       filter: {
                           type: "darken",
                           value: 1,
                       },
                       },
                   },
                   stroke: {
                       show: true,
                       width: 0,
                       colors: ["transparent"],
                   },
                   grid: {
                       show: false,
                       strokeDashArray: 4,
                       padding: {
                       left: 2,
                       right: 2,
                       top: -14
                       },
                   },
                   dataLabels: {
                       enabled: false,
                   },
                   legend: {
                       show: false,
                   },
                   xaxis: {
                       floating: false,
                       labels: {
                       show: true,
                       style: {
                           fontFamily: "Inter, sans-serif",
                           cssClass: 'text-xs font-normal fill-gray-500 dark:fill-gray-400'
                       }
                       },
                       axisBorder: {
                       show: false,
                       },
                       axisTicks: {
                       show: false,
                       },
                   },
                   yaxis: {
                       show: false,
                   },
                   fill: {
                       opacity: 1,
                   },
                   }

                   if(document.getElementById("column-chart") && typeof ApexCharts !== 'undefined') {
                   const chart = new ApexCharts(document.getElementById("column-chart"), options);
                   chart.render();
                   }
           });
           </script>

export default CustomersGraph
