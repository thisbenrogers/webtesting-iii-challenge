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
        fireEvent.click(getByText("Close Gate"));
        expect(queryByText("Closed")).toBeTruthy();
    });
});
