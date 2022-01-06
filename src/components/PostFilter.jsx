import React from 'react';
import CsInput from './UI/input/CsInput';
import CsSelect from './UI/select/CsSelect';

const PostFilter = ({ filter, setFilter }) => {
    return (
        <div>
            <CsInput placeholder='Search...' value={filter.query} onChange={(event) => setFilter({ ...filter, query: event.target.value })} />
            <CsSelect
                value={filter.sort}
                onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
                defaultValue='Sort by...'
                options={[
                    { value: 'title', name: 'By Title' },
                    { value: 'body', name: 'By Body' },
                ]}
            />
        </div>
    );
};

export default PostFilter;
