

const API = {
    getTopStories: async (count) => {
        const response = await fetch(`https://hacker-news.firebaseio.com/v0/beststories.json?orderBy="$priority"&limitToFirst=${count}`)
        const storiesIds = await response.json()

        const items = await API.getItemsByIds(storiesIds)
        return items
    },

    getItemsByIds: async (ids) => { 

        const promises = ids.map(id => {
            const promise = fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(r => r.json());

            promise.catch(err => console.error(err))

            return promise
        })

        const items = await Promise.all(promises)
        return items
    },
}

export default API