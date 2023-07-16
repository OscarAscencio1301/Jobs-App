import { fireEvent, render, screen } from "@testing-library/react";
import { FilterJobs, filters } from "../../../src/components/filter/FilterJobs";
import { useJobs } from "../../../src/hooks/jobs/useJobs";

jest.mock('../../../src/hooks/jobs/useJobs')


describe('Testing Component FilterJobs', () => {

    const filterJobActionMock = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('Initital State', () => {

        (useJobs as jest.Mock).mockReturnValue({
            filterJobAction: jest.fn()
        })


        render(<FilterJobs />)
        expect(screen.getByText('Filtrar empleos de:')).toBeTruthy()
    });

    test('Initital Buttons is equal to filters', () => {

        (useJobs as jest.Mock).mockReturnValue({
            filterJobAction: filterJobActionMock
        })

        render(<FilterJobs />)
        expect(screen.getAllByRole('button').length).toBe(filters.length)
   
    });

    test('Initital Buttons is equal to filters', () => {

        (useJobs as jest.Mock).mockReturnValue({
            filterJobAction: filterJobActionMock
        })

        render(<FilterJobs />)
        expect(screen.getAllByRole('button').length).toBe(filters.length)
   
    });

    test('Action Button', () => {

        (useJobs as jest.Mock).mockReturnValue({
            filterJobAction: filterJobActionMock
        })

        render(<FilterJobs />)
        const button = screen.getAllByRole('button')[0]
        fireEvent.click(button)
        expect(filterJobActionMock).toBeCalledWith(filters[0].label)
   
    });
});