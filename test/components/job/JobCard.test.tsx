import { fireEvent, render, screen } from "@testing-library/react";
import { JobCard } from "../../../src/components/job/JobCard";
import { jobsTest } from '../../fixtures/job'
import { useJobs } from "../../../src/hooks/jobs/useJobs";
import { useComponents } from "../../../src/hooks/components/useComponents";
jest.mock('../../../src/hooks/components/useComponents')
jest.mock('../../../src/hooks/jobs/useJobs')


describe('Testing Component JobCard', () => {
    const activateJobActionMock = jest.fn();
    const changeViewModalMock = jest.fn();

    beforeEach(() => jest.clearAllMocks())

    test('Initial Values', () => {

        (useJobs as jest.Mock).mockReturnValue({
            activateJobAction: activateJobActionMock,
            likeJobAction: jest.fn(),
            jobsLike: []
        });

        (useComponents as jest.Mock).mockReturnValue({
            changeViewModal: changeViewModalMock
        });


        render(<JobCard {...jobsTest[0]} />)
        expect(screen.getByText(jobsTest[0].name)).toBeTruthy()
        expect(screen.getByText(jobsTest[0].date)).toBeTruthy()
    });

    test('Action Button', () => {

        (useJobs as jest.Mock).mockReturnValue({
            activateJobAction: activateJobActionMock,
            likeJobAction: jest.fn(),
            jobsLike: []
        });

        (useComponents as jest.Mock).mockReturnValue({
            changeViewModal: changeViewModalMock
        });


        render(<JobCard {...jobsTest[0]} />)

        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(activateJobActionMock).toBeCalled()
        expect(changeViewModalMock).toBeCalled()

    });
});