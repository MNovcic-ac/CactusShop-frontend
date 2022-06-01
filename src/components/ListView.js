import React from "react";
import styled from "styled-components";
import { formatPrice } from "../utils/helpers";
import { Link } from "react-router-dom";
const ListView = ({ products }) => {
  if (products.length < 1) {
    return (
      <h5 style={{ textTransform: "none" }}>No products matched your search</h5>
    );
  }

  const handleClickImage = () => {};
  return (
    <Wrapper>
      {products.map((product) => {
        const { id, images, name, price, description } = product;
        return (
          <article key={id}>
            <Link to={`products/${id}`}>
              <img src={images[0]} alt={name} />
            </Link>

            <div>
              <h4>{name}</h4>
              <h5 className="price">{formatPrice(price)}</h5>
            </div>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  row-gap: 3rem;

  img {
    width: 100%;
    display: block;
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: var(--radius);
    margin-bottom: 1rem;
  }
  h4 {
    margin-bottom: 0.5rem;
  }
  .price {
    color: var(--clr-primary-6);
    margin-bottom: 0.75rem;
  }
  p {
    max-width: 45em;
    margin-bottom: 1rem;
  }
  .btn {
    font-size: 0.5rem;
    padding: 0.25rem 0.5rem;
  }
  .btn:hover {
    background-color: --clr-green-dark;
  }
  @media (min-width: 992px) {
    article {
      display: grid;
      grid-template-columns: auto 1fr;
      column-gap: 2rem;
      align-items: center;
    }
  }
`;

export default ListView;
