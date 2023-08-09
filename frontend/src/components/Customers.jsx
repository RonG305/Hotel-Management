import { FiSettings, FiEdit, FiEye, FiPlus } from 'react-icons/fi'
import {RiDeleteBin6Line} from 'react-icons/ri'


const Customers = () => {
  return (
      <div className="overflow-x-auto ">
              <div className='flex justify-between px-3 py-5 mx-3 my-5 border rounded-md '>
                  <div>
                  <h2 className='text-2xl font-bold '>Customer List</h2>
                  <p>You have 368 customers</p>
                  </div>
              <div className="flex items-center justify-center w-10 h-10 text-white bg-blue-500 rounded ">
                  <FiPlus size={25}  />
             </div>
             
          </div>
          <table className="w-full mt-5 text-sm text-left text-gray-500 border rounded-md dark:text-gray-600">
              <thead className="uppercase bg-blue-100 ">
              <tr className='border '>
                  <th className="px-6 py-6 ">Name</th>
                  <th className="px-6 py-6 ">Phone Number</th>
                  <th className="px-6 py-6 ">Room Number</th>
                  <th className="px-6 py-6 ">Check in </th>
                  <th className="px-6 py-6 ">Checkout</th>
                  <th className="px-6 py-6 ">status</th>
                  <th className="px-6 py-6 ">Actions</th>
              </tr>
              </thead>

              <tbody>
                  <tr className='border '>
                      <td className="px-6 py-6 ">Ronald Mutia</td>
                      <td className="px-6 py-6 ">0790021016</td>
                      <td className="px-6 py-6 ">A3 2020</td>
                      <td className="px-6 py-6 ">17 May 2021</td>
                      <td className="px-6 py-6 ">18 May 2021</td>
                      <th className="px-6 py-6 "><span className="px-3 py-1 font-light text-white bg-green-600 rounded-2xl">inside</span> </th>
                      <td className="px-6 py-6 ">
                      <tr className='border '>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                  </tr>

                  <tr className='border '>
                      <td className="px-6 py-6 ">Ronald Mutia</td>
                      <td className="px-6 py-6 ">0790021016</td>
                      <td className="px-6 py-6 ">A3 2020</td>
                      <td className="px-6 py-6 ">17 May 2021</td>
                      <td className="px-6 py-6 ">18 May 2021</td>
                      <th className="px-6 py-6 "><span className="px-3 py-1 font-light text-white bg-red-600 rounded-2xl">checked</span></th>
                      <td className="px-6 py-6 ">
                      <tr className='border '>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                      
                  </tr>

                  <tr className='border '>
                      <td className="px-6 py-6 ">Ronald Mutia</td>
                      <td className="px-6 py-6 ">0790021016</td>
                      <td className="px-6 py-6 ">A3 2020</td>
                      <td className="px-6 py-6 ">17 May 2021</td>
                      <td className="px-6 py-6 ">18 May 2021</td>
                      <th className="px-6 py-6 "><span className="px-3 py-1 font-light text-white bg-green-600 rounded-2xl">inside</span> </th>
                      <td className="px-6 py-6 ">
                          <tr className='border '>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                  </tr>

              </tbody>
              

          </table>
    </div>

  )
}

export default Customers
