import React from 'react';
import s from './ProductWrap.module.scss';
import Container from '@/components/ui/Container/Container';
import Button from '@/components/ui/Button/Button';
import TabsWrap from '@/components/ui/TabsWrap/TabsWrap';
import { useCart } from 'react-use-cart';
import { useIsClient } from 'usehooks-ts';
import { IoMdHeart } from "react-icons/io";
import { FaRegHeart } from 'react-icons/fa';
import { useAppContext } from '@/context/AppContext';


const ProductWrap = ({ singleProduct, productImages }) => {
  const { fav, handleAddToFav } = useAppContext();
  const isFavourite = fav.some((favItem) => favItem.id === singleProduct?.id);
  const { getItem, addItem, removeItem } = useCart();
  const isClient = useIsClient();
  return (
    <section className={s.productWrap}>
      <Container>
        <div className={s.wrapper}>
          <div className={s.gallery}>
            <div className={s.thumbs}>
              {productImages?.map((el) => (
                <img key={el?.id} src={el?.image} alt={el?.id} />
              ))}
            </div>
            <div className={s.mainThumb}>
              <img src={singleProduct?.image} alt="Main product view" />
            </div>
          </div>

          <div className={s.info}>
            <div className={s.meta}>
              <p>Item: <span>#PNS-G1301</span></p>
              <p>Manufacturer Part: <span>#G1301</span></p>
            </div>

            <div className={s.twink}>
              <h1 className={s.title}>{singleProduct?.name}</h1>
              {!isFavourite ? <FaRegHeart className={s.icon} onClick={() => handleAddToFav(singleProduct)} /> : <IoMdHeart className={s.icon} onClick={() => handleAddToFav(singleProduct)} />}
            </div>

            <div className={s.rating}>
              {'★★★★★'.split('').map((star, i) => (
                <span key={i}>☆</span>
              ))}
            </div>

            <p className={s.description}>
              {singleProduct?.short_description}
            </p>

            <div className={s.price}>${singleProduct?.price}</div>

            <div className={s.meta}>
              <p>Availability: <span>{singleProduct?.availability ? 'In Stock' : 'Not Available'}</span></p>
              <p>Brand Name: <span>{singleProduct?.brand?.name}</span></p>
            </div>

            {isClient && <div className={s.controls}>
              {/* <div className={s.counter}>
                <button>+</button>
                <span>2</span>
                <button>-</button>
              </div> */}
              {!getItem(singleProduct?.id) ? (
                <Button onClick={() => addItem(singleProduct)}>Add to Cart</Button>
              ) : (
                <Button onClick={() => removeItem(singleProduct?.id)}>Remove from Cart</Button>
              )}
            </div>}

            <p className={s.shipping}>Shipping: <span>Usually ships the same or next business day</span></p>
          </div>
        </div>

        <TabsWrap />

      </Container>
    </section>
  );
};

export default ProductWrap;
