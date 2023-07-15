import { useDispatch, useSelector } from "react-redux"
import { GlobalSlice } from "../../interfaces/global/global"
import { Componentes } from "../../interfaces/components/components"
import { changeModal } from "../../store/components/components.Slice"


export const useComponents = () => {

    const { isOpenModal } = useSelector<GlobalSlice, Componentes>(state => state.components)
    const dispatch = useDispatch()

    const changeViewModal = () => {
        dispatch(changeModal())
    }

    return {
        isOpenModal,
        changeViewModal
    }
}
