import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent } from '@testing-library/react';

import Controls from './Controls';

describe("<Controls />", () => {

    it('renders <Controls /> correctly', () => {
      const tree = renderer.create(<Controls />).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it("Changes text when 'Close Gate' button is clicked", () => {
        const mock = jest.fn();
        const { getByText } = render(<Controls toggleLocked={mock} toggleClosed={mock} />);
        fireEvent.click(getByText("Close Gate"));
        expect(mock).toHaveBeenCalled();
    })
});


