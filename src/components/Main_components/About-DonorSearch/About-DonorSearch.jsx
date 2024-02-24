import React from 'react';
import "./About-DonorSearch.pcss"
import { Input, Button, Icon } from "/src/components/ui";

const AboutDonorSearch = () => {
    return (
      <div>
        <h2>Как стать донором</h2>
        <p>Информация о том, как стать донором на сайте donorsearch.org:</p>
        <ol>
          <li>Посетите веб-сайт donorsearch.org.</li>
          <li>Найдите раздел "Как стать донором" на главной странице.</li>
          <li>Ознакомьтесь с информацией о процессе становления донором на сайте.</li>
          <li>Следуйте инструкциям по регистрации и заполнению необходимых форм.</li>
          <li>Получите подтверждение о вашем донорстве и начните делать доброе дело!</li>
        </ol>
        <p>Будьте готовы помогать другим и делать мир лучше местом для всех!</p>
      </div>
    );
}

export default AboutDonorSearch;