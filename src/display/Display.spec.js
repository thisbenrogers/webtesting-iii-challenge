import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Display from './Display';

describe("<Display />", () => {

    it('renders <Display /> correctly', () => {
      const tree = renderer.create(<Display />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    
});

describe("component", () => {
    it("Should display 'Unlocked', 'Open', and 'Close Gate'", () => {
        const { queryByText } = render(<Display />);
        expect(queryByText("Unlocked")).toBeTruthy();
        expect(queryByText("Open")).toBeTruthy();
    });
});
