
const Story = ({story}) => {
    return (
        <div className="story p-1 container-flux border-bottom border-2 border-secondary bg-light">
            <div className="row">
                <div className="col ps-4">
                    <div className="text-left float-left">{story.title}</div>
                </div>
                <div className="col-4">
                    <div className="text-left float-left">by {story.by}</div>
                </div>
            </div>
            <div className="row">
                <div className="col ps-4">
                    <div className="text-left float-left text-muted">{story.score} point(s)</div>
                </div>
                <div className="col-4">
                    <div className="text-left float-left text-muted">{new Date(story.time * 1000).toLocaleString()}</div>
                </div>
            </div>
        </div>
    )
}

export default Story


