// LinkData structure
interface LinkData {
    // Schema of a hyperlink
    scheme: string;

    // Prefix of a hyperlink
    prefix: string;

    // Original url of a hyperlink
    originalUrl: string;

    // Normalized url of a hyperlink
    normalizedUrl: string;
}

export default LinkData;
