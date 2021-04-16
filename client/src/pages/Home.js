import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { Grid } from 'semantic-ui-react';
import PostCard from '../components/PostCard';
<style>
@import url('https://fonts.googleapis.com/css2?family=Antonio:wght@100&family=Kaushan+Script&display=swap');
</style>
function Home() {
    const { loading, data: { getPosts: posts }={}} = useQuery(FETCH_POSTS_QUERY);
    return (
        <Grid columns={1}>
            <Grid.Row>
                <h1 className="recent">Recent Posts</h1>
            </Grid.Row>
            <Grid.Row>
            {loading ? (
                <h1>Loading posts...</h1>
            ) : (
                posts && posts.map(post =>(
                    <Grid.Column key={post.id} style={{ marginBottom : 20}}>
                        <PostCard post={post}/>
                    </Grid.Column>
                ))
            )}
            </Grid.Row>
        </Grid>
    )
}
const FETCH_POSTS_QUERY = gql`
  {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
      }
      commentCount
      comments {
        id
        username
        createdAt
        body
      }
    }
  }
`;

export default Home;
