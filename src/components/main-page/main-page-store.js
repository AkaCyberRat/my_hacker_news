import { makeAutoObservable } from "mobx";
import { createContext } from "react";
import API from "../../api/hacker-news-api";

export const Status = {
    Unknown: 'UNKNOWN',
    Pending: 'PENDING',
    Fulfilled: 'FULFILLED',
    Rejected: 'REJECTED',
}


const MainPageStore = makeAutoObservable({
    stories: [],
    status: Status.Unknown,

    setStories(stories) {
        this.stories = stories
    },

    setStatus(status) {
        this.status = status
    },

    async preloadStories() {
        this.setStatus(Status.Pending)

        const stories = await API.getTopStories(5);
        console.log(stories)
        this.setStories(stories)

        this.setStatus(Status.Fulfilled)
    },

    async loadAllStories() {

    }
})

export const MainPageContext = createContext(MainPageStore)

export const MainPageWrapper = ({ children }) => {
    return (
        <MainPageContext.Provider value={MainPageStore}>
            {children}
        </MainPageContext.Provider>
    )
}