import React, { useState } from 'react';
import s from './TabsWrap.module.scss';

const tabItems = ['Beskrivelse', 'Karakteristikker', 'Levering og betaling', 'Anmeldelser'];

const TabsWrap = ({ singleProduct }) => {
  const [activeTab, setActiveTab] = useState('Beskrivelse');

  return (
    <div className={s.tabs_wrap}>
      <div className={s.tabs_main}>
        <div className={s.tabs_top}>
          {tabItems.map(tab => (
            <h4
              key={tab}
              className={activeTab === tab ? s.active : ''}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </h4>
          ))}
        </div>

        <div className={s.tabs_content}>
          {activeTab === 'Beskrivelse' && (
            <div>
              <p>
                {singleProduct?.description}
              </p>
            </div>
          )}
          {activeTab === 'Karakteristikker' && <p>Her kommer produktets karakteristikker...</p>}
          {activeTab === 'Levering og betaling' && <p>Informasjon om levering og betaling...</p>}
          {activeTab === 'Anmeldelser' && <p>Kundeanmeldelser vil vises her...</p>}
        </div>
      </div>

      <img className={s.tabs_image} src="/img/tabs-image.png" alt="Produktbilde" />
    </div>
  );
};

export default TabsWrap;
