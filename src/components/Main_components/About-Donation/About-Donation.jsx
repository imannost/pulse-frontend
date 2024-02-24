import React from 'react';
import "./About-Dononation.pcss"
import { Input, Button, Icon } from "/src/components/ui";

const AboutDonation = () => {
    return (
      <div>
        <h2>Как стать донором</h2>
        <p>Благотворительность - это прекрасный способ помочь тем, кто нуждается. Если вы хотите стать донором и внести свой вклад в общее благо, вот несколько шагов, которые вы можете предпринять:</p>
        <ol>
          <li>Найдите организацию, с которой вы хотели бы сотрудничать.</li>
          <li>Ознакомьтесь с требованиями и процедурами для становления донором в этой организации.</li>
          <li>Свяжитесь с представителями организации и выразите свое желание помочь.</li>
          <li>Следуйте инструкциям по оформлению донорства и начните делать добро!</li>
        </ol>
        <p>Помните, что каждый вклад имеет значение и может сделать мир лучше местом для всех.</p>
      </div>
    );
};

export default AboutDonation;