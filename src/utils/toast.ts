import {Toast} from '../containers/Toast'
import references from './references'

export const saveToastRef = (ref: Toast) => {
    console.log('reference saved')
    references.toast = ref
}

export const showToast = () => {
    if (references.toast) {
        console.log('showing modal')
        references.toast.show()
    }
}

export const hideToast = () => {
    references.toast?.hide()
}
