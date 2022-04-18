import React from 'react'

const SubjectsTable = (props) => {
  const {table} = props;
  return (
    <table className="table">
        <thead>
            <tr>
                <th>ID</th>
                <th>Course ID</th>
                <th>Subject</th>
                <th>Marks</th>
            </tr>
        </thead>
        <tbody>
          {table.map( (item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.Id}</td>
              <td>{item.Name}</td>
              <td>{item.Marks}/100</td>
            </tr>
          ))}
        </tbody>
    </table>
  )
}

export default SubjectsTable