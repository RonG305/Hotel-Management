import { FiEdit, FiEye, FiSettings } from 'react-icons/fi'
import {RiDeleteBin6Line} from 'react-icons/ri'


const Room = () => {
  return (
      <div>
          <div className=" overflow-x-auto">
          <div className=' border rounded-md mx-3 my-5 py-5 px-3 flex justify-between'>
              <h2 className=' font-bold text-2xl'>Room List</h2>
              <FiSettings size={25} />
          </div>
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 border rounded-md ">
              
              <thead className=" uppercase">
                  <tr>
                  <th className=' px-6 py-4'>Room Number</th>    
                  <th className=" px-6 py-4">Room Type</th>
                  <th className=" px-6 py-4">Account Number</th>
                  <th className=" px-6 py-4">Meal</th>
                  <th className=" px-6 py-4">Bed Capacity</th>
                  <th className=" px-6 py-4">Rent</th>
                  <th className=" px-6 py-4">Status</th>
                  <th className=' px-6 py-4'>action</th>
                
              </tr>
              </thead>

              <tbody>
                  <tr className=' hover:border ease-in duration-300'>
                    <td className=" px-6 py-4">20</td>
                      <td className=" px-6 py-4">Single</td>
                      <td className=' px-6 py-4 text-green-400'>ACC</td>
                      <td className='px-6 py-4'>Breakfast</td>
                      <td className=" px-6 py-4">3</td>
                      <td className=" px-6 py-4">35.25 USD</td>
                      <td className=" px-6 py-4">paid</td>
                     
                      <td className=" px-6 py-4">
                      <tr>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                  </tr>

                  <tr>
                    <td className=" px-6 py-4">20</td>
                      <td className=" px-6 py-4">Single</td>
                      <td className=' px-6 py-4 text-green-400'>ACC</td>
                      <td className='px-6 py-4'>Breakfast</td>
                      <td className=" px-6 py-4">3</td>
                      <td className=" px-6 py-4">35.25 USD</td>
                      <td className=" px-6 py-4">paid</td>
                     
                      <td className=" px-6 py-4">
                      <tr>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                      </tr>
                      

                  <tr>
                    <td className=" px-6 py-4">20</td>
                      <td className=" px-6 py-4">Single</td>
                      <td className=' px-6 py-4 text-green-400'>ACC</td>
                      <td className='px-6 py-4'>Breakfast</td>
                      <td className=" px-6 py-4">3</td>
                      <td className=" px-6 py-4">35.25 USD</td>
                      <td className=" px-6 py-4">paid</td>
                     
                      <td className=" px-6 py-4">
                      <tr>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                  </tr>

                  <tr>
                    <td className=" px-6 py-4">20</td>
                      <td className=" px-6 py-4">Single</td>
                      <td className=' px-6 py-4 text-green-400'>ACC</td>
                      <td className='px-6 py-4'>Breakfast</td>
                      <td className=" px-6 py-4">3</td>
                      <td className=" px-6 py-4">35.25 USD</td>
                      <td className=" px-6 py-4">paid</td>
                     
                      <td className=" px-6 py-4">
                      <tr>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                  </tr>

                  <tr>
                    <td className=" px-6 py-4">20</td>
                      <td className=" px-6 py-4">Single</td>
                      <td className=' px-6 py-4 text-green-400'>ACC</td>
                      <td className='px-6 py-4'>Breakfast</td>
                      <td className=" px-6 py-4">3</td>
                      <td className=" px-6 py-4">35.25 USD</td>
                      <td className=" px-6 py-4">paid</td>
                     
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
     </div>
  )
}

export default Room
