import { Link } from "react-router-dom"

const Story = ({ story }) => {
    return (
        <div className="story p-1 container-flux border-bottom border-2 border-secondary bg-light">
            <Link to={`/story/${story.id}`} style={{ textDecoration: 'none' }}>
                <div className="row">
                    <div className="col-8 ps-4">
                        <div className="text-truncate text-left float-left">{story.title}</div>
                    </div>
                    <div className="col-4">
                        <div className="text-truncate text-left float-left">by {story.by}</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col ps-4">
                        <div className="text-truncate text-left float-left text-muted">Score {story.score}</div>
                    </div>
                    <div className="col-4">
                        <div className="text-truncate text-left float-left text-muted">{new Date(story.time * 1000).toLocaleString()}</div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default Story


