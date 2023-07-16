import { useDispatch, useSelector } from "react-redux"
import { GlobalSlice } from "../../interfaces/global/global"
import { Componentes } from "../../interfaces/components/components"
import { changeAlert, changeModal } from "../../store/components/components.Slice"


export const useComponents = () => {

    const { isOpenAlert, isOpenModal } = useSelector<GlobalSlice, Componentes>(state => state.components)
    const dispatch = useDispatch()

    const changeViewModal = () => {
        dispatch(changeModal())
    }

    const changeViewAlert = () => {
        dispatch(changeAlert())
    }

    return {
        isOpenModal,
        isOpenAlert,
        changeViewModal,
        changeViewAlert
    }
}
