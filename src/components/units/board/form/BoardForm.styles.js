import styled from "@emotion/styled";



export const InputBox = styled.input({
    border: "1px solid gray",
});

export const StoreButton = styled.button({
    margin: "1rem",
    padding: ".5rem 3rem",
    borderRadius: ".5rem",
}, ({changeColor}) => ({
    backgroundColor: changeColor ? "yellow" : "gray",
}));