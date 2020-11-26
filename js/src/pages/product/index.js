import Head from 'next/head';
import { useState, useEffect } from 'react';

import CreatePost from '../../components/CreatePost';
import fire from '../../../config/fire-config';

const Product = (props) => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fire.firestore()
      .collection('blog')
      .onSnapshot(snap => {
        const blogs = snap.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setBlogs(blogs);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Product</title>
      </Head>

      <div className="product">
        <div style={{ border: '1px solid blue', padding: '10px', }}>
          <h1>Blog</h1>
          <ul>
            {blogs.map(blog =>
              <li key={blog.id}>
                {blog.title}
              </li>
            )}
          </ul>

          <CreatePost />
        </div>

        {/*  */}

        <a href={props.url}>
          <img src={props.image} alt={props.name} height="400px" className="thumbnail" />
          <p>{props.name}</p>
        </a>

        <p className="product-details">
          {props.description}
        </p>

        <button className="snipcart-add-item"
          data-item-name={props.name}
          data-item-id={props.id}
          data-item-image={props.image}
          data-item-url={'https://next-react-snipcart.netlify.com/product/' + props.id}
          data-item-price={props.price}>
          Buy it for {props.price} $
    </button>

      </div>
    </>);
}

export default Product;
