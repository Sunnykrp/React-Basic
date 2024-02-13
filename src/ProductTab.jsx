import Product  from "./Product.jsx";
function ProductTab()
{
    let options=["hi-tech","durable","fast"];
    let options2={a:"hi-tech",b:"durable",c:"fast"};
    return(
    <>
    <Product title="Mobile" price={30000} features={options}  features2={options2}/>
    <Product title="Laptop" price={60000} />
    <Product title="Pen" price={10}/>
    </>
    );
}
export default ProductTab;