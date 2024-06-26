// import React, { useState } from "react";
// import { PageHeader } from "../../components/page-header";
// import { BsCodeSlash } from "react-icons/bs";
// import "./styles.scss";
// import Ip1 from '../../images/ip1.png'
// import Space1 from '../../images/space1.png'
// import Weather1 from '../../images/weather1.png'
// import Bank1 from '../../images/bank1.png'
// import Portfolio1 from '../../images/portfolio1.png'
// const projectdata = [
//     {
//         id: 2,
//         name: "Weather App",
//         image: Weather1,
//         repository: "https://github.com/niladrisekhar8712/WeatherApp",
//         link: "https://weatherapp-uo26.onrender.com/",
//         Description: "The Weather Application is a server-side application built using Node.js and Express.js framework. It fetches weather data for a specified city from external weather APIs and displays it to the user. This documentation provides an overview of the server-side code structure and functionality."
//     },
//     {
//         id: 2,
//         name: "Portfolio Website",
//         image: Portfolio1,
//         repository: "https://github.com/Niladri-Sekhar-Mondal/niladri-sekhar-mondal-portfolio",
//         link: "#",
//         Description: "The Portfolio is a client-side application built using React.js framework. It displays my personal information, skills, and projects. This documentation provides an overview of the client-side code structure and functionality."
//     },
//     {
//         id: 2,
//         name: "IP Address Tracker",
//         image: Ip1,
//         repository: "https://github.com/niladrisekhar8712/ip-address-tracker",
//         link: "https://niladrisekhar8712.github.io/ip-address-tracker/",
//         Description: "IP Address Tracker is a web application that allows users to track the geolocation of any IP address or domain. It provides detailed information about the IP address's location, including city, country, timezone, and ISP. Additionally, it displays the location on an interactive map."
//     },
//     {
//         id: 2,
//         name: "Space Tourism Website",
//         image: Space1,
//         repository: "https://github.com/niladrisekhar8712/Space-Tourism",
//         link: "https://niladrisekhar8712.github.io/Space-Tourism/",
//         Description: "..."
//     },
//     {
//         id: 3,
//         name: "Bank Management System",
//         image: Bank1,
//         repository: "https://github.com/niladrisekhar8712/Desktop-App-Dev-Projects/tree/main/BankManagementSystem",
//         Description: "..."
//     }
// ];
// const filterData = [
//     {
//         filterId: 1,
//         label: "All"
//     },
//     {
//         filterId: 2,
//         label: "Web Development"
//     },
//     {
//         filterId: 3,
//         label: "Desktop App Development"
//     },
// ]
// const Projects = ()=>{
//     const [filteredValue, setFilteredValue] = useState(1);
//     const [hoveredValue, setHoveredValue] = useState(null);
//     function changeFilter(id){
//         setFilteredValue(id);
//     }
//     function handleHover(index){
//         setHoveredValue(index);
//     }
//     console.log(filteredValue);

//     const filteredItems = filteredValue === 1 ? projectdata : projectdata.filter(item => item.id === filteredValue);
//     console.log(filteredItems);
//     return <section id="projects" className="projects">
//         <PageHeader headerText={"My Projects"} icon={<BsCodeSlash size={40}/>}/>
//         <div className="projects-content">
//             <ul className="projects-content-filter">
//                 {
//                     filterData.map((item, index) => (
//                         <li className= {item.filterId === filteredValue ? 'active' : ""} onClick={()=> changeFilter(item.filterId)} key={item.filterId}>
//                             {
//                                 item.label
//                             }
//                         </li>
//                     ))
//                 }
//             </ul>
//             <div className="projects-content-cards">
//                 {
//                     filteredItems.map((item, index) => (
//                         <div key={item.id} className="projects-content-cards-item"
//                         onMouseEnter={()=>handleHover(index)}
//                         onMouseLeave={()=>handleHover(null)}
//                         >
//                             <div className="projects-content-cards-item-imagewrapper">
//                                 <a href="">
//                                     <img src={item.image} alt="Should be an image here" />
//                                 </a>
//                             </div>
//                             <div className="overlay">
//                                 {
//                                     index === hoveredValue && (
//                                         <div>
//                                             <p>{item.name}</p>
//                                             <a href={item.repository}>Repository</a>
//                                             {item.link && item.link !== "#" && (
//                                             <a href={item.link} target="_blank" rel="noopener noreferrer">Live</a>
//                                         )}
//                                         </div>
//                                     )
//                                 }
//                             </div>
//                         </div>
//                     ))
//                 }
//             </div>
//         </div>
//     </section>
// }
// export default Projects;
import React, { useState } from "react";
import { PageHeader } from "../../components/page-header";
import { BsCodeSlash } from "react-icons/bs";
import "./styles.scss";
import Ip1 from '../../images/ip1.png';
import Space1 from '../../images/space1.png';
import Weather1 from '../../images/weather1.png';
import Bank1 from '../../images/bank1.png';
import Portfolio1 from '../../images/portfolio1.png';

const projectdata = [
    {
        id: 1,
        name: "Weather App",
        image: Weather1,
        repository: "https://github.com/niladrisekhar8712/WeatherApp",
        link: "https://weatherapp-uo26.onrender.com/",
        Description: "The Weather Application is a server-side application built using Node.js and Express.js framework. It fetches weather data for a specified city from external weather APIs and displays it to the user. This documentation provides an overview of the server-side code structure and functionality.",
        category: "Web Development"
    },
    {
        id: 2,
        name: "Portfolio Website",
        image: Portfolio1,
        repository: "https://github.com/Niladri-Sekhar-Mondal/niladri-sekhar-mondal-portfolio",
        link: "#",
        Description: "The Portfolio is a client-side application built using React.js framework. It displays my personal information, skills, and projects. This documentation provides an overview of the client-side code structure and functionality.",
        category: "Web Development"
    },
    {
        id: 3,
        name: "IP Address Tracker",
        image: Ip1,
        repository: "https://github.com/niladrisekhar8712/ip-address-tracker",
        link: "https://niladrisekhar8712.github.io/ip-address-tracker/",
        Description: "IP Address Tracker is a web application that allows users to track the geolocation of any IP address or domain. It provides detailed information about the IP address's location, including city, country, timezone, and ISP. Additionally, it displays the location on an interactive map.",
        category: "Web Development"
    },
    {
        id: 4,
        name: "Space Tourism Website",
        image: Space1,
        repository: "https://github.com/niladrisekhar8712/Space-Tourism",
        link: "https://niladrisekhar8712.github.io/Space-Tourism/",
        Description: "Space Tourism Website is a conceptual project that provides information about space tourism packages, destinations, and spacecraft. It is designed with a futuristic aesthetic and aims to educate and excite visitors about the possibilities of space travel.",
        category: "Web Development"
    },
    {
        id: 5,
        name: "Bank Management System",
        image: Bank1,
        repository: "https://github.com/niladrisekhar8712/Desktop-App-Dev-Projects/tree/main/BankManagementSystem",
        Description: "Bank Management System is a desktop application that allows bank employees to manage customer accounts, transactions, and other banking operations efficiently. It is built using Java and provides a user-friendly interface for ease of use.",
        category: "Desktop App Development"
    }
];

const filterData = [
    {
        filterId: 1,
        label: "All"
    },
    {
        filterId: 2,
        label: "Web Development"
    },
    {
        filterId: 3,
        label: "Desktop App Development"
    },
];

const Projects = () => {
    const [filteredValue, setFilteredValue] = useState(1);
    const [hoveredValue, setHoveredValue] = useState(null);

    function changeFilter(id) {
        setFilteredValue(id);
    }

    function handleHover(index) {
        setHoveredValue(index);
    }

    const filteredItems = filteredValue === 1
        ? projectdata
        : projectdata.filter(item => item.category === filterData.find(filter => filter.filterId === filteredValue).label);

    return (
        <section id="projects" className="projects">
            <PageHeader headerText={"My Projects"} icon={<BsCodeSlash size={40} />} />
            <div className="projects-content">
                <ul className="projects-content-filter">
                    {filterData.map((item) => (
                        <li
                            className={item.filterId === filteredValue ? 'active' : ""}
                            onClick={() => changeFilter(item.filterId)}
                            key={item.filterId}
                        >
                            {item.label}
                        </li>
                    ))}
                </ul>
                <div className="projects-content-cards">
                    {filteredItems.map((item, index) => (
                        <div
                            key={item.id}
                            className="projects-content-cards-item"
                            onMouseEnter={() => handleHover(index)}
                            onMouseLeave={() => handleHover(null)}
                        >
                            <div className="projects-content-cards-item-imagewrapper">
                                <a href={item.link} target="_blank" rel="noopener noreferrer">
                                    <img src={item.image} alt={item.name} />
                                </a>
                            </div>
                            {hoveredValue === index && (
                                <div className="overlay">
                                    <div>
                                        <p>{item.name}</p>
                                        <a href={item.repository}>Repository</a>
                                        {item.link && item.link !== "#" && (
                                            <a href={item.link} target="_blank" rel="noopener noreferrer">Live</a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;

