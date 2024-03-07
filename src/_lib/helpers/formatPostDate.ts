function formatDate(dateString: string, year: "numeric" | "2-digit" | undefined): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = {
        month: "long",
        day: "numeric",
        year: year,
    };
    const formattedDate = date.toLocaleDateString("en-US", options);

    return formattedDate;
}

export default formatDate;