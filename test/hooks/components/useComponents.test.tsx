import { act, renderHook } from '@testing-library/react'
import { useComponents } from '../../../src/hooks/components/useComponents'
import { configureStore } from '@reduxjs/toolkit';
import { componentsSlice } from '../../../src/store/components/components.Slice';
import { Componentes } from '../../../src/interfaces/components/components';
import { Provider } from 'react-redux';

const getStore = (initialState: Componentes) => {
    return configureStore({
        reducer: {
            components: componentsSlice.reducer
        },
        preloadedState: {
            components: initialState
        }
    })
}


describe('Testing custom hook useComponents', () => {
    const inititalValues = {
        isOpenModal: false,
        isOpenAlert: false,
    }

    test('Initial State ', () => {

        const store = getStore(inititalValues)

        const {result} = renderHook(() => useComponents(), {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>
        })
        expect(result.current.isOpenModal).toBeFalsy()
        expect(result.current.isOpenAlert).toBeFalsy()
    });

    test('Test Change View Modal', () => {

        const store = getStore(inititalValues)

        const {result} = renderHook(() => useComponents(), {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>
        })

        act(() => {
            result.current.changeViewModal()
        })
        expect(result.current.isOpenModal).toBeTruthy()
    });

    test('Test Change View Alert', () => {

        const store = getStore(inititalValues)

        const {result} = renderHook(() => useComponents(), {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>
        })

        act(() => {
            result.current.changeViewAlert()
        })
        expect(result.current.isOpenAlert).toBeTruthy()
    });
});