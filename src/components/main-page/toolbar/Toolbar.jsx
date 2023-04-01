import ReactTimeago from "react-timeago";

const Toolbar = ({ isFetching, lastUpdateTime, updateCallback }) => {


    return (
        <div className="toolbar px-1 py-2 container-flux border-bottom border-2 bg-light">
            <div className="row">
                <div className="col-3 ps-4">

                    <button type="button" className="btn btn-orange" onClick={updateCallback} disabled={isFetching}>Refresh</button>

                </div>

                <div className="col-4">

                    {!isFetching && lastUpdateTime !== null && <div className="mt-2 text-truncate text-muted align-bottom">Updated <ReactTimeago date={lastUpdateTime} /></div>}
                    {isFetching && <div className="mt-2 text-truncate text-muted align-bottom">Loading...</div>}

                </div>
            </div>
        </div>
    )
}

export default Toolbar