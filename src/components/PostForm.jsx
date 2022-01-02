import React, { useState } from 'react';
import CsButton from './UI/button/CsButton';
import CsInput from './UI/input/CsInput';

const PostForm = ({ create }) => {
    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (event) => {
        event.preventDefault();
        const newPost = {
            ...post,
            id: Date.now(),
        };
        create(newPost);
        setPost({ title: '', body: '' });
    };

    return (
        <form action='#'>
            <CsInput type='text' placeholder='Title' value={post.title} onChange={(event) => setPost({ ...post, title: event.target.value })} />
            <CsInput type='text' placeholder='Body' value={post.body} onChange={(event) => setPost({ ...post, body: event.target.value })} />
            <CsButton onClick={addNewPost}>Add Post</CsButton>
        </form>
    );
};

export default PostForm;
