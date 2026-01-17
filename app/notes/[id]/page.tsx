import { fetchNoteById } from "@/lib/api"
import { QueryClient } from "@tanstack/react-query"
import NoteDetails from "./NoteDetails.client"

interface NoteProps{
    params: Promise<{ id: string }>
}


async function Note({ params }: NoteProps) {

    const {id} = await params

    const queryClient = new QueryClient()

    queryClient.prefetchQuery({
        queryKey: ["note", id],
        queryFn: () => fetchNoteById(id)
})

    return (
       <NoteDetails />
    )
}

export default Note