import {PageTitle} from './../components/PageTitle'
import ProductCard from '../components/ProductCard/ProductCard';
import EmptyProductCard from '../components/ProductCard/EmptyProductCard';
import Head from 'next/head'
import {PanelBody, IconPanel} from './styles';

export default function Home(props) {
  const fullRowLength = 4
  const products = props.products;
  //const stripePromise = (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)
  let myProducts = products.map(product => <ProductCard key={product.uid} product={product}/>)
  let myRows = myProducts.length;
  
  function getFullRowCount() {
      let count = myRows/4;
      return count;
  }
  function getPartRowCount()
  {
      let count = myRows%4;
      return count;
  }
  let fullRowCount = getFullRowCount()
  let partRowCount = getPartRowCount()
  let rowLength = 0
  let currentProduct = 0
  let currentRow = 1;

  function createProductCards () {
    let oneRow = []
    
    let allRows = []

        while (rowLength < fullRowLength)
        {

            var currentRowData;
            if (fullRowCount > currentRow)
            {
                currentRowData = 
                (<PanelBody>
                    <IconPanel>
                        {myProducts[currentProduct]}
                        {myProducts[currentProduct+1]}
                        {myProducts[currentProduct+2]}
                        {myProducts[currentProduct+3]}
                    </IconPanel>
                </PanelBody>)
            }
            else
            {
                if (partRowCount == 0)
                {
                    currentRowData = 
                    (<PanelBody>
                        <IconPanel>
                            {myProducts[currentProduct]}
                            {myProducts[currentProduct+1]}
                            {myProducts[currentProduct+2]}
                            {myProducts[currentProduct+3]}
                        </IconPanel>
                    </PanelBody>)
                }
                if (partRowCount == 1)
                {
                    currentRowData = 
                    (<PanelBody>
                        <IconPanel>
                            {myProducts[currentProduct]}
                            {<EmptyProductCard/>}
                            {<EmptyProductCard/>}
                            {<EmptyProductCard/>}
                        </IconPanel>
                    </PanelBody>)
                }
                if (partRowCount == 2)
                {
                    currentRowData = 
                    (<PanelBody>
                        <IconPanel>
                            {myProducts[currentProduct]}
                            {myProducts[currentProduct+1]}
                            {<EmptyProductCard/>}
                            {<EmptyProductCard/>}
                        </IconPanel>
                    </PanelBody>)
                }
                if (partRowCount == 3)
                {
                    currentRowData = 
                    (<PanelBody>
                        <IconPanel>
                            {myProducts[currentProduct]}
                            {myProducts[currentProduct+1]}
                            {myProducts[currentProduct+2]}
                            {<EmptyProductCard/>}
                        </IconPanel>
                    </PanelBody>)
                }

            }
            oneRow.push(currentRowData)
            currentProduct+=4;
            rowLength++;
            currentRow++;
        }
        rowLength = 0;
        allRows.push(oneRow)
        oneRow = []
    return allRows;
}
let allProducts = createProductCards()


  return (
    <>
    <Head>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Storefront</title>
    </Head>
    <PageTitle tagline="featured products" title="Jordan's Garage Sale"/>
    <main>
      {/* {products.map(product => <ProductCard key={product.uid} product={product}/>)} */}
      {allProducts}
    </main>
    </>
  )
}

export async function getStaticProps(){
  const res = await fetch (`https://dashboard-a6060-default-rtdb.firebaseio.com/products.json`)
  const productData = await res.json();
  const products = Object.values(productData)
  console.log(productData)

  return {
    props:{
      products
    },
    revalidate:60
  }
}