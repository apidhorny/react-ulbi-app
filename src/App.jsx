import React, { useMemo, useState } from 'react';
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/style.css';

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'JavaScript - 1', body: 'lorem spsumv omega tetra stu erusm' },
        { id: 2, title: 'JavaScript - 2', body: 'lorem spsumv omega tetra stu erusm' },
        { id: 3, title: 'JavaScript - 3', body: 'lorem spsumv omega tetra stu erusm' },
    ]);

    const [filter, setFilter] = useState({ sort: '', query: '' });

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPosts]);

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
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts List'} />
        </div>
    );
}

export default App;
