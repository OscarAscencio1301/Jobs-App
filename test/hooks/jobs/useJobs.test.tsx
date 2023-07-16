import { act, renderHook } from "@testing-library/react";
import { useJobs } from "../../../src/hooks/jobs/useJobs";
import { configureStore } from "@reduxjs/toolkit";
import { jobSlice } from "../../../src/store/jobs/jobs.Slice";
import { Jobs } from "../../../src/interfaces/jobs/jobs";
import { Provider } from "react-redux";

const getState = (initialState: Jobs) => {
    return configureStore({
        reducer: {
            jobs: jobSlice.reducer
        },
        preloadedState: {
            jobs: initialState
        }
    })
}


describe('Testing custom hook useJobs', () => {

    const initialState = {

        jobs: [],
        jobSelect: null,
        jobsFilter: [],
        jobsLike: [],
        jobsSelected: [],
        getJobs: jest.fn(),
        activateJobAction: jest.fn(),
        selectJobAction: jest.fn(),
        likeJobAction: jest.fn(),
        searchJobAction: jest.fn(),
        filterJobAction: jest.fn(),
        orderJobAction: jest.fn(),
        deleteJobAction: jest.fn(),
    }

    test('Initial Values ', () => {

        const store = getState(initialState)
        const {result} = renderHook(() => useJobs(), {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>
        })

        expect(result.current.jobs.length).toBe(0)
        expect(result.current.jobsFilter.length).toBe(0)
        expect(result.current.jobsLike.length).toBe(0)
        expect(result.current.jobSelect).toBeNull()


    });
    test('Initial Values ', () => {

        const store = getState(initialState)
        const {result} = renderHook(() => useJobs(), {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>
        })

        expect(result.current.jobs.length).toBe(0)
        expect(result.current.jobsFilter.length).toBe(0)
        expect(result.current.jobsLike.length).toBe(0)
        expect(result.current.jobSelect).toBeNull()


    });

    test('Action get Jobs', async() => {

        const store = getState(initialState)
        const {result} = renderHook(() => useJobs(), {
            wrapper: ({children}) => <Provider store={store}>{children}</Provider>
        })


        await act(async() => {
            await result.current.getJobs()
        })

        expect(result.current.jobs.length).toBe(0)
        expect(result.current.jobsFilter.length).toBe(0)
        expect(result.current.jobsLike.length).toBe(0)
        expect(result.current.jobSelect).toBeNull()


    });
});