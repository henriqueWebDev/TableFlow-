export default class TokenServices {
    getStatusOptions(data: any) {
        if (data.status.life.total) {
            const localList = []
            for (let i=1; i != data.status.life.total; i++) {
                localList.push(i)
            }
            data.status.life.options = localList
        }
        if (data.status.sanity.total) {
            const localList = []
            for (let i=1; i != data.status.sanity.total; i++) {
                localList.push(i)
            }
            data.status.sanity.options = localList
        }
        if (data.status.magic.total) {
            const localList = []
            for (let i=1; i != data.status.magic.total; i++) {
                localList.push(i)
            }
            data.status.sanity.options = localList
        }
    }

    handleTokenSize(data: any) {
        if (data.size.category === "xs") {
            data.size.height = 80
            data.size.width = 80
        } else if (data.size.category === "sm") {
            data.size.height = 90
            data.size.width = 90
        } else if (data.size.category === "md") {
            data.size.height = 100
            data.size.width = 100
        } else if (data.size.category === "lg") {
            data.size.height = 110
            data.size.width = 110
        } else if (data.size.category === "xl") {
            data.size.height = 120
            data.size.width = 120
        }
    }

    preventMovePage(e: Event) {
        e.preventDefault();
    }
}