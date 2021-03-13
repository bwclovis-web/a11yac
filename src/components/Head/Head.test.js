import React from 'react';
import renderer from 'react-test-renderer';
import Head from './Head';

describe("Head", () => {
    it('should render correctly ', () => {
        const tree = renderer.create(<Head/>).toJSON()
        expect(tree).toMatchSnapshot()
    });
})