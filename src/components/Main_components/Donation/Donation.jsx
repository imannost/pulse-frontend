import React from "react";
import "./Donation.pcss"
import { Input, Button, Icon } from "/src/components/ui";

const Donation = () => {
    return (
        <div className="menu_main">
          <div align="center">
          <Icon type="donorsearch_logo" width="55" height="37"/>
          </div>

          <div class="grid" align="center">
            <div class="box">
              <div className="button">
                <Icon type="donation" width="49" height="49"/>
              </div>
              <label className="menu_label mb-2">Запланировать<br/>донацию</label>
            </div>
            <div class="box">
            <div className="button">
              <Icon type="calendar" width="45" height="45"/>
              </div>   
              <label className="menu_label mb-2">Календарь<br/>донаций</label>
            </div>
            <div class="box">     
              <div className="button">
              <Icon type="about-donation" width="61" height="36"/>
              </div>
              <label className="menu_label mb-2">Добавить<br/>донацию</label>
            </div>  
          </div>
      </div>
    );
};

export default Donation