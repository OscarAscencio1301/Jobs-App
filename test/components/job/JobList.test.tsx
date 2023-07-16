import { render, screen } from "@testing-library/react";
import { JobList } from "../../../src/components/job/JobList";
import { jobsTest } from "../../fixtures/job";
import { useJobs } from "../../../src/hooks/jobs/useJobs";
import { useComponents } from "../../../src/hooks/components/useComponents";

jest.mock('../../../src/hooks/components/useComponents')
jest.mock('../../../src/hooks/jobs/useJobs')


describe('Testing JobList', () => {
    const activateJobActionMock = jest.fn();
    const changeViewModalMock = jest.fn();

    beforeEach(() => jest.clearAllMocks())
    test('Initial Values ', () => {

        (useJobs as jest.Mock).mockReturnValue({
            activateJobAction: activateJobActionMock,
            likeJobAction: jest.fn(),
            jobsLike: []
        });

        (useComponents as jest.Mock).mockReturnValue({
            changeViewModal: changeViewModalMock
        });

        render(<JobList jobs={jobsTest}/>)
        expect(screen.getByText(jobsTest[0].name)).toBeTruthy()
        expect(screen.getByText(jobsTest[1].name)).toBeTruthy()
    });
});