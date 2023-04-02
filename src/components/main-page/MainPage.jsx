import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { MainPageProvider, useMainPageStore } from "./main-page-store"
import ContentLayout from "../content-layout/ContentLayout"
import Story from "./story/Story"
import Toolbar from "../toolbar/Toolbar"
import ReactTimeago from "react-timeago"


const MainPageConsumer = observer(() => {
    const store = useMainPageStore()

    
    useEffect(() => {
        if (!store.isStoriesLoaded) { store.loadAllStories() }

        const updateStories = () => {
            if (store.lastUpdateTime && Date.now() - store.lastUpdateTime > 60000) {
                store.loadAllStories()
            }
        }

        const id = setInterval(updateStories, 1000)
        return () => { clearInterval(id) }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <ContentLayout>
            <Toolbar>
                <div className="row">
                    <div className="col-3 ps-4">

                        <button type="button" className="btn btn-orange" onClick={store.loadAllStories} disabled={store.isFetching}>Update</button>

                    </div>

                    <div className="col-4">

                        {!store.isFetching && store.lastUpdateTime !== null && <div className="mt-2 text-truncate text-muted align-bottom">Updated <ReactTimeago date={store.lastUpdateTime} /></div>}
                        {store.isFetching && <div className="mt-2 text-truncate text-muted align-bottom">Loading...</div>}

                    </div>
                </div>
            </Toolbar>

            <div className="story-area">
                {store.stories.map((s) => (<Story key={s.id} story={s} />))}
            </div>

        </ContentLayout>
    )
})

const MainPage = () => (<MainPageProvider><MainPageConsumer /></MainPageProvider>)
export default MainPage