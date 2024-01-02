import React from 'react';

const Table = ({ data }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Vardas</th>
            <th className="darker">Parvardė</th>
            <th>Amžius</th>
          </tr>
        </thead>
        <tbody id="dataPlace">
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.firstName}</td>
              <td>{row.lastName}</td>
              <td>{row.age}</td>
            </tr>
          ))}
                <tr>
                <td>Jonas</td>
                <td>Rimkus</td>
                <td>54</td>
            </tr>
            <tr>
                <td>Vestina</td>
                <td>Petronytė</td>
                <td>31</td>
            </tr>
            <tr>
                <td>Marius</td>
                <td>Dulinskas</td>
                <td>23</td>
            </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;