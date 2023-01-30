export const dateParser = (dateString : string | undefined): string => {
    const date = new Date(dateString? dateString : '')

    const formattedDate = date.toLocaleDateString("en-US", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
      })

    return formattedDate
}