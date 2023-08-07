import { FiDelete, FiEdit, FiEye } from 'react-icons/fi'
import {RiDeleteBin6Line} from 'react-icons/ri'


const Customers = () => {
  return (
      <div className=" overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 mt-5 ">
              <thead className=" uppercase">
              <tr>
                  <th className=" px-6 py-4">Name</th>
                  <th className=" px-6 py-4">Phone Number</th>
                  <th className=" px-6 py-4">Room Number</th>
                  <th className=" px-6 py-4">Check in </th>
                  <th className=" px-6 py-4">Checkout</th>
                  <th className=" px-6 py-4">status</th>
                  <th className=" px-6 py-4">Actions</th>
              </tr>
              </thead>

              <tbody>
                  <tr>
                      <td className=" px-6 py-4">Ronald Mutia</td>
                      <td className=" px-6 py-4">0790021016</td>
                      <td className=" px-6 py-4">A3 2020</td>
                      <td className=" px-6 py-4">17 May 2021</td>
                      <td className=" px-6 py-4">18 May 2021</td>
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
                      <td className=" px-6 py-4">Ronald Mutia</td>
                      <td className=" px-6 py-4">0790021016</td>
                      <td className=" px-6 py-4">A3 2020</td>
                      <td className=" px-6 py-4">17 May 2021</td>
                      <td className=" px-6 py-4">18 May 2021</td>
                      <th className=" px-6 py-4"><span className=" bg-red-600 px-3 py-1 rounded-2xl text-white font-light">checked</span></th>
                      <td className=" px-6 py-4">
                      <tr>
                              <td className='px-2'>< FiEdit size={18}/></td>
                              <td className='px-2'>< FiEye size={18}/></td>
                              <td className='px-2'><RiDeleteBin6Line size={18}/></td>
                          </tr>
                      </td>
                      
                  </tr>

                  <tr>
                      <td className=" px-6 py-4">Ronald Mutia</td>
                      <td className=" px-6 py-4">0790021016</td>
                      <td className=" px-6 py-4">A3 2020</td>
                      <td className=" px-6 py-4">17 May 2021</td>
                      <td className=" px-6 py-4">18 May 2021</td>
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

export default Customers
