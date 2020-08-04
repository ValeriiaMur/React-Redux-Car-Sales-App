export const addPrice = props => {
    return {
        type: "ADD_PRICE",
        payload: props
    }
}

export const removeFeature = props => {
    return {
        type: "REMOVE_FEATURE",
        payload: props
    }
}
