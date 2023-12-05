import React from 'react';
import "./PersonalInfo.css"

function PersonalInfo() {
  return (
    <div>
        <p className="name">Aylin Rəcəbli</p>
        <ul className="abNN">
        <li className="abN">Xülasə</li>
        <hr className="hr5"/>
        <li className="about">Mən rəqəmsal təcrübələr yaratmaq üçün dərin 
        maraqla idarə olunan bir veb tərtibatçısıyam. Mənim veb-inkişafına 
        səyahətim ideyaları interaktiv, funksional veb-saytlara çevirmək 
        həvəsindən qaynaqlandı.</li>
        </ul>
        <ul className="skills">
          <li>Bacarıqlar</li>
          <li><hr className="hr3"/></li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>ReactJS</li>
          <li>MySQL</li>
        </ul>
        <ul className="skill2">
          <li><hr className="hr4"/></li>
          <li>Komandada işləmək</li>
          <li>Tapşırıqların idarə edilməsi</li>
          <li>Problemlərin həll edilməsi</li>
          <li>Zamanın idarə edilməsi</li>
        </ul>
    </div>
  )
}

export default PersonalInfo