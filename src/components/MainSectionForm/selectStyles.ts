export const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 48 * 4.5 + 8,
        },
    },
};

export const selectStyle = {
    '& .MuiOutlinedInput-notchedOutline': {
        border: "none",
        borderRight: {xs:"none", lg:'1px solid #ddd'},
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
        border: "none",
        borderRight: {xs:"none", lg:'1px solid #ddd'},
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        border: "none",
        borderRight: {xs:"none", lg:'1px solid #ddd'},
    },
}