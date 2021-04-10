import { Star } from "@material-ui/icons";

const rankingDisplay = (ranking) => [...Array(10)].map((e, i) => {
    var value = i + 1;
    if (value <= ranking ) {
        return <Star style={{color: 'blueviolet'}} fontSize='inherit' key={value}></Star>
    } else {
        return <Star fontSize='inherit' key={value}></Star>
    }
});

const compareStrings = (a, b) => {
    return a.toLowerCase().replace(/\s+/g, '') === b.toLowerCase().replace(/\s+/g, '')
}

function normalizeString(str) {
    var normalized = escape(str.normalize("NFD")).replace(/%u..../g, "")
    return unescape(normalized).toLowerCase()
}

export default {
    rankingDisplay, compareStrings, normalizeString
}