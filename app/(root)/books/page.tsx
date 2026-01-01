//import { Metadata } from "next";

import { Metadata, ResolvingMetadata } from "next"

// export const metadata: Metadata = {
//   title: "Create Next App | Book",
//   description: "Role Based Access Control built with Next JS 16 and React 19.",
//   keywords:["book", "isbn"],
// };

type Props = {
  params: Promise<{ id: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {

    console.log(searchParams)
    
  // read route params
  const { id } = await params
 
  // fetch data
  const product = await fetch(`https://.../${id}`).then((res) => res.json())
 
  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []
 
  return {
    title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

export default async function BookPage(){
    const response = await fetch("http://localhost:3000/api/books")
    const books = await response.json()

    return (
        <main>
            <code>{JSON.stringify(books)}</code>
        </main>
    )
}