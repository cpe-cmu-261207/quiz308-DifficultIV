import { Store } from "pullstate";
import { comments, CommentType } from "./comments";

type CommentTypes = {
    comment: CommentType[]
}

export const comment = new Store<CommentTypes> ({
    comment: comments
})

