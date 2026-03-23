'use cleint'
import { Suspense } from "react";
import Usersuspense from "./Components/Usersuspense";

const Skeleton = () => {
  return <div  className="w-full h-[200px] bg-green-200 animate-pulse"></div>
}
export default async function Home() {
  const data = new Date().toLocaleTimeString();
  return (
    <div>
      <p>Current server time: {data}</p>
      <Suspense fallback={<Skeleton />}>
          <Usersuspense />
      </Suspense>
    
    </div>
  );
}
