import React from 'react'

const TableTemplate = () => {
  return (
    <div className='w-full'>
      <div>
  <table className="w-full bg-white shadow-md rounded-lg ">
    <thead className="bg-gray-800 text-white">
      <tr>
        <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Name</th>
        <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Email</th>
        <th className="py-3 px-6 text-left text-xs font-medium uppercase tracking-wider">Role</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      <tr className="hover:bg-gray-50">
        <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">John Doe</td>
        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">john@example.com</td>
        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">Admin</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">Jane Smith</td>
        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">jane@example.com</td>
        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">User</td>
      </tr>
      <tr className="hover:bg-gray-50">
        <td className="py-4 px-6 whitespace-nowrap text-sm font-medium text-gray-900">Peter Jones</td>
        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">peter@example.com</td>
        <td className="py-4 px-6 whitespace-nowrap text-sm text-gray-500">User</td>
      </tr>
    </tbody>
  </table>
</div>
    </div>
  )
}

export default TableTemplate
