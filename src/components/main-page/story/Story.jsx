
const Story = () => {
    return (
        <div className="story p-1 container-flux border-bottom border-2 border-secondary bg-light">
            <div className="row">
                <div className="col ps-4">
                    <div className="text-left float-left">Title</div>
                </div>
                <div className="col-4">
                    <div className="text-left float-left">by Author</div>
                </div>
            </div>
            <div className="row">
                <div className="col ps-4">
                    <div className="text-left float-left text-muted">222 points</div>
                </div>
                <div className="col-4">
                    <div className="text-left float-left text-muted"> 3 min ago</div>
                </div>
            </div>
        </div>
    )
}

export default Story


