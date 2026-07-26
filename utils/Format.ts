export const formatViews = (views: number) => {
    return new Intl.NumberFormat("en-US", {
        notation: 'compact',
        maximumFractionDigits: 1
    }).format(views)
} 

export const formatUploadDate = (date: string) => {
    const year = Number(date.slice(0, 4))
    const month = Number(date.slice(4, 6)) - 1
    const day = Number(date.slice(6, 8))

    return new Date(year, month, day).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    })
}

export const formatTimeUpload = (timestamp: number) => {
    return new Date(timestamp * 1000).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
    })
}