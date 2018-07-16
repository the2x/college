import {REMOVE_BOLD_QUOTE} from '../types/types'

export function reducerRemoveBoldQuoteHeader(state = [], action) {
    switch (action.type) {
        case REMOVE_BOLD_QUOTE:

        default:
            return state;
    }
}