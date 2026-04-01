import { revalidateTag } from "next/cache";

export async function revalidateProduct() {
    revalidateTag('products')
}