import React, {Component} from 'react';
import ProjectItem from "../ProjectItemPost/ProjectItem";

class Post extends Component {
    render() {
        return (
            <div className='container'>
                <ProjectItem/>
            </div>
        );
    }
}

export default Post;