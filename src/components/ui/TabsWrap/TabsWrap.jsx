import React, { useState } from 'react';
import s from './TabsWrap.module.scss';

const tabItems = ['Description', 'Characteristics', 'Delivery and payment', 'Reviews'];

const TabsWrap = ({ singleProduct }) => {
  const [activeTab, setActiveTab] = useState('Description');

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
          {activeTab === 'Description' && (
            <div>
              <p>
                {singleProduct?.description}
              </p>
            </div>
          )}
          {activeTab === 'Characteristics' && <p>Here will be characteristics...</p>}
          {activeTab === 'Delivery and payment' && <p>Info about delivery and payment...</p>}
          {activeTab === 'Reviews' && <p>Customer reviews will go here...</p>}
        </div>
      </div>

      <img className={s.tabs_image} src="/img/tabs-image.png" alt="Product visual" />
    </div>
  );
};

export default TabsWrap;
