import React, { useEffect, useState } from 'react'
import './style.scss'
import Revan from "../Img/revan.png"
import IG from "../Img/ig.png"
import fb from "../Img/fb.png"

import axios from "axios";
function Cv() {


    const [post, setPost] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3030").then((response) => {
            setPost(response.data);
        });
    }, []);

    return (
        <>

            <body>
                <div class="resume">
                    <div class="base">
                        <div class="profile">
                            <div class="photo"><img src={Revan} /></div>
                            <div class="info">
                                <h4 class="name">İbrahimov Rəvan</h4><small class="job">Sistem Administrator</small>
                            </div>
                        </div>
                        <div class="about">
                            <h3>Windows Server Administration</h3>Core Server Administration,
                            ADDS, DNS, DHCP, GPO
                            ADCS. Additional DC, File Server.
                            Backup Server<br />
                        </div>
                        <div class="contact">
                            <h3>ƏLAQƏ</h3>
                            Mobil: +994554329916
                            Ünvan: Bakı, Nəsimi
                            Email: Revan.ibrahimov.h@gmail.com
                            LinkedIn: linkedin.com/in/rəvanibrahimov
                        </div>
                    </div>
                    <div class="func">

                        <div class="work">
                            <h3><i class="fa fa-briefcase"></i>Təcrübələrim</h3>
                            <ul>

                                {post.map((element) => {
                                    return (
                                        <li><span>{element.tecrubeleri}</span><small>{element.baslangictarixi}-{element.bitistarixi}</small></li>
                                    )
                                })}
                            </ul>
                        </div>



                        <div class="edu">
                            <h3><i class="fa fa-graduation-cap"></i>Təhsilim</h3>
                            <ul>
                                <li><span>Naxçıvan MR Kəngərli rayonu S.Məmmədov
                                    adına tam orta məktəb</span><small>2009-2020</small></li>
                                <li><span>Azərbaycan Texniki Universiteti-"İnformasiya və Telekommunikasiya Texnologiyaları
                                    (SABAH)</span><small> 2020-2024</small></li>
                                <li><span>CODE ACADEMY-Sistem Administrator  </span><small>2022-2023</small></li>


                            </ul>
                        </div>
                        <div class="skills-prog">
                            <h3><i class="fa fa-briefcase"></i>Dil Bİliklərim</h3>
                            <div><ul>
                                <li data-percent="96"><span>İngilis dili</span>
                                    <div class="progress">
                                        <progress id="avancement" class="progressBar" value="65" max="100"></progress>
                                    </div>
                                </li>
                                <li data-percent="96"><span>Rus Dili</span>
                                    <div class="progress">
                                        <progress id="avancement" class="progressBar" value="40" max="100"></progress>
                                    </div>
                                </li>
                                <li data-percent="96"><span>Fransız </span>
                                    <div class="progress">
                                        <progress id="avancement" class="progressBar" value="30" max="100"></progress>
                                    </div>
                                </li>
                                <li data-percent="96"><span>Türk dili</span>
                                    <div class="progress">
                                        <progress id="avancement" class="progressBar" value="95" max="100"></progress>
                                    </div>
                                </li>
                            </ul>
                            </div>
                        </div>

                        <div class="skills-prog">
                            <h3><i class="fa fa-code"></i>İxtisas biliklərim</h3>
                            <div><ul>
                                <li data-percent="96"><span>LINUX</span>
                                    <div class="progress">
                                        <progress id="avancement" class="progressBar" value="65" max="100"></progress>
                                    </div>
                                </li>
                                <li data-percent="96"><span> Microsoft Word
                                </span>
                                    <div class="progress">
                                        <progress id="avancement" class="progressBar" value="80" max="100"></progress>
                                    </div>
                                </li>
                                <li data-percent="96"><span>Powerpoint </span>
                                    <div class="progress">
                                        <progress id="avancement" class="progressBar" value="30" max="100"></progress>
                                    </div>
                                </li>
                                <li data-percent="96"><span>WINDOWS Server
                                </span>
                                    <div class="progress">
                                        <progress id="avancement" class="progressBar" value="95" max="100"></progress>
                                    </div>
                                </li>
                            </ul>
                            </div>



                        </div>

                        <div class="skills-soft">
                            <h3><i class="fa fa-th-list"></i>Bacarıqlarım</h3>
                            <ul>
                                <li data-percent="94">
                                    <svg viewbox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle class="cbar" cx="50" cy="50" r="45"></circle>
                                    </svg><span>Windows</span><small></small>
                                </li>
                                <li data-percent="80">
                                    <svg viewbox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle class="cbar" cx="50" cy="50" r="45"></circle>
                                    </svg><span>Linux</span><small></small>
                                </li>
                                <li data-percent="89">
                                    <svg viewbox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle class="cbar" cx="50" cy="50" r="45"></circle>
                                    </svg><span>Sublime Text</span><small></small>
                                </li>
                                <li data-percent="55">
                                    <svg viewbox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle class="cbar" cx="50" cy="50" r="45"></circle>
                                    </svg><span>Photofiltre</span><small></small>
                                </li>
                            </ul>
                        </div>
                        <div class="interests">
                            <h3><i class="fa fa-star"></i>Hobilərim</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati labore, adipisci a, et ducimus non? Tenetur accusamus incidunt explicabo nobis ipsum, ratione temporibus eius est minus quis esse, vitae eos.</p>
                        </div>
                    </div>
                </div>

            </body >

        </>
    )
}

export default Cv