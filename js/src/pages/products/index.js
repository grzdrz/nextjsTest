import Link from 'next/link';

import Button from '../../components/button/button';

const ProductLink = (props) => (
  <div className='product' style={{ border: '1px solid black' }}>
    <Link as={`/product/${props.id}`} href={`/product?id=${props.id}`}>
      <a>
        <img src={props.image} alt={props.name} height='250' className='thumbnail' />
        <p>{props.description}</p>
        <p>{props.name}</p>
      </a>
    </Link>
  </div>);

const Products = ({ products }) => (
  <div className='products'>
    <div className='products__button'>
      <Button />
    </div>

    {products.map(props => (
      <ProductLink key={props.id} {...props} />
    ))}
  </div>);

export default Products