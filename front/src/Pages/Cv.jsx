import React from 'react'
import './style.scss'
import Revan from "../Img/revan.png"
function Cv() {
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
                        <div class="follow">
                            <h3>Réseaux</h3>
                            <div class="box">
                                <a href="Bura Socıal medıa lınkı qoyula bıler"><i class="fa fa-facebook"></i></a>
                                <a href="Bura Socıal medıa lınkı qoyula bıler" target="_blank"><i class="pif-plurkapp"></i></a>
                                <a href="Bura Socıal medıa lınkı qoyula bıler"><i class="fa fa-twitter"></i></a>
                                <a href="Bura Socıal medıa lınkı qoyula bıler"><i class="fa fa-pinterest-p"></i></a>
                                <a href="Bura Socıal medıa lınkı qoyula bıler"><i class="fa fa-tumblr"></i></a>
                                <a href="Bura Socıal medıa lınkı qoyula bıler" target="_blank"><i class="fa fa-codepen"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="func">
                        <div class="work">
                            <h3><i class="fa fa-briefcase"></i>Təcrübələrim</h3>
                            <ul>
                                <li><span>Gənclərin Online Yay Məktəbi</span><small> AVQUST 2020-NOYABR 2020</small></li>
                                <li><span>Könüllülük Akademiyası 5</span><small>OKTYABR 2021-DEKABR 2021</small></li>
                                <li><span>A-dan Z-ye Python Dersleri</span><small>OKTYABR 2021</small></li>
                                <li><span>Könüllülük Akademiyası 6</span><small>FEVRAL 2022-MAY 2022</small></li>
                                <li><span>ACA Media</span><small>İYUN 2022-NOYABR 2022</small></li>
                                <li><span>PASHABANK SYSTEM ADMİNSTRATOR</span><small>YANVAR 2023-NOW</small></li>

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
                            <h3><i class="fa fa-th-list"></i>Autres compétences</h3>
                            <ul>
                                <li data-percent="94">
                                    <svg viewbox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle class="cbar" cx="50" cy="50" r="45"></circle>
                                    </svg><span>Photoshop</span><small></small>
                                </li>
                                <li data-percent="80">
                                    <svg viewbox="0 0 100 100">
                                        <circle cx="50" cy="50" r="45"></circle>
                                        <circle class="cbar" cx="50" cy="50" r="45"></circle>
                                    </svg><span>Illustrator</span><small></small>
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
                            <h3><i class="fa fa-star"></i>Hobbies</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati labore, adipisci a, et ducimus non? Tenetur accusamus incidunt explicabo nobis ipsum, ratione temporibus eius est minus quis esse, vitae eos.</p>
                        </div>
                    </div>
                </div>

            </body>

        </>
    )
}

export default Cv