import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import API from "../../api/hacker-news-api";

export const NewsStatus = {
    Undefined: 'UNDEFINED',
    Loaded: 'LOADED',
}

const mainPageStore = makeAutoObservable({
    stories: [],
    lastUpdateTime: null,
    isStoriesLoaded: false,
    isFetching: false,

    get isStoriesLoadedGetter() {
        return this.isStoriesLoaded
    },

    setIsFetching(bool) { this.isFetching = bool },
    setStories(stories) { this.lastUpdateTime = Date.now(); this.isStoriesLoaded = true; this.stories = stories },

    async loadAllStories() {
        if (this.isFetching) return

        try {
            this.setIsFetching(true)

            const stories = await API.getTopStories(100);
            console.log(stories)
            this.setStories(stories)
        }
        catch (e) { console.log(e) }
        finally { this.setIsFetching(false) }
    }
})

const mainPageContext = createContext(mainPageStore)

export const useMainPageStore = () => { return (useContext(mainPageContext)) }
export const MainPageProvider = ({ children }) => {
    return (
        <mainPageContext.Provider value={mainPageStore}>
            {children}
        </mainPageContext.Provider>
    )
}