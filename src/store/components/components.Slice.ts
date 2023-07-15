import { createSlice } from "@reduxjs/toolkit";
import { Componentes } from "../../interfaces/components/components";

const initialState: Componentes = {
    isOpenModal: false
}


export const componentsSlice = createSlice({
    name: 'components',
    initialState,
    reducers: {
        changeModal: (state) => {
            state.isOpenModal = !state.isOpenModal
        }
    }
})

export const { changeModal } = componentsSlice.actions
