import React from 'react';

import styles from './styles.module.scss'

function User ({children, imageStoragePath, imageUrl, productDescription, productFormat, productName, productPrice, uid, ...props})  {
  return (
        <aside className={styles.user}>
          <header>
            <h2>{productName}</h2>
            <p>{productDescription}</p>
          </header>
          <p>{imageStoragePath}</p>
          <p>{imageUrl}</p>
          <p>{productFormat}</p>
          <p>{productPrice}</p>
          <p>{uid}</p>
        </aside>
  )
}

export default User