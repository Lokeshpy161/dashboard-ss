import React, { useState } from 'react';

const PAYSAGE = () => {
  const [Epaisseurmodule, setEpaisseurmodule] = useState(0);
  const [percentage, setPercentage] = useState(0);



  return (
    <div className="container mx-auto mt-8">

      <br />
      <h1 className='text-4xl font-extrabold text-center text-black'>RS-R - PORTRAIT</h1>
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
                  min="0"
                  max="100"
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
                  max="100"
                  step="1"
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
          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Rail RS-R</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Rail Opti'Roof</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Rail Opti'Roof Sunshine</td>
            <td className="py-2 px-4 border-r border-blue-300">100</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Centrale ST02+Terragrif 30-50 universelle Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Centrale ST02 30-34 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Centrale ST02 35-39 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Centrale ST02 40-44 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Centrale ST02 45-49 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Centrale ST02 50 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Centrale 30-31 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Centrale 32-36 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Centrale 37-41 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Centrale 42-46 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Centrale 47-50 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Latérale 30-31 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Latérale 32-33 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Latérale 34-35 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Latérale 36-37 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Latérale 38-39 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Latérale 40-41 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Latérale 42-44 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Latérale 45-49 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Kit Bride Latérale 50 Jorisolar</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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

          {/* --------------------------------------------- */}

          <tr className="hover:bg-blue-100">
            <td className="py-2 px-4 border-r border-blue-300">Clip de mise à la terre Rayvolt</td>
            <td className="py-2 px-4 border-r border-blue-300">1</td>

            <td className="py-2 px-4 border-r border-blue-300">1</td>
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
        </tbody>
      </table>
      <br/><br/><br/><br/><br/><br/><br/><br/>
    </div>
  );
}

export default PAYSAGE;
