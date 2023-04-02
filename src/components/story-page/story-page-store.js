import { makeAutoObservable } from "mobx";
import { createContext, useContext } from "react";
import API from "../../api/hacker-news-api";

const storyPageStore = makeAutoObservable({
    story: null,
    lastUpdateTime: null,
    isFetching: false,

    setIsFetching(val) { this.isFetching = val },
    setStory(val) { this.lastUpdateTime = Date.now(); this.story = val },

    async loadStory(id) {
        if (this.isFetching) return

        try {
            this.setIsFetching(true)

            const [story] = await API.getItemsByIds([id]);

            this.setStory(story)
        }
        catch (e) { console.log(e) }
        finally { this.setIsFetching(false) }
    },

    clearStore() {
        this.story = null
        this.lastUpdateTime = null
        this.isFetching = false
    }
})

const storePageContext = createContext(storyPageStore)

export const useStoryPageStore = () => { return (useContext(storePageContext)) }
export const StoryPageProvider = ({ children }) => {
    return (
        <storePageContext.Provider value={storyPageStore}>
            {children}
        </storePageContext.Provider>
    )
}