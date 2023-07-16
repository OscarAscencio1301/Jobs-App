import { fireEvent, render, screen } from "@testing-library/react";
import { Search } from "../../../src/components/search/Search";
import { useJobs } from "../../../src/hooks/jobs/useJobs";

jest.mock('../../../src/hooks/jobs/useJobs')

describe('Testing Component Search', () => { 

    test('Initial Values ', () => {

        (useJobs as jest.Mock).mockReturnValue({
            searchJobAction: jest.fn(),
            orderJobAction: jest.fn()
        })

        render(<Search />)

        const input = screen.getByRole('searchbox') as HTMLInputElement
        expect(input.value).toBe('')
    });

    test('Change Value Input', () => {

        (useJobs as jest.Mock).mockReturnValue({
            searchJobAction: jest.fn(),
            orderJobAction: jest.fn()
        })

        render(<Search />)

        const input = screen.getByRole('searchbox') as HTMLInputElement
        fireEvent.input(input, {target: {value: 'React Developer'}})
        expect(input.value).toBe('React Developer')
    });
 })