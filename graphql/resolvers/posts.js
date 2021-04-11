const Post = require('../../models/Post');
module.exports = {
    Query: {                                                    
        async getPosts(){                              //resolvers mean the objects that are to be returned by query
            try{
                const posts = await Post.find();
                return posts;
            } catch(err){
                throw new Error(err);
            }

        }
    }
}