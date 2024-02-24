import React from "react";
import "./Menu.pcss"
import { Input, Button, Icon } from "/src/components/ui";

const Menu = () => {
    return (
        <div className="menu_main">
          <div align="center">
          <Icon type="donorsearch_logo" width="55" height="37"/>
          </div>

          <div class="grid" align="center">
            <div class="box">
              <div className="button">
                <Icon type="plan-donation" width="75" height="63"/>
              </div>
              <label className="menu_label mb-2">Запланировать<br />донацию</label>
            </div>

            <div class="box">
              <div className="button">
                <Icon type="add-donation" width="52" height="52"/>
              </div>
              <label className="menu_label mb-2">Добавление<br />донации</label>
            </div>

            <div class="box">
            <div className="button">
              <Icon type="points-donation" width="67" height="61"/>
              </div>
              <label className="menu_label mb-2">Пункты приёма</label>
            </div>
            <div class="box">
            <div className="button">
              <Icon type="news" width="53" height="53"/>
              </div>
              <label className="menu_label mb-2">Новости/Статьи</label>
            </div>
            
            <div class="box">
            <div className="button">
              <Icon type="about-donation" width="80" height="80"/>
              </div>   
              <label className="menu_label mb-2">О донорстве</label>
            </div>
            <div class="box">     
              <div className="button">
              <Icon type="about-donorsearch" width="50" height="36"/>
              </div>
              <label className="menu_label mb-2">О DonorSearch</label>
            </div>  
          </div>
      </div>
    );
};

export default Menu