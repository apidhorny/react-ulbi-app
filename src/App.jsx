import React, { useState } from 'react';
import PostList from './components/PostList';
import './styles/style.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript - 1', body: 'lorem spsumv omega tetra stu erusm' },
        { id: 2, title: 'JavaScript - 2', body: 'lorem spsumv omega tetra stu erusm' },
        { id: 3, title: 'JavaScript - 3', body: 'lorem spsumv omega tetra stu erusm' },
    ]);

    return (
        <div className='App'>
            <PostList posts={posts} title={'Posts List'} />
        </div>
    );
}

export default App;
