let fs = require("fs");
const mkdirp = require("mkdirp");
const generateSideBar = async (data) => {
  console.log("GENERATING SIDEBAR...");
  await mkdirp("src/components/SideBar/");
  fs.writeFile(
    "src/components/SideBar/index.js",
    `
import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/images/logo.jpeg'
import {BsChevronDown} from 'react-icons/bs'

const SideBar = ({

}) => {
    const [showSubs, setShowSubs] = useState(null)
    const location = useLocation()
    let routes = [
        ${data?.parts?.map((part) => {
          return `
                {
                    name: '${part.name}',
                    icon: '',
                    subParts: [${part.subParts
                      ?.filter((itm) => itm.isInfo == false)
                      .map((subPart) => {
                        return `
                            {
                                url: '${subPart.url}',
                                name: '${subPart.name}'
                            }
                            `;
                      })}]
                },
                `;
        })}
    ]
    return (
        <div className="w-72 flex flex-col items-center m-2">
        <img src={logo} className="mt-10 mb-4 rounded-full shadow-lg" />
        {
                routes.map(item => (
                    <div className="flex flex-col w-full bg-mainColor p-2 rounded-xl shadow-lg my-2">
                    <div className="flex items-center justify-between cursor-pointer text-white" onClick={() => showSubs == item.name ? setShowSubs(null) : setShowSubs(item.name)}>
                    <p>{item.icon}</p>
                    <p>{item.name}</p>
                    <p className={showSubs == item.name ? 'rotate-180 mx-2' : 'mx-2'}><BsChevronDown /></p>
                    </div>
                    {
                        showSubs == item.name &&
                        item.subParts?.map(subItem => (
                            <Link to={subItem.url}
                                className={'w-full p-2 rounded-xl shadow-lg text-white my-1 ' + (location.pathname == subItem.url ? 'bg-black' : ' bg-secondaryColor')}
                            >
                            <p>{subItem.name}</p>
                            </Link>
                        ))
                    }
                    </div>
                ))
            }
        </div>
    )
}

export default SideBar
`,
    (err) => {
      if (err) throw err;
    }
  );
};
module.exports = generateSideBar;
