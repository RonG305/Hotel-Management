import { FiDelete, FiEdit, FiEye, FiSettings } from 'react-icons/fi'
import {RiDeleteBin6Line} from 'react-icons/ri'

const Booking = () => {
  return (
      <div className=" overflow-x-auto">
      <div className=' border rounded-md mx-3 my-5 py-5 px-3 flex justify-between'>
            <div>
              <h2 className=' font-bold text-2xl'>Booking List</h2>
              <p>You have 203 rooms booked</p>
            </div>
            
              <FiSettings size={25} />
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 border rounded-md ">
              
              <thead className=" uppercase">
                  <tr>
                  <th className=' px-6 py-4'>ID</th>    
                  <th className=" px-6 py-4">Customer</th>
                  <th className=" px-6 py-4">Booking</th>
                  <th className=" px-6 py-4">Room Type</th>
                  <th className=" px-6 py-4">Mobile</th>
                  <th className=" px-6 py-4">Arive</th>
                  <th className=" px-6 py-4">Depart</th>
                  <th className=" px-6 py-4">Payment</th>
                  <th className=' px-6 py-4'>status</th>   
                  <th>Actions</th>
              </tr>
              </thead>

              <tbody>
                  <tr>
                    <td className=" px-6 py-4">A3664D</td>
                      <td className=" px-6 py-4">Ronald Mutia</td>
                      <td className=' px-6 py-4 text-green-400'>Active</td>
                      <td className='px-6 py-4'>Single</td>
                      <td className=" px-6 py-4">0790021016</td>
                      <td className=" px-6 py-4">A3 2020</td>
                      <td className=" px-6 py-4">17 May 2021</td>
                      <td className=" px-6 py-4 text-green-400">paid</td>
                      <th className=" px-6 py-4 "><span className=" bg-green-400 px-3 py-1 rounded-2xl text-white font-light">inside</span> </th>
                      <td className=" px-6 py-4">
                      <tr>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                  </tr>

                  <tr>
                    <td className=" px-6 py-4">A3664D</td>
                      <td className=" px-6 py-4">Ronald Mutia</td>
                      <td className=' px-6 py-4 text-green-400'>Active</td>
                      <td className='px-6 py-4'>Single</td>
                      <td className=" px-6 py-4">0790021016</td>
                      <td className=" px-6 py-4">A3 2020</td>
                      <td className=" px-6 py-4">17 May 2021</td>
                      <td className=" px-6 py-4 text-orange-400">Due</td>
                      <th className=" px-6 py-4 "><span className=" bg-green-400 px-3 py-1 rounded-2xl text-white font-light">inside</span> </th>
                      <td className=" px-6 py-4">
                      <tr>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                  </tr>
                  <tr>
                    <td className=" px-6 py-4">A3664D</td>
                      <td className=" px-6 py-4">Ronald Mutia</td>
                      <td className=' px-6 py-4 text-green-400'>Active</td>
                      <td className='px-6 py-4'>Single</td>
                      <td className=" px-6 py-4">0790021016</td>
                      <td className=" px-6 py-4">A3 2020</td>
                      <td className=" px-6 py-4">17 May 2021</td>
                      <td className=" px-6 py-4 text-green-400">paid</td>
                      <th className=" px-6 py-4 "><span className=" bg-green-400 px-3 py-1 rounded-2xl text-white font-light">inside</span> </th>
                      <td className=" px-6 py-4">
                      <tr>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                  </tr>

                  <tr>
                    <td className=" px-6 py-4">A3664D</td>
                      <td className=" px-6 py-4">Ronald Mutia</td>
                      <td className=" px-6 py-4 text-orange-400">pending</td>
                      <td className='px-6 py-4'>Single</td>
                      <td className=" px-6 py-4">0790021016</td>
                      <td className=" px-6 py-4">A3 2020</td>
                      <td className=" px-6 py-4">17 May 2021</td>
                      <td className=" px-6 py-4 text-green-400">paid</td>
                      <th className=" px-6 py-4 "><span className=" bg-green-400 px-3 py-1 rounded-2xl text-white font-light">inside</span> </th>
                      <td className=" px-6 py-4">
                      <tr>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                  </tr>

                  <tr>
                    <td className=" px-6 py-4">A3664D</td>
                      <td className=" px-6 py-4">Ronald Mutia</td>
                      <td className=' px-6 py-4 text-green-400'>Active</td>
                      <td className='px-6 py-4'>Single</td>
                      <td className=" px-6 py-4">0790021016</td>
                      <td className=" px-6 py-4">A3 2020</td>
                      <td className=" px-6 py-4">17 May 2021</td>
                      <td className=" px-6 py-4 text-green-400">paid</td>
                      <th className=" px-6 py-4 "><span className=" bg-green-400 px-3 py-1 rounded-2xl text-white font-light">inside</span> </th>
                      <td className=" px-6 py-4">
                      <tr>
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

export default Booking
