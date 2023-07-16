import { createSlice } from "@reduxjs/toolkit";
import { Componentes } from "../../interfaces/components/components";

const initialState: Componentes = {
    isOpenModal: false,
    isOpenAlert: false,
}


export const componentsSlice = createSlice({
    name: 'components',
    initialState,
    reducers: {
        changeModal: (state) => {
            state.isOpenModal = !state.isOpenModal
        },
        changeAlert: (state) => {
            state.isOpenAlert = !state.isOpenAlert
        }
    }
})

export const { changeModal, changeAlert } = componentsSlice.actions
