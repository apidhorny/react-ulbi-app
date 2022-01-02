import React, { useState } from 'react';
import PostList from './components/PostList';
import CsButton from './components/UI/button/CsButton';
import CsInput from './components/UI/input/CsInput';
import './styles/style.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript - 1', body: 'lorem spsumv omega tetra stu erusm' },
        { id: 2, title: 'JavaScript - 2', body: 'lorem spsumv omega tetra stu erusm' },
        { id: 3, title: 'JavaScript - 3', body: 'lorem spsumv omega tetra stu erusm' },
    ]);

    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (event) => {
        event.preventDefault();
        setPosts([...posts, { ...post, id: Date.now() }]);
        setPost({ title: '', body: '' });
    };

    return (
        <div className='App'>
            <form action='#'>
                <CsInput type='text' placeholder='Title' value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} />
                <CsInput type='text' placeholder='Body' value={post.body} onChange={(event) => setPost({ ...post, body: event.target.value })} />
                <CsButton onClick={addNewPost}>Add Post</CsButton>
            </form>
            <PostList posts={posts} title={'Posts List'} />
        </div>
    );
}

export default App;
