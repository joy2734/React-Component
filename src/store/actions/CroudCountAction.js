import {
    ADD_BAMBOO_CNT,
    ADD_BLACK_STD_CNT,
    ADD_MAHOGANY_CNT,
    TOGGLE_OPEN,
    TOGGLE_BOOKMARK
} from './ActionTypes';

export const openDialogAction = (open) =>{
    console.log('openDialogAction')
    return {
        type: TOGGLE_OPEN,
        payload: open
    }
}

export const toggleBookmarkAction = (useBookmark) =>{
    console.log('toggleBookmarkAction')
    return {
        type: TOGGLE_BOOKMARK,
        payload: useBookmark
    }
}

export const bambooAddCountAction = (leftCount) =>{
    console.log('bambooAddCountAction')
    return {
        type: 'ADD_BAMBOO_COUNT',
        payload: leftCount
    }
}


export const blackStdAddCountAction = (leftCount) =>{
    console.log('blackStdAddCountAction')
    return {
        type: 'ADD_BLACKSTD_COUNT',
        payload: leftCount
    }
}

export const mahoganyAddCountAction = (leftCount) =>{
    console.log('mahoganyAddCountAction')
    return {
        type: 'ADD_MAHOGANY_COUNT',
        payload: leftCount
    }
}

export const subContentHeightAction = () =>{
    console.log('subContentHeightAction')
    return {
        type: 'SUB_CONTENT_HEIGHT',
        payload: 0
    }
}