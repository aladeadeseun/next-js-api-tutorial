export async function PUT({params} :{params:Promise<{bookId: string}>}){
    const {bookId} = await params
    console.log(bookId)
}

export async function DELETE({params} :{params:Promise<{bookId: string}>}){
    const {bookId} = await params
    console.log(bookId)
}