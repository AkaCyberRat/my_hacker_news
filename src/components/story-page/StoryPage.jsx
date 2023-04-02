import { observer } from "mobx-react-lite"
import { useEffect } from "react"
import { Navigate, useNavigate, useParams } from "react-router"
import { MainPageProvider, useMainPageStore } from "../main-page/main-page-store"
import { StoryPageProvider, useStoryPageStore } from "./story-page-store"
import Toolbar from "../toolbar/Toolbar"
import ContentLayout from "../content-layout/ContentLayout"


const StoryPageConsumer = observer(() => {
    const queryParams = useParams()
    const navigate = useNavigate()
    const mainPageStore = useMainPageStore()
    const storyPageStore = useStoryPageStore()

    if (mainPageStore.stories.find(s => s.id.toString() === queryParams.id) === undefined) return (<Navigate to='/' />)

    useEffect(() => {
        if (storyPageStore.story === null) { storyPageStore.loadStory(queryParams.id) }

        const updateStories = () => {
            if (storyPageStore.lastUpdateTime && Date.now() - storyPageStore.lastUpdateTime > 60000) {
                storyPageStore.loadAllStories()
            }
        }

        const id = setInterval(updateStories, 1000)
        return () => { clearInterval(id); storyPageStore.clearStore() }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <>
            <ContentLayout>
                <Toolbar>
                    <div className="row">
                        <div className="col-3 ps-4">

                            <button type="button" onClick={() => { navigate('/') }} className="btn btn-orange">Back</button>

                        </div>

                        <div className="col">
                            {storyPageStore.isFetching && <div className="mt-2 text-truncate text-muted align-bottom">Loading...</div>}
                        </div>

                        <div className="col-3 pe-4 ">

                            <button type="button" className="btn btn-orange float-end">Update</button>

                        </div>
                    </div>
                </Toolbar>

                {storyPageStore.story !== null && (
                    <div>
                        <div className="row">
                            <div className="col">
                                <div className=" px-2 pt-3 text-center"><h5>{storyPageStore.story.title}</h5></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="p-1 pt-0 text-muted text-center">by {storyPageStore.story.by}</div>
                            </div>
                        </div>

                        <div className="row pt-3">
                            <div className="col">
                                <div className="p-2 text-center text-truncate">Score {storyPageStore.story.score}</div>
                            </div>
                            <div className="col">
                                <div className="p-2 text-center">{storyPageStore.story.kids.length} comment(s)</div>
                            </div>
                            <div className="col">
                                <div className="p-2 text-center">{storyPageStore.story.kids.length} comment(s)</div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col">
                                <div className="mt-4 text-center"><p className="m-0">Link:</p> <a href={storyPageStore.story.url} className="text-muted">{storyPageStore.story.url}</a></div>
                            </div>
                        </div>
                    </div>
                )}
            </ContentLayout>
        </>
    )
})

const StoryPage = () => (<MainPageProvider><StoryPageProvider><StoryPageConsumer /></StoryPageProvider></MainPageProvider>)
export default StoryPage