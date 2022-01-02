import React, { useState } from 'react';
import NoPosts from './components/NoPosts';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/style.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript - 1', body: 'lorem spsumv omega tetra stu erusm' },
        { id: 2, title: 'JavaScript - 2', body: 'lorem spsumv omega tetra stu erusm' },
        { id: 3, title: 'JavaScript - 3', body: 'lorem spsumv omega tetra stu erusm' },
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    return (
        <div className='App'>
            <PostForm create={createPost} />
            <hr className='hr-line' />
            {posts.length ? <PostList remove={removePost} posts={posts} title={'Posts List'} /> : <NoPosts />}
        </div>
    );
}

export default App;
