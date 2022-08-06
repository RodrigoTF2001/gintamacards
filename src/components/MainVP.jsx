import React from "react";
import '../styles/mainVP.css'

export default function MainVP(){
    return(
        <main className="containerMain">

            <button className="arrow back">
                
             <img src="./src/img/arrowLeft.png" alt="nope"  />
            </button>

            <ul>
                <li className="card select">
                    <div className="title">
                        <h2>Sakata Gintoki</h2>
                    </div>
                    <div>
                        <img className="imgcard" src="./src/img/gintoki.webp" alt="" />
                        <h3>Atributos:</h3>
                    </div>
                    <div className="atributes">
                        <h4>HP:1200</h4>
                        <h4>Attack:750</h4>
                        <h4>Defense:300</h4>
                    </div>
                 </li>
                <li className="card ">
                    <div className="title">
                        <h2>Kagura</h2>
                    </div>
                    <div>
                       <img className="imgcard" src="./src/img/kagura.jpg" alt="" />
                        <h3>Atributos:</h3>
                    </div>
                    <div className="atributes">
                        <h4>HP:900</h4>
                        <h4>Attack:400</h4>
                        <h4>Defense:300</h4>
                    </div>
                 </li>
                <li className="card ">
                     <div className="title">
                        <h2>Shinpachi</h2>
                    </div>
                    <div>
                        <img className="imgcard" src="./src/img/shinpachi.jpg" alt="" />
                        <h3>Atributos:</h3>
                    </div>
                    <div className="atributes">
                        <h4>HP:</h4>
                        <h4>Attack:</h4>
                        <h4>Defense:</h4>
                    </div>
                 </li>
                 <li className="card">
                     <div className="title">
                        <h2>Hijikata</h2>
                    </div>
                    <div>
                        <img className="imgcard" src="./src/img/hijikata.jpg" alt="" />
                        <h3>Atributos:</h3>
                    </div>
                    <div className="atributes">
                        <h4>HP:</h4>
                        <h4>Attack:</h4>
                        <h4>Defense:</h4>
                    </div>
                 </li>
                 <li className="card">
                     <div className="title">
                        <h2>Sougo</h2>
                    </div>
                    <div>
                        <img className="imgcard" src="./src/img/Okita.jpg" alt="" />
                        <h3>Atributos:</h3>
                    </div>
                    <div className="atributes">
                        <h4>HP:</h4>
                        <h4>Attack:</h4>
                        <h4>Defense:</h4>
                    </div>
                 </li>
                 <li className="card ">
                     <div className="title">
                        <h2>Kondo</h2>
                    </div>
                    <div>
                        <img className="imgcard" src="./src/img/kondo.png" alt="" />
                        <h3>Atributos:</h3>
                    </div>
                    <div className="atributes">
                        <h4>HP:</h4>
                        <h4>Attack:</h4>
                        <h4>Defense:</h4>
                    </div>
                 </li>
                 <li className="card">
                     <div className="title">
                        <h2>Katsura</h2>
                    </div>
                    <div>
                        <img className="imgcard" src="./src/img/katsura.jpg" alt="" />
                        <h3>Atributos:</h3>
                    </div>
                    <div className="atributes">
                        <h4>HP:</h4>
                        <h4>Attack:</h4>
                        <h4>Defense:</h4>
                    </div>
                 </li>
                 <li className="card">
                     <div className="title">
                        <h2>Takasugi</h2>
                    </div>
                    <div>
                        <img className="imgcard" src="./src/img/takasugi.png" alt="" />
                        <h3>Atributos:</h3>
                    </div>
                    <div className="atributes">
                        <h4>HP:</h4>
                        <h4>Attack:</h4>
                        <h4>Defense:</h4>
                    </div>
                 </li>
                 <li className="card ">
                     <div className="title">
                        <h2>Sadaharu</h2>
                    </div>
                    <div>
                        <img className="imgcard" src="./src/img/sadaharu.png" alt="" />
                        <h3>Atributos:</h3>
                    </div>
                    <div className="atributes">
                        <h4>HP:</h4>
                        <h4>Attack:</h4>
                        <h4>Defense:</h4>
                    </div>
                 </li>
                 <li className="card ">
                     <div className="title">
                        <h2>Elizabeth</h2>
                    </div>
                    <div>
                        <img className="imgcard" src="./src/img/elizabeth.png" alt="" />
                        <h3>Atributos:</h3>
                    </div>
                    <div className="atributes">
                        <h4>HP:</h4>
                        <h4>Attack:</h4>
                        <h4>Defense:</h4>
                    </div>
                 </li>
            </ul>

            <button className="arrow next">
                <img  src="./src/img/arrowLeft.png" alt="" />
            </button>
            
        </main>
    )
}