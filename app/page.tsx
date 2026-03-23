import Counter from "./Counter/Counter";

export default async function Home() {

  const response = await fetch('https://dummyjson.com/products')
  const data = await response.json()
  console.log(data);
  return <div>
      <Counter />
   {
    data.products?.map((product: any) => {
      <li>{product.title}</li>
    })
   }
  </div>;
}
