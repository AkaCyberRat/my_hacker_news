import { useEffect } from "react"
import { observer } from "mobx-react-lite"
import { MainPageProvider, useMainPageStore } from "./main-page-store"
import ContentLayout from "../content-layout/ContentLayout"
import Story from "./story/Story"
import Toolbar from "./toolbar/Toolbar"


const MainPageConsumer = observer(() => {
    const store = useMainPageStore()


    useEffect(() => {
        if (!store.isStoriesLoaded) { store.loadAllStories() }

        const updateStories = () => { store.loadAllStories() }
        setInterval(updateStories, 65000)

        return () => { clearInterval(updateStories) }
    }, [store])


    return (
        <ContentLayout>

            <Toolbar {...{
                isFetching: store.isFetching, lastUpdateTime: store.lastUpdateTime,
                updateCallback: () => { store.loadAllStories() }
            }} />

            <div className="story-area">
                {store.stories.map((s) => (<Story key={s.id} story={s} />))}
            </div>

        </ContentLayout>
    )
})

const MainPage = () => (<MainPageProvider><MainPageConsumer /></MainPageProvider>)
export default MainPage