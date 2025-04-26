import React from 'react';
import s from './ProductWrap.module.scss';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import TabsWrap from '@/components/ui/TabsWrap/TabsWrap';

const ProductWrap = () => {
  return (
    <section className={s.productWrap}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.gallery}>
            <div className={s.thumbs}>
              {[...Array(5)].map((_, i) => (
                <img key={i} src={`/img/product-thumb.png`} alt={`Thumbnail ${i + 1}`} />
              ))}
            </div>
            <div className={s.mainThumb}>
              <img src="/img/product-thumb.png" alt="Main product view" />
            </div>
          </div>

          <div className={s.info}>
            <div className={s.meta}>
              <p>Item: <span>#PNS-G1301</span></p>
              <p>Manufacturer Part: <span>#G1301</span></p>
            </div>

            <h1 className={s.title}>Griot's Garage The BOSS Foam Cannon</h1>

            <div className={s.rating}>
              {'★★★★★'.split('').map((star, i) => (
                <span key={i}>☆</span>
              ))}
            </div>

            <p className={s.description}>
              NARPPF M190 Matte is a premium matte paint protection film that offers maximum protection
              combined with a distinctive matte finish. As professional installers with 15 years of experience,
              we have chosen NARPPF for its exceptional quality and durability.
            </p>

            <div className={s.price}>$55.22</div>

            <div className={s.meta}>
              <p>Availability: <span>In Stock</span></p>
              <p>Brand Name: <span>NARPPF</span></p>
            </div>

            <div className={s.controls}>
              <div className={s.counter}>
                <button>+</button>
                <span>2</span>
                <button>-</button>
              </div>
              <Button>Add to Cart</Button>
            </div>

            <p className={s.shipping}>Shipping: <span>Usually ships the same or next business day</span></p>
          </div>
        </div>

        <TabsWrap/>
        
      </Container>
    </section>
  );
};

export default ProductWrap;
