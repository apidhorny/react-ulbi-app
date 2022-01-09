import React, { useEffect, useMemo, useState } from 'react';
import PostService from '../API/PostService';
import PostFilter from '../components/PostFilter';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import CsButton from '../components/UI/button/CsButton';
import Error from '../components/UI/error/Error';
import Loader from '../components/UI/loader/Loader';
import CsModal from '../components/UI/modal/CsModal';
import Pagination from '../components/UI/pagination/Pagination';
import { useFetching } from '../hooks/useFetching';
import { usePosts } from '../hooks/usePosts';
import { getPageCount, getPagesArray } from '../utils/pages';
import '../styles/style.css';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({ sort: '', query: '' });
    const [modal, setModal] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);

    const [fetchPosts, isPostsLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(limit, page);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setTotalPages(getPageCount(totalCount, limit));
    });
    useEffect(() => {
        fetchPosts();
    }, [page]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    };

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id));
    };

    const changePage = (page) => {
        setPage(page);
    };

    return (
        <div className='App'>
            <CsButton onClick={() => setModal(true)}>Add New Post</CsButton>
            <CsModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost} />
            </CsModal>
            <hr className='hr-line' />
            <PostFilter filter={filter} setFilter={setFilter} />
            {postError && <Error>Error: {postError}</Error>}
            {isPostsLoading ? <Loader /> : <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Posts List'} />}
            <Pagination page={page} changePage={changePage} totalPages={totalPages} />
        </div>
    );
}

export default Posts;
