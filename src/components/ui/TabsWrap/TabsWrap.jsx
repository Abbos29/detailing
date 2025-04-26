import React, { useState } from 'react';
import s from './TabsWrap.module.scss';

const tabItems = ['Description', 'Characteristics', 'Delivery and payment', 'Reviews'];

const TabsWrap = () => {
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
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book...
              </p>
              <p>
                It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
              <p>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua..."
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
