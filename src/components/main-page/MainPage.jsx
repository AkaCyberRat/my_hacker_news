import { useContext, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { MainPageContext, MainPageWrapper, Status } from "./main-page-store"
import ContentLayout from "../content-layout/ContentLayout"
import Story from "./story/Story"



const MainPageNaked = observer(() => {
    const store = useContext(MainPageContext)

    useEffect(() => {
        if (store.status === Status.Unknown) {
            store.preloadStories()
        }

        const updateStories = () => {
            store.preloadStories()
        }

        setInterval(updateStories, 5000)

        return () => {
            clearInterval(updateStories)
        }
    }, [])

    useEffect(() => {

    }, [])

    // stories = [{ id: 1, title: 'SomeTitle', score: 222, by: 'Max', time: 1681111111 }]
    return (
        <ContentLayout>
            {store.status === Status.Pending && <div>Loading</div>}
            {store.status === Status.Fulfilled && store.stories.map((s) => (<Story key={s.id} story={s} />))}

        </ContentLayout>

    )
})

const MainPage = () => { return (<MainPageWrapper> <MainPageNaked /> </MainPageWrapper>) }



export default MainPage