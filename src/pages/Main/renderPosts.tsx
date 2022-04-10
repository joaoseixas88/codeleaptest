import { Post } from "../../components/Post";

interface PostProps{
    id: number;
    username: string;
    created_datetime: string;
    title: string;
    content: string;    
}

export function renderPost(posts: PostProps[], username: string){
    return(
        posts.map(post => {
            return (
                <Post 
                    key={post.id}
                    username={username}
                    post={post}                    
                />
            )
        })
    )
}