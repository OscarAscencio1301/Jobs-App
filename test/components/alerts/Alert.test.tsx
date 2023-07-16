import { fireEvent, render, screen } from '@testing-library/react'
import { Alert } from '../../../src/components/alerts/Alert';
import { useComponents } from '../../../src/hooks/components/useComponents';

jest.mock('../../../src/hooks/components/useComponents')

describe('Testing Alert', () => {
    const changeViewAlertMock = jest.fn()

    beforeEach(() => jest.clearAllMocks())

    test('Initial State', () => {

        (useComponents as jest.Mock).mockReturnValue({
            isOpenModal: false,
            isOpenAlert: false,
            changeViewModal: jest.fn(),
            changeViewAlert: changeViewAlertMock,
        })

        const { container } = render(<Alert />)
        expect(container).toMatchSnapshot()
    });

    test('Initial Text', () => {

        (useComponents as jest.Mock).mockReturnValue({
            isOpenModal: false,
            isOpenAlert: true,
            changeViewModal: jest.fn(),
            changeViewAlert: changeViewAlertMock,
        })

        render(<Alert />)

        expect(screen.getByText('Cambios aplicados')).toBeTruthy()
    });

    test('Close Alert', () => {

        (useComponents as jest.Mock).mockReturnValue({
            isOpenModal: false,
            isOpenAlert: true,
            changeViewModal: jest.fn(),
            changeViewAlert: changeViewAlertMock,
        })

        render(<Alert />)
        const button = screen.getByRole('button')
        fireEvent.click(button)

        expect(changeViewAlertMock).toBeCalled()
    });
});