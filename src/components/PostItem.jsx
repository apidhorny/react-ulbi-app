import React from 'react';

const PostItem = (props) => {
    return (
        <div className='post'>
            <div className='post__content'>
                <div>
                    <strong>
                        {props.number}. {props.post.title}
                    </strong>
                </div>
                <div>{props.post.body}</div>
            </div>
            <div className='pots__btns'>
                <button className='btn--delete'>Delete</button>
            </div>
        </div>
    );
};

export default PostItem;
