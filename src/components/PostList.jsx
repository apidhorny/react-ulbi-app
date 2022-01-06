import React from 'react';
import PostItem from './PostItem';
import NoPosts from './NoPosts';

const PostList = ({ posts, title, remove }) => {
    if (!posts.length) {
        return <NoPosts />;
    }

    return (
        <div>
            <h1 className='header-main'>{title}</h1>
            {posts.map((post, index) => (
                <PostItem remove={remove} number={index + 1} post={post} key={post.id} />
            ))}
        </div>
    );
};

export default PostList;
