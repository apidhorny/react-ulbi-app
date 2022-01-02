import React from 'react';
import CsButton from './UI/button/CsButton';

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
                <CsButton onClick={() => props.remove(props.post)} className='btn--delete'>
                    Delete
                </CsButton>
            </div>
        </div>
    );
};

export default PostItem;
