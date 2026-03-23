import Image from "next/image";

export default  async function Home() {

  const res = await fetch('https://dummyjson.com/products')
  const result = await res.json()

    // console.log(result);
  return (
   <div>

    {
      result.products?.map((pro: any) => (
        <li key={pro.id}>{pro.title}</li>
      ))
    }
   
   </div>
  );
}
