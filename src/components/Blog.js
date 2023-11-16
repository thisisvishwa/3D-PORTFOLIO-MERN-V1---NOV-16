import React from 'react';

class Blog extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        };
    }

    componentDidMount() {
        // Fetch blog posts from API
        fetch('/api/blog')
            .then(response => response.json())
            .then(data => this.setState({ posts: data }));
    }

    render() {
        return (
            <div id="blog">
                <h2>Blog</h2>
                {this.state.posts.map((post, index) => (
                    <div key={index}>
                        <h3>{post.title}</h3>
                        <p>{post.content}</p>
                    </div>
                ))}
            </div>
        );
    }
}

export default Blog;