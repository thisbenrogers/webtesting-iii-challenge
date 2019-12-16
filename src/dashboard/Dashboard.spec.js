import React from 'react';
import renderer from 'react-test-renderer';

import { render, fireEvent } from '@testing-library/react';

import Dashboard from './Dashboard';

describe("<Dashboard />", () => {

    it('renders <Dashboard /> correctly', () => {
      const tree = renderer.create(<Dashboard />).toJSON();
      expect(tree).toMatchSnapshot();
    });


});

describe("toggleClosed", () => {
    it('Should pass "closed" into Display', () => {
        const { getByText, queryByText } = render(<Dashboard />);
        expect(queryByText("Close Gate")).toBeTruthy();
        fireEvent.click(getByText("Close Gate"));
        expect(queryByText("Closed")).toBeTruthy();
    });
});

describe("toggleLocked", () => {
    it('Should pass "Locked" into Display', () => {
        const { getByText, queryByText } = render(<Dashboard />);
        expect(queryByText("Close Gate")).toBeTruthy();
        fireEvent.click(getByText("Close Gate"));
        fireEvent.click(getByText("Lock Gate"));
        expect(queryByText("Locked")).toBeTruthy();
        expect(queryByText("Closed")).toBeTruthy();
    });
});