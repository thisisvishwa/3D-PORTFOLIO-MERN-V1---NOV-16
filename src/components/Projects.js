```javascript
import React, { Component } from 'react';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        };
    }

    componentDidMount() {
        // Fetch data from API and update state
        // This is a placeholder and should be replaced with actual API call
        fetch('/api/projects')
            .then(response => response.json())
            .then(data => this.setState({ projects: data }));
    }

    render() {
        return (
            <div id="projects">
                <h2>Projects</h2>
                {this.state.projects.map((project, index) => (
                    <div key={index}>
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.link}>View Project</a>
                    </div>
                ))}
            </div>
        );
    }
}

export default Projects;
```