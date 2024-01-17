import React, { useState } from 'react';

const PAYSAGE = () => {
  const [Epaisseurmodule, setEpaisseurmodule] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const [qteValues, setQteValues] = useState(Array(10).fill(0)); // Assuming 10 rows, adjust as needed

  const handleQteChange = (index, value) => {
    const newQteValues = [...qteValues];
    newQteValues[index] = parseInt(value) || 0;
    setQteValues(newQteValues);
  };

  const ProductTable = [
    { name: 'Rail RS-R', condit: 1 },
    { name: "Rail Opti'Roof", condit: 1 },
    { name: "Rail Opti'Roof Sunshine", condit: 100 },
    { name: 'Kit Bride Centrale ST02+Terragrif 30-50 universelle Jorisolar', condit: 1 },
    { name: 'Kit Bride Centrale ST02 30-34 Jorisolar', condit: 1 },
    { name: 'Kit Bride Centrale ST02 35-39 Jorisolar', condit: 1 },
    { name: 'Kit Bride Centrale ST02 40-44 Jorisolar', condit: 1 },
    { name: 'Kit Bride Centrale ST02 45-49 Jorisolar', condit: 1 },
    { name: 'Kit Bride Centrale ST02 50 Jorisolar', condit: 1 },
    { name: 'Kit Bride Centrale 30-31 Jorisolar', condit: 1 },
    { name: 'Kit Bride Centrale 32-36 Jorisolar', condit: 1 },
    { name: 'Kit Bride Centrale 37-41 Jorisolar', condit: 1 },
    { name: 'Kit Bride Centrale 42-46 Jorisolar', condit: 1 },
    { name: 'Kit Bride Centrale 47-50 Jorisolar', condit: 1 },
    { name: 'Kit Bride Latérale 30-31 Jorisolar', condit: 1 },
    { name: 'Kit Bride Latérale 32-33 Jorisolar', condit: 1 },
    { name: 'Kit Bride Latérale 34-35 Jorisolar', condit: 1 },
    { name: 'Kit Bride Latérale 36-37 Jorisolar', condit: 1 },
    { name: 'Kit Bride Latérale 38-39 Jorisolar', condit: 1 },
    { name: 'Kit Bride Latérale 40-41 Jorisolar', condit: 1 },
    { name: 'Kit Bride Latérale 42-44 Jorisolar', condit: 1 },
    { name: 'Kit Bride Latérale 45-49 Jorisolar', condit: 1 },
    { name: 'Kit Bride Latérale 50 Jorisolar', condit: 1 },
    { name: 'Clip de mise à la terre Rayvolt', condit: 1 },
  ];
  



  return (
    <div className="container mx-auto mt-8">

      <br />
      <h1 className='text-4xl font-extrabold text-center text-black'>OPTI'ROOF - PAYSAGE</h1>
      <br />
      <br />

      <table className="min-w-full border-2  border-blue-300  rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-head text-white">
            <th className="py-3 px-4 border-b border-blue-300" colSpan="2">CHAMP N° 1</th>
          </tr>
          <tr className="bg-head text-white">
            <th className="py-2 px-4 border-r border-blue-300">PAYSAGE</th>
            <th className="py-2 px-4">QTE</th>
          </tr>
        </thead>
        <tbody>
          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">NB MODULES</td>
            <td className="py-2 px-4">
              <input
              type="input"
              className="block appearance-none w-full bg-white border border-blue-300 hover:border-gray-500 px-4 py-2 pr-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </td>
          </tr>
          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">RANGEES</td>
            <td className="py-2 px-4">
              <input
              type="input"
              className="block appearance-none w-full bg-white border border-blue-300 hover:border-gray-500 px-4 py-2 pr-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </td>
          </tr>
          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">COLONNES</td>
            <td className="py-2 px-4">
              <input
              type="input"
              className="block appearance-none w-full bg-white border border-blue-300 hover:border-gray-500 px-4 py-2 pr-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              />
            </td>
          </tr>
          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Epaisseur module</td>
            <td className="py-2 px-4">
              <div className="relative flex items-center">
                <input
                  type="number"
                  className="block appearance-none w-full bg-white border border-blue-300 hover:border-gray-500 px-4 py-2 pr-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={Epaisseurmodule}
                  onChange={(e) => setEpaisseurmodule(e.target.value)}
                  min="30"
                  max="60"
                  step="1"
                />
              </div>
            </td>
          </tr>
          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Bride centrale ST02</td>
            <td className="py-2 px-4">
              <select className="block appearance-none w-full bg-white border border-blue-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value="option1">OUI</option>
                <option value="option2">NON</option>
              </select>
            </td>
          </tr>
          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">BRIDES CENTRALES UNIVERSELLES (ST02+Terragrif)</td>
            <td className="py-2 px-4">
              <select className="block appearance-none w-full bg-white border border-blue-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value="option1">OUI</option>
                <option value="option2">NON</option>
              </select>
            </td>
          </tr>
          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">% PIECES SUPPLEMENTAIRES</td>
            <td className="py-2 px-4">
              <div className="relative flex items-center">
                <input
                  type="number"
                  className="block appearance-none w-full bg-white border border-blue-300 hover:border-gray-500 px-4 py-2 pr-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  value={percentage}
                  onChange={(e) => setPercentage(e.target.value)}
                  min="0"
                  max="10"
                  step="0.5"
                />
              </div>
            </td>
          </tr>
          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">OPTION SURELEVER (Sunshine)</td>
            <td className="py-2 px-4">
              <select className="block appearance-none w-full bg-white border border-blue-300 hover:border-gray-500 px-4 py-2 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value="option1">OUI</option>
                <option value="option2">NON</option>
              </select>
            </td>
          </tr>
        </tbody>
      </table>





      <br/><br/><br/><br/><br/><br/><br/><br/>
      
      
      
      
      
      
      
      
      <table className="min-w-full border-2  border-blue-300  rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-head text-white">
            <th className="py-2 px-4 border-r border-blue-300">Produit Intégration</th>
            <th className="py-2 px-4">Condit</th>
            <th className="py-2 px-4">F</th>
            <th className="py-2 px-4">QTE</th>
            <th className="py-2 px-4">G</th>
            <th className="py-2 px-4">H</th>            
          </tr>
        </thead>
        <tbody>
          {ProductTable.map((product, index) => (
            <tr className="hover:bg-blue-100" key={index}>
              <td className="py-2 px-4 border-r border-blue-300">{product.name}</td>
              <td className="py-2 px-4 border-r border-blue-300">{product.condit}</td>
              <td id={`fCell_${index}`} className="py-2 px-4 border-r border-blue-300">
                {qteValues[index]}
              </td>
              <td className="py-2 px-4 border-r border-blue-300">
                <input
                  type="input"
                  className="block appearance-none w-full bg-white border border-blue-300 hover:border-gray-500 px-4 py-2 pr-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  onChange={(e) => handleQteChange(index, e.target.value)}
                />
              </td>
              <td className="py-2 px-4 border-r border-blue-300">
                <input
                  type="input"
                  className="block appearance-none w-full bg-white border border-blue-300 hover:border-gray-500 px-4 py-2 pr-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </td>
              <td className="py-2 px-4 border-r border-blue-300">
                <input
                  type="input"
                  className="block appearance-none w-full bg-white border border-blue-300 hover:border-gray-500 px-4 py-2 pr-2 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
              </td>
            </tr>
          ))}
        </tbody>
        
      </table>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default PAYSAGE;
